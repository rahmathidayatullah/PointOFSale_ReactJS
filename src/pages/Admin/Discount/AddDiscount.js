import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchDiscount,
  fetchEditDiscount,
} from '../../../features/Discount/action'
import { fetchProduct } from '../../../features/Product/action'
import { useForm } from 'react-hook-form'
import { createDiscount, addProductToDiscount } from '../../../api/discount'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { rules } from './validation'
export default function AddDiscount() {
  let dispatch = useDispatch()
  const { register, handleSubmit, errors, setError } = useForm()

  let discountSingle = useSelector((state) => state.discount.datasingle)
  // console.log('discountSingle', discountSingle)
  let idDiskon = useSelector((state) => state.discount.datasingle._id)
  let dataAllDiscount = useSelector((state) => state.discount)

  let idsingle = useSelector((state) => state.discount.datasingle._id)

  let statusedit = useSelector((state) => state.discount.statusedit)
  // id diskon
  const [diskonId, setdiskonId] = useState()
  console.log('diskonId', diskonId)
  const [nama_diskon, setnama_diskon] = useState('')
  const [value, setvalue] = useState([])
  const [date, setdate] = useState()
  let dataAllProduct = useSelector((state) => state.product.data)
  const [optionvalue, setOptionvalue] = useState([])
  const [product, setProduct] = useState([])
  console.log('product', product)

  const [statusForm, setStatusForm] = useState('')

  const option = dataAllProduct.map((item) => {
    return { value: item._id, label: item.name }
  })
  console.log('option', option)

  const onSubmit = async (data) => {
    let { datar } = await createDiscount(data)
    dispatch(fetchDiscount())
    // (1) cek apakah ada error
    if (data.error) {
      // (2) dapatkan field terkait jika ada errors
      let fields = Object.keys(data.fields)

      // (3) untuk masing-masing field kita terapkan error dan tangkap pesan errornya
      fields.forEach((field) => {
        setError(field, {
          type: 'server',
          message: data.fields[field]?.properties?.message,
        })
      })
    }
  }
  const onSubmitToProduct = async () => {
    if (errorProduct === 'kosong') {
      // setErrorProduct('Data product harus diisi')
      alert(errorProduct)
    } else {
      let dataProduct = { product: product.map((item) => item.value) }
      let data = await addProductToDiscount(diskonId, dataProduct)
      console.log('data', data)
    }

    // console.log('dataProduct :', dataProduct, 'diskonId :', diskonId)
  }

  const onEdit = async (data) => {
    dispatch(fetchEditDiscount(data, idsingle))
    dispatch(fetchDiscount())
  }

  const [errorProduct, setErrorProduct] = useState('kosong')
  const handleChangeSelect = (option) => {
    setErrorProduct('data tidak kosong')
    setProduct(option)
  }

  React.useEffect(() => {
    dispatch(fetchDiscount())
    dispatch(fetchProduct())
    setnama_diskon(discountSingle.name)
    setvalue(discountSingle.value)
    setdiskonId(idDiskon)
    setStatusForm(dataAllDiscount.showform)
  }, [dispatch, discountSingle, dataAllDiscount.showform])

  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      {statusForm === '' ? (
        <div>
          <div className="border-b pb-3">
            <p className="font-bold text-2xl">
              Add Discount To
              <span className="font-normal ml-2">Product</span>
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmitToProduct)}>
            <Select
              options={option}
              isMulti
              value={product}
              onChange={handleChangeSelect}
            />
            <button
              className="mt-3 p-2 bg-green-500 text-white focus:outline-none flex items-center w-full justify-center rounded-md font-bold"
              type="submit"
            >
              {/* {statusedit === 'add' ? 'ADD' : 'EDIT'} */}
              &nbsp; DISCOUNT TO PRODUCT
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div className="border-b pb-3">
            <p className="font-bold text-2xl">
              {statusedit === 'add' ? 'Add' : 'Edit'}
              <span className="font-normal ml-2">Diskon</span>
            </p>
          </div>
          <form
            onSubmit={
              statusedit === 'add'
                ? handleSubmit(onSubmit)
                : handleSubmit(onEdit)
            }
          >
            {/* <Select options={option} /> */}

            <input
              className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
              name="name"
              placeholder="Nama Diskon"
              type="text"
              value={nama_diskon}
              onChange={(e) => setnama_diskon(e.target.value)}
              ref={register(rules.name)}
            />
            {errors.name?.message}

            <select
              className="w-full mt-3 p-2 border border-gray-200 left-0 rounded-md text-gray-500 focus:outline-none"
              name="status"
              ref={register(rules.status)}
            >
              <option value="">Aktivasi Diskon</option>

              <option value="y">Aktif</option>
              <option value="n">Tidak Aktif</option>
            </select>

            {errors.status?.message}

            <input
              className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
              name="value"
              placeholder="Jumlah Diskon"
              type="number"
              value={value}
              onChange={(e) => setvalue(e.target.value)}
              ref={register(rules.value)}
            />

            {errors.value?.message}

            <select
              className="w-full mt-3 p-2 border border-gray-200 left-0 rounded-md text-gray-500 focus:outline-none"
              name="type"
              ref={register(rules.type)}
            >
              <option value="">Type Diskon</option>

              <option value="%">%</option>
              <option value="Rp">Rp</option>
            </select>

            {errors.type?.message}

            <input
              className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
              name="date"
              placeholder="Date last diskon"
              type="date"
              value={date}
              onChange={(e) => setdate(e.target.value)}
              ref={register(rules.date)}
            />

            {errors.date?.message}

            <button
              className="mt-3 p-2 bg-green-500 text-white focus:outline-none flex items-center w-full justify-center rounded-md font-bold"
              type="submit"
            >
              {statusedit === 'add' ? 'ADD' : 'EDIT'}
              &nbsp; DISKON
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
