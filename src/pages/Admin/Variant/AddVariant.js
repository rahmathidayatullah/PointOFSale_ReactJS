import React, { useState } from 'react'
import Plus from '../../../assets/img/admin/add.svg'
import IconDown from '../../../assets/img/admin/drop.svg'
import { getAllProducts } from '../../../api/products'
import { useDispatch } from 'react-redux'
import { fetchCategory } from '../../../features/Category/action'
import { createVariant } from '../../../api/variants'
export default function AddVariant() {
  const [datavariant, setDatavariant] = useState()

  const [dataCategory, setdataCategory] = useState({
    name: '',
    option: [],
  })

  const [inputList, setinputList] = useState([
    {
      name: '',
      stock: 0,
    },
  ])

  // console.log('alldata', alldata.option)
  // console.log('inputList', inputList)

  // let dispatch = useDispatch()

  // const get = () => {
  //   dispatch(getAllVariant).then((res) => {
  //     setDatavariant(res.data.data)
  //   })
  // }

  // React.useEffect(() => {
  //   get()
  // }, [])

  const fetchVariant = async () => {
    try {
      let data = await getAllProducts()
      // console.log('data', data.data.data)
      setDatavariant(data.data.data)
      console.log(datavariant)
    } catch (error) {}
  }
  const [namavariant, setnamavariant] = useState()
  // console.log(namavariant)
  console.log(namavariant)

  const handleAddInput = () => {
    // console.log(...inputList)
    setinputList([...inputList, { name: '', stock: '' }])
  }

  const handleRemove = (index) => {
    const list = [...inputList]
    list.splice(index, 1)
    setinputList(list)
  }

  const handleChange = (e, index) => {
    // setnamavariant(e.target.value)
    // console.log('namavariant', namavariant)

    const { name, value } = e.target
    if (name === 'nama_variant') {
      setnamavariant(e.target.value)
      console.log(namavariant)
    } else {
      const list = [...inputList]
      list[index][name] = value
      setinputList(list)
      console.log('list', list)
    }

    let data = dataCategory
    console.log('data', data)

    let nama_variantt = {
      ...data,
      name: namavariant,
      option: inputList,
    }

    setdataCategory(nama_variantt)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // let nama_variantt = {
    //   ...data,
    //   name: namavariant,
    //   option: inputList,
    // }

    // setdataCategory(nama_variantt)

    try {
      let data = await createVariant(dataCategory)
      fetchVariant()
      console.log(data)
    } catch (res) {
      console.log(res)
    }

    console.log('dataCategory', dataCategory)
  }

  React.useEffect(() => {
    fetchVariant()
  }, [])

  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          {/* {props.textTitle} */}
          Add Variant
          <span className="font-normal ml-2">Variant</span>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          // onChange={(e) => setnamavariant(e.target.value)}
          name="nama_variant"
          onChange={handleChange}
          value={namavariant}
        />

        {inputList.map((item, i) => {
          return (
            <div key={i} className="w-full flex items-center mt-5">
              <input
                className="w-3/12 p-2 border border-gray-200 left-0 rounded-md focus:outline-none  mr-2"
                placeholder="Size"
                name="name"
                value={item.name}
                onChange={(e) => handleChange(e, i)}
              />
              <input
                className="w-3/12 p-2 border border-gray-200 left-0 rounded-md focus:outline-none mr-2"
                placeholder="Stok"
                name="stock"
                value={item.stock}
                onChange={(e) => handleChange(e, i)}
              />
              <input
                type="button"
                className="w-max px-3 py-2 rounded mr-2 w-3/12"
                value="Remove"
                onClick={() => handleRemove(i)}
              />
              <input
                type="button"
                value="Add"
                className="w-max px-3 py-2 rounded w-3/12"
                onClick={handleAddInput}
              />
            </div>
          )
        })}
        {/* <pre>{JSON.stringify(inputList, null, 2)}</pre> */}

        <button
          className="mt-3 p-2 bg-green-500 text-white focus:outline-none flex items-center w-full justify-center rounded-md"
          type="submit"
          // onClick={AddVariant}
        >
          <img src={Plus} />
          <p className="font-bold text-md pl-3">Add Variants</p>
        </button>
      </form>
    </div>
  )
}
