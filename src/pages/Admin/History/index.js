import React, { useState } from 'react'
import Pdf from '../../../assets/img/admin/pdf.svg'
import Excel from '../../../assets/img/admin/excel.svg'
import Print from '../../../assets/img/admin/print.svg'

import IconDown from '../../../assets/img/admin/drop.svg'
import Search from '../../../assets/img/admin/search.svg'

import Right from '../../../assets/img/admin/right.svg'
import Left from '../../../assets/img/admin/left.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingdataHistory } from '../../../features/History/action'
import { formatRupiah } from '../../../utils/format-rupiah'

import ReactExport from 'react-export-excel'
import ExportPdf from 'react-to-pdf'
import ReactToPrint from 'react-to-print'
import { components } from 'react-select'

const ref = React.createRef(null)

const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn

export default function History() {
  const refs = React.useRef(null)
  let dispatch = useDispatch()
  let dataHistory = useSelector((state) => state.history)
  console.log('data from use selector', dataHistory)
  const dataTableHead = ['No', 'Invoice', 'User', 'Date', 'Orders', 'Amount']

  const [ModalPdf, setModalPdf] = useState(false)
  console.log('ModalPdf', ModalPdf)

  const [showpdf, setShowpdf] = useState(false)
  const dataExport = dataHistory.data.map((data, index) => {
    let message = data.orders.map(
      (order) =>
        `${order.Product} ${order.Variant_Name} ${order.VariantOption}, Qty: ${order.Qty}, Diskon: ${order.Discount},Harga : ${order.Price}, Total diskon : ${order.Total_Discount},total harga: ${order.Sub_Total_Belanja}\n`,
    )

    return {
      no: index + 1,
      no_invoice: '0' + index + 1,
      nama_lengkap: data.nama_lengkap,
      date: data.date,
      order: message.toString().split(',').join('').replace(/\n$/, ''),
      total: data.amount,
    }
  })

  let HeadTitle = dataTableHead.map((items) => {
    return <th key={items}>{items}</th>
  })

  // data print
  const ComponentToPrint = ({ refssssss }) => {
    // let test = refs
    console.log('refssssss', refssssss)
    return (
      <div ref={refssssss}>
        {' '}
        <div
          className="flex flex-col justify-center px-10 m-auto"
          style={{ width: '790px', height: '1125' }}
          ref={ref}
        >
          <h1 className="text-center font-bold mt-5 pb-5">
            <u>Data History</u>
          </h1>
          <table className="mt-3">
            <thead>
              <tr>{HeadTitle}</tr>
            </thead>
            <tbody>
              {dataHistory.data.map((items, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{'0' + index + 1}</td>
                    <td>{items.nama_lengkap}</td>
                    <td>{items.date}</td>
                    <td>
                      {items.orders.map((dataOrder) => {
                        return (
                          <div className="bg-green-500 p-2 mr-2 text-white text-sm  font-bold rounded-md whitespace-nowrap mt-2">
                            {dataOrder.Product}
                          </div>
                        )
                      })}
                    </td>
                    <td>{formatRupiah(items.amount)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  React.useEffect(() => {
    dispatch(fetchingdataHistory())
    console.log('useEffect')
    // console.log('componentRef', componentRef)
  }, [dispatch])

  return (
    <div className="w-full p-5 bg-white rounded-md">
      <div className="border-b pb-3 flex justify-between">
        <p className="font-bold text-2xl">
          History<span className="font-normal ml-2">View</span>
        </p>
        <div className="flex items-center">
          <input
            type="date"
            className="p-2 bg-white shadow-md border rounded-lg focus:outline-none"
          />
          <button className="p-2 bg-gray-500 shadow-md border rounded-lg flex items-center ml-3 focus:outline-none">
            <img src={Print} />
            <p className="text-white ml-3">Print Out</p>
          </button>
          <button className="p-2 bg-green-500 shadow-md border rounded-lg flex items-center ml-3 focus:outline-none">
            <img src={Excel} />
            {/* <p className="text-white ml-3">Export Excel</p> */}
            <ExcelFile
              element={
                <button className="text-white ml-3">Export Excel</button>
              }
            >
              <ExcelSheet data={dataExport} name="Employees">
                <ExcelColumn label="No" value="no" />
                <ExcelColumn label="No Invoice" value="no_invoice" />
                <ExcelColumn label="Nama Lengkap" value="nama_lengkap" />
                <ExcelColumn label="Data order" value="order" />
                <ExcelColumn label="Total Belanja" value="total" />
                <ExcelColumn label="Data Transaksi" value="date" />
              </ExcelSheet>
            </ExcelFile>
          </button>
          <button
            className="p-2 bg-red-500 shadow-md border rounded-lg flex items-center ml-3 focus:outline-none"
            onClick={() => setModalPdf(true)}
          >
            <img src={Pdf} />
            <p className="text-white ml-3">Export Pdf</p>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="relative w-40 flex items-center">
          <select className="absolute left-0 py-2 pl-4 pr-8 text-white font-bold bg-green-500 appearance-none rounded focus:outline-none">
            <option>Show & entries</option>
            <option>value 1</option>
            <option>value 2</option>
            <option>value 3</option>
          </select>
          <img
            className="right-1 absolute z-10 RealtiveCenterY pointer-events-none"
            src={IconDown}
          />
        </div>

        <div className="relative w-48 flex items-center p-3">
          <input
            className="absolute p-2 border border-gray-200 left-0 rounded focus:outline-none"
            placeholder="Search Transaction"
          />
          <img className="RealtiveCenterY right-2 z-10" src={Search} />
        </div>
      </div>

      {/* start react print */}
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => components.current}
      />
      <ComponentToPrint refssssss={components} />
      {/* end react print */}

      {/* <table className="w-full mt-5">
        <thead>
          <tr>{HeadTitle}</tr>
        </thead>
        <tbody>
          {dataHistory.data.map((items, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{'0' + index + 1}</td>
                <td>{items.nama_lengkap}</td>
                <td>{items.date}</td>
                <td>
                  <div className="flex items-center">
                    {items.orders.map((dataOrder) => {
                      return (
                        <div className="bg-green-500 mr-2 text-white text-sm p-2 font-bold rounded-md">
                          {dataOrder.Product}
                        </div>
                      )
                    })}
                  </div>
                </td>
                <td>{formatRupiah(items.amount)}</td>
              </tr>
            )
          })}
        </tbody>
      </table> */}

      {/* start modal */}
      {ModalPdf === true ? (
        <div class="fixed z-20 inset-0 overflow-y-auto">
          <div class="flex items-center justify-center min-h-screen  text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-9/12"
              style={{ height: '75vh' }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div
                className="flex flex-col justify-center px-10 m-auto"
                style={{ width: '790px', height: '1125' }}
                ref={ref}
              >
                <h1 className="text-center font-bold mt-5 pb-5">
                  <u>Data History</u>
                </h1>
                <table className="mt-3">
                  <thead>
                    <tr>{HeadTitle}</tr>
                  </thead>
                  <tbody>
                    {dataHistory.data.map((items, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{'0' + index + 1}</td>
                          <td>{items.nama_lengkap}</td>
                          <td>{items.date}</td>
                          <td>
                            {items.orders.map((dataOrder) => {
                              return (
                                <div className="bg-green-500 p-2 mr-2 text-white text-sm  font-bold rounded-md whitespace-nowrap mt-2">
                                  {dataOrder.Product}
                                </div>
                              )
                            })}
                          </td>
                          <td>{formatRupiah(items.amount)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <ExportPdf targetRef={ref} filename="code-example.pdf">
                  {({ toPdf }) => (
                    <button
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={toPdf}
                    >
                      Generate Pdf
                    </button>
                  )}
                </ExportPdf>
                <button
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setModalPdf(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      {/* end modal */}

      {/* export file pdf */}
      {/* <div
        className="flex flex-col justify-center absolute px-10"
        style={{ width: '790px', height: '1125' }}
        ref={ref}
      >
        <h1 className="text-center font-bold mt-5">Data History</h1>
        <table className="mt-3">
          <thead>
            <tr>{HeadTitle}</tr>
          </thead>
          <tbody>
            {dataHistory.data.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{'0' + index + 1}</td>
                  <td>{items.nama_lengkap}</td>
                  <td>{items.date}</td>
                  <td>
                    {items.orders.map((dataOrder) => {
                      return (
                        <div className="bg-green-500 p-2 mr-2 text-white text-sm  font-bold rounded-md whitespace-nowrap mt-2">
                          {dataOrder.Product}
                        </div>
                      )
                    })}
                  </td>
                  <td>{formatRupiah(items.amount)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div> */}
      {/* end export file pdf */}
      <div className="flex w-full justify-end mt-3">
        <div className="flex items-center">
          <div className="p-3 rounded bg-green-500">
            <img src={Left} />
          </div>
          <p className="ml-4 text-gray-400 text-xl">1</p>
          <p className="ml-4 text-gray-400 text-xl">2</p>
          <p className="ml-4 text-gray-400 text-xl">3</p>
          <p className="ml-4 text-gray-400 text-xl">4</p>
          <p className="ml-4 text-gray-400 text-xl">5</p>
          <div className="p-3 rounded bg-green-500 ml-4">
            <img src={Right} />
          </div>
        </div>
      </div>
    </div>
  )
}
