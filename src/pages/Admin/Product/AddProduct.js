import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategory } from '../../../features/Category/action'
import { fetchVariant } from '../../../features/Variant/action'
import { useForm } from 'react-hook-form'
import {
  fetchProduct,
  fetchEditProduct,
} from '../../../features/Product/action'
import { createProduct } from '../../../api/products'
import { rules } from './validation'

export default function AddProduct() {
  let dispatch = useDispatch()
  const { register, handleSubmit, errors, setError } = useForm()

  let singleproduct = useSelector((state) => state.product.datasingle)
  let idsingle = useSelector((state) => state.product.datasingle._id)
  let category = useSelector((state) => state.category.data)
  let variant = useSelector((state) => state.variant.data)

  let statusedit = useSelector((state) => state.product.statusedit)

  const [namaproduk, setnamaproduk] = useState('')
  const [price, setprice] = useState(0)
  const [description, setdescription] = useState('')

  console.log('singleproduct', singleproduct)
  console.log('statusedit', statusedit)
  console.log('idsingle', idsingle)
  const onSubmit = async (data) => {
    let { name, price, description, category, variant } = data
    let image = data.image[0]

    console.log('nameeee', image)
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('category', category)
    formData.append('variant', variant)
    formData.append('image', image)
    // let datas = { ...data, image: image }
    console.log('datas', formData)
    let { datar } = await createProduct(formData)
    console.log('datar', datar)
    dispatch(fetchProduct())
    // console.log('object')
  }

  const onUpdate = (data) => {
    let { name, price, description, category, variant } = data
    let image = data.image[0]

    // console.log('nameeee', image)
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('category', category)
    formData.append('variant', variant)
    formData.append('image', image)

    dispatch(fetchEditProduct(formData, idsingle))
    dispatch(fetchProduct())
  }

  React.useEffect(() => {
    dispatch(fetchCategory())
    dispatch(fetchVariant())
    setnamaproduk(singleproduct.name)
    setprice(singleproduct.price)
    setdescription(singleproduct.description)
    // console.log('namaproduk', singleproduct.name)
  }, [singleproduct])

  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          {statusedit === 'edit' ? 'Edit' : 'Add'}

          <span className="font-normal ml-2">Product</span>
        </p>
      </div>
      <form
        onSubmit={
          statusedit === 'add' ? handleSubmit(onSubmit) : handleSubmit(onUpdate)
        }
      >
        <input
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          name="name"
          placeholder="Nama produk"
          type="text"
          value={namaproduk}
          onChange={(e) => setnamaproduk(e.target.value)}
          ref={register(rules.name)}
        />
        {errors.name?.message}
        <input
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          name="price"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          ref={register(rules.price)}
        />
        {errors.price?.message}
        <textarea
          rows="6"
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          name="description"
          placeholder="Deskripsi produk"
          type="text"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          ref={register(rules.description)}
        />
        {errors.description?.message}
        <select
          className="w-full mt-3 p-2 border border-gray-200 left-0 rounded-md text-gray-500 focus:outline-none"
          name="category"
          ref={register(rules.category)}
        >
          {errors.category?.message}
          <option value="">Pilih category</option>

          {category === undefined
            ? ''
            : category.map((item, index) => {
                return (
                  <option value={item._id} key={index}>
                    {item.name}
                    {/* {singleproduct.category} */}
                  </option>
                )
              })}
        </select>
        {errors.category?.message}
        <select
          className="w-full mt-3 p-2 border border-gray-200 left-0 rounded-md text-gray-500 focus:outline-none"
          name="variant"
          ref={register(rules.variant)}
        >
          <option value="">Pilih variant</option>
          {variant.map((item, index) => {
            return (
              <option value={item._id} key={index}>
                {item.name}
              </option>
            )
          })}
        </select>
        {errors.variant?.message}

        <input
          className="w-full  mt-3 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          placeholder="Nama"
          name="image"
          type="file"
          ref={register(rules.image)}
        />
        {errors.image?.message}

        <button
          className="mt-3 p-2 bg-green-500 text-white focus:outline-none flex items-center w-full justify-center rounded-md font-bold"
          type="submit"
        >
          {statusedit === 'add' ? 'ADD' : 'EDIT'}
          &nbsp;PRODUCT
        </button>
      </form>
    </div>
  )
}
