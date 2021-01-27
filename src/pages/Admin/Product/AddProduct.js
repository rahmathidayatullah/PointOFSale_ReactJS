import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategory } from '../../../features/Category/action'
import { fetchVariant } from '../../../features/Variant/action'
import { useForm } from 'react-hook-form'
import { fetchProduct } from '../../../features/Product/action'
import { createProduct } from '../../../api/products'

export default function AddProduct() {
  let dispatch = useDispatch()
  const { register, handleSubmit, errors, setErrors } = useForm()

  let singleproduct = useSelector((state) => state.product.datasingle)
  let category = useSelector((state) => state.category.data)
  let variant = useSelector((state) => state.variant.data)

  console.log('singleproduct', singleproduct)
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
  }

  React.useEffect(() => {
    dispatch(fetchCategory())
    dispatch(fetchVariant())
  }, [])

  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          Add <span className="font-normal ml-2">Product</span>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          name="name"
          placeholder="Nama produk"
          type="text"
          value={singleproduct.name}
          ref={register}
        />
        <input
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          name="price"
          placeholder="Price"
          type="number"
          value={singleproduct.price}
          ref={register}
        />
        <textarea
          rows="6"
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          name="description"
          placeholder="Deskripsi produk"
          type="text"
          value={singleproduct.description}
          ref={register}
        />
        <select
          className="w-full mt-3 p-2 border border-gray-200 left-0 rounded-md text-gray-500 focus:outline-none"
          name="category"
          ref={register}
        >
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
        <select
          className="w-full mt-3 p-2 border border-gray-200 left-0 rounded-md text-gray-500 focus:outline-none"
          name="variant"
          ref={register}
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
        <input
          className="w-full  mt-3 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          placeholder="Nama"
          name="image"
          type="file"
          ref={register}
        />

        <button
          className="mt-3 p-2 bg-green-500 text-white focus:outline-none flex items-center w-full justify-center rounded-md font-bold"
          type="submit"
        >
          ADD PRODUCT
        </button>
      </form>
    </div>
  )
}
