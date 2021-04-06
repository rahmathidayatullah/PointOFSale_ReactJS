import React, { useState } from 'react'
import Header from './components/Header'
import Close from '../../assets/img/close.svg'
import Toggle from '../../assets/img/toggle.svg'
import TopToggle from '../User/components/TopToggle'
import { config } from '../../config'
import Up from '../../assets/img/up.svg'
import Down from '../../assets/img/down.svg'
import SideToggle from '../User/components/SideToggle'
import { useForm } from 'react-hook-form'
import Card from './components/Card'
import CardModal from './components/CardModal/Index'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProduct,
  setKeyword,
  setCategory,
  sortAsc,
  sortDesc,
  sortTimeNews,
  fetchSingleProduct,
} from '../../features/Product/action'
import { fetchCategory } from '../../features/Category/action'
import { showModal } from '../../features/Modal/action'
import { formatRupiah } from '../../utils/format-rupiah'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
export default function User() {
  let dispatch = useDispatch()
  let history = useHistory()
  let { register, handleSubmit, errors, setErrors } = useForm()
  let cardproduct = useSelector((state) => state.product.data)
  let { user } = JSON.parse(localStorage.getItem('auth'))

  let statusmodal = useSelector((state) => state.modal.status)
  console.log('statusmodal', statusmodal.status)
  console.log('cardprduct', cardproduct)

  let status = useSelector((state) => state.product.status)
  let dataProductSearch = useSelector((state) => state.product)
  const [singlevariant, setSinglevariant] = useState()

  const [singlevariantt, setSinglevariantt] = useState()

  let categorylist = useSelector((state) => state.category.data)
  const [active, setactive] = useState()
  const [activeAll, setactiveAll] = useState()

  const [showmodal, setshowmodal] = useState(false)

  const clickCategory = (item) => {
    setactive(item._id)
    let cate = item.name
    dispatch(setCategory(cate))
  }
  const clickCategoryAll = () => {
    let cate = ''
    setactiveAll(cate)
    setactive(null)
    dispatch(setCategory(cate))
  }

  const [toggle, setToggle] = useState(true)

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true)
  }

  const handleAsc = () => {
    let data = 1
    dispatch(sortAsc(data))
    dispatch(fetchProduct())
  }
  const handleTimeNews = () => {
    let data = 1
    dispatch(sortTimeNews(data))
    dispatch(fetchProduct())
  }

  const handleDesc = () => {
    let data = -1
    dispatch(sortDesc(data))
    dispatch(fetchProduct())
  }

  const onClickModal = (items) => {
    setshowmodal(true)
    let item = items
    // let status = true
    dispatch(fetchSingleProduct(item))
    // dispatch(showModal(status))
  }

  let datauser = useSelector((state) => state.auth)

  console.log('datauser', datauser)

  React.useEffect(() => {
    dispatch(fetchProduct())
    dispatch(fetchCategory())
  }, [
    dispatch,
    dataProductSearch.keyword,
    dataProductSearch.category,
    dataProductSearch.sort,
    dataProductSearch.time,
  ])
  return user.role === 'admin' ? (
    <div>
      {' '}
      {/* anda bukan admin{' '} */}
      {
        (Swal.fire({
          title: 'Anda bukan user',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        }),
        history.push('/login'))
      }
    </div>
  ) : (
    <div className="pl-20 relative">
      <SideToggle />
      <Header
        TopElmnt={
          <div>
            {toggle ? (
              <img className="" onClick={toggler} src={Toggle} />
            ) : (
              <div>
                <div
                  onClick={toggler}
                  className="overlay absolute w-screen h-screen z-10 left-0"
                ></div>
                <img src={Close} onClick={toggler} className="relative z-20" />

                <TopToggle />
              </div>
            )}
          </div>
        }
        valueSearch={dataProductSearch.keyword}
        onChangeSearch={(e) => {
          dispatch(setKeyword(e.target.value))
        }}
        listcategory={categorylist.map((item, index) => {
          return (
            <li className="float-left font-bold text-1xl pl-10" key={index}>
              <a
                // className="text-grey item-list cursor-pointer"
                className={
                  active === item._id
                    ? 'text-grey item-list cursor-pointer activeList'
                    : 'text-grey item-list cursor-pointer'
                }
                onClick={() => clickCategory(item)}
              >
                {item.name}
              </a>
            </li>
          )
        })}
        liatCategoryAll={
          <li className="float-left font-bold text-1xl pl-10">
            <a
              // className="text-grey item-list cursor-pointer"
              className={
                (activeAll === undefined && active === undefined) ||
                active === null
                  ? 'text-grey item-list cursor-pointer activeList'
                  : 'text-grey item-list cursor-pointer'
              }
              onClick={() => clickCategoryAll()}
            >
              All
            </a>
          </li>
        }
        SortAsc={
          <button
            className="mr-3 p-3 focus:outline-none rounded-tl-md rounded-bl-md relative btnSort"
            onClick={handleAsc}
          >
            <p className="tolltipSort">Sortir by Asscending data</p>
            <img src={Down} />
          </button>
        }
        SortDesc={
          <button
            className="p-3 focus:outline-none rounded-tr-md rounded-br-md relative btnSort"
            onClick={handleDesc}
          >
            <p className="tolltipSort">Sortir by Descending data</p>
            <img src={Up} />
          </button>
        }
        TimeNews={
          <button
            className="bg-white rounded-md text-1xl py-3 px-4 font-bold ml-5 shadow focus:outline-none btnSort"
            onClick={handleTimeNews}
          >
            New Product
          </button>
        }
      />
      <div className="relative top-40 grid grid-cols-4 gap-4 mt-14">
        {status === 'success'
          ? cardproduct.map((items, index) => {
              return (
                <Card
                  onClickModal={() => onClickModal(items)}
                  namaproduk={items.name}
                  image={`${config.api_host}/upload/${items.image_url}`}
                  harga={formatRupiah(items.price)}
                  datavariant={
                    items.variant === null
                      ? 'data kosong'
                      : items.variant.option.map((item, index) => {
                          return (
                            <ul className="flex cursor-pointer">
                              <li
                                className="w-20"
                                onClick={() => setSinglevariant(item)}
                              >
                                {item.name}
                              </li>
                              <li
                                onClick={() => setSinglevariant(item)}
                                className="ml-2 flex items-center"
                              >
                                <p className="font-bold">Stock&nbsp;:&nbsp;</p>{' '}
                                {item.stock}
                              </li>
                            </ul>
                          )
                        })
                  }
                  variantname={
                    items.variant === null ? 'data kosong' : items.variant.name
                  }
                />
              )
            })
          : 'Loading'}

        {!cardproduct.length ? 'data kosong' : ''}

        {/* This example requires Tailwind CSS v2.0+  */}

        {showmodal === true ? (
          <CardModal onClickCloseModal={() => setshowmodal(false)} />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
