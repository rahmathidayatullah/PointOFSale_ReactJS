import React, { useState } from 'react'
import Plus from '../../../assets/img/admin/add.svg'
import { getAllProducts } from '../../../api/products'
import { createVariant, editVariant } from '../../../api/variants'
// import { getSingleVariantt } from '../../../features/Variant/action'
import { useSelector, useDispatch } from 'react-redux'
import {
  getSingleVariantt,
  fetchVariant,
} from '../../../features/Variant/action'
export default function AddVariant() {
  let dispatch = useDispatch()

  let variant = useSelector((state) => state.variant.datasingle)
  let variantAll = useSelector((state) => state.variant)

  const [datavariant, setDatavariant] = useState()
  const [dataCategory, setdataCategory] = useState({
    name: '',
    option: [],
  })
  const [valuevar, setValuevar] = useState(0)
  const [dataarrayy, setDataarrayy] = useState([])
  // input list from redux data single option
  const [inputList, setinputList] = useState([{ name: '', stock: '' }])
  // nama variant dari redux get name_variant
  const [valuename, setValuename] = useState()
  const [namavariant, setnamavariant] = useState()
  const [status, setstatus] = useState(true)

  // const fetchVariant = async () => {
  //   try {
  //     let data = await getAllProducts()
  //     setDatavariant(data.data.data)
  //     // console.log(datavariant)
  //   } catch (error) {}
  // }

  // console.log(namavariant)

  const handleAddInput = () => {
    setinputList([...inputList, { name: '', stock: '' }])
    console.log('inputList', inputList)
  }

  const handleRemove = (index) => {
    const list = [...inputList]
    list.splice(index, 1)
    setinputList(list)
  }

  const handleChange = (e, index) => {
    const { name, value } = e.target
    let data = dataCategory
    console.log('data', data)

    if (name === 'nama_variant') {
      // setnamavariant(e.target.value)
      setValuename(value)
      console.log('namavariant', valuename)
      var nama_variantt = {
        ...data,
        name: value,
        option: inputList,
      }
    } else {
      const list = [...inputList]
      list[index][name] = value
      setinputList(list)
      console.log('list', list)
      var nama_variantt = {
        ...data,
        name: valuename,
        option: inputList,
      }
    }

    console.log('nama_variantt', nama_variantt)

    setdataCategory(nama_variantt)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let data = await createVariant(dataCategory)
      // fetchVariant()
      dispatch(fetchVariant())
    } catch (res) {
      console.log(res)
    }
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      let id = variant.data._id
      let { data } = await editVariant(id, dataCategory)
      setstatus(true)
      dispatch(fetchVariant())
    } catch (error) {}
  }

  React.useEffect(() => {
    fetchVariant()
    dispatch(getSingleVariantt(variant))
    dispatch(getSingleVariantt(variantAll))
    if (variant.data === undefined) {
      console.log('data kosong')
    } else {
      setValuevar(variant.data.option.length)
      // input list from redux data single option
      setinputList(variant.data.option)
      // nama variant dari redux get name_variant
      setValuename(variant.data.name)
      console.log('variantAll', variantAll.status)
      setstatus(variantAll.status)
      console.log('status', status)
    }
  }, [variant])

  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          Add Variant
          <span className="font-normal ml-2">Variant</span>
        </p>
      </div>
      <form onSubmit={status === true ? handleSubmit : handleEdit}>
        {/* {console.log('varianttttt', variant.data.name)} */}
        <input
          type="text"
          name="nama_variant"
          className="border w-full mt-3 text-sm py-2 pl-2"
          placeholder="Nama Variant"
          onChange={handleChange}
          // nama variant dari redux get name_variant
          value={valuename}
        />

        {inputList === undefined
          ? ''
          : inputList.map((item, i) => {
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

        <button
          className="mt-3 p-2 bg-green-500 text-white focus:outline-none flex items-center w-full justify-center rounded-md"
          type="submit"
        >
          <img src={Plus} />
          <p className="font-bold text-md pl-3">
            {status === true ? 'Add Variants' : 'Edit Variant'}
          </p>
        </button>
      </form>
    </div>
  )
}
