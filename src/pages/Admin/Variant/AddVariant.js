import React, { useState } from 'react'
import Plus from '../../../assets/img/admin/add.svg'
import { createVariant, editVariant } from '../../../api/variants'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchingEditvariant,
  fetchVariant,
} from '../../../features/Variant/action'
export default function AddVariant() {
  let dispatch = useDispatch()

  let variant = useSelector((state) => state.variant.datasingle)
  let variantAll = useSelector((state) => state.variant)

  let status2 = useSelector((state) => state.variant.status2)
  // menampung data form input
  // const [form, setForm] = useState({
  //   nama_variant: '',
  //   jenis_variant: '',
  //   stock: 0,
  // })

  const [errornama_variant, setErrornama_variant] = useState('kosong')
  const [errorname, setErrorname] = useState('kosong')
  const [errorstock, setErrorstock] = useState('kosong')

  console.log('errornama_variant ::   ', errornama_variant)
  console.log('errorname ::   ', errorname)
  console.log('errorstock ::   ', errorstock)

  // show data when klik button
  const [showErrorVAriant, setShowErrorVAriant] = useState('')

  const [dataCategory, setdataCategory] = useState({
    name: '',
    option: [],
  })
  const [inputList, setinputList] = useState([{ name: '', stock: '' }])
  const [valuename, setValuename] = useState()

  const handleAddInput = () => {
    setinputList([...inputList, { name: '', stock: '' }])
  }

  const handleRemove = (index) => {
    const list = [...inputList]
    list.splice(index, 1)
    setinputList(list)
  }

  const handleChange = (e, index) => {
    const { name, value } = e.target
    let data = dataCategory

    if (name === 'nama_variant' && value.length < 3) {
      setErrornama_variant(
        'Nama variant minimal 3 karakter atau tidak boleh kosong',
      )
    } else {
      setErrornama_variant('')
    }
    if (name === 'nama_variant') {
      setValuename(value)
      var nama_variantt = {
        ...data,
        name: value,
        option: inputList,
      }
    } else {
      if (name === 'name' && value.length < 3) {
        setErrorname('Name option minimal 3 karakter atau tidak boleh kosong')
      } else {
        setErrorname('')
      }

      if (name === 'stock' && value < 1) {
        setErrorstock('stock minimal 1')
      } else {
        setErrorstock('')
      }

      const list = [...inputList]
      // 0: {name: "3", stock: ""}
      console.log('value', value)
      console.log('list', list)

      // ngambil nilai index berdasarkan name value yang diinput dari looping inputlist
      list[index][name] = value

      setinputList(list)
      console.log('inputList', inputList)
      var nama_variantt = {
        ...data,
        name: valuename,
        option: inputList,
      }
    }

    setdataCategory(nama_variantt)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      errornama_variant ||
      errornama_variant === 'kosong' ||
      errorname ||
      errorname === 'kosong' ||
      errorstock ||
      errorstock === 'kosong'
    ) {
      alert('data harus diisi')
    } else {
      try {
        let data = await createVariant(dataCategory)
        dispatch(fetchVariant())
      } catch (res) {
        console.log(res)
      }
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      let id = variant._id
      dispatch(fetchingEditvariant(dataCategory, id))
      dispatch(fetchVariant())
    } catch (response) {
      console.log(response)
    }
  }

  React.useEffect(() => {
    dispatch(fetchVariant())

    if (!variant.option) {
      console.log('kosong')
    } else {
      setinputList(variant.option)
      setValuename(variant.name)
    }
  }, [variant, variantAll.statusedit])

  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          {status2 === 'edit' ? 'Edit' : 'Add'}
          <span className="font-normal ml-2">Variant</span>
        </p>
      </div>
      <form onSubmit={status2 === 'edit' ? handleUpdate : handleSubmit}>
        <input
          type="text"
          name="nama_variant"
          className="border w-full mt-3 text-sm py-2 pl-2"
          placeholder="Nama Variant"
          onChange={handleChange}
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
            {status2 === 'edit' ? 'Edit Variants' : 'Add Variant'}
          </p>
        </button>
      </form>
    </div>
  )
}
