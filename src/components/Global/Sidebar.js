import React from 'react'
import { Link } from 'react-router-dom'

import Profile from '../../assets/img/admin/profile.jpg'
import Category from '../../assets/img/admin/category.svg'
import Dashboard from '../../assets/img/admin/dashboard.svg'
import History from '../../assets/img/admin/history.svg'
import Product from '../../assets/img/admin/product.svg'
import User from '../../assets/img/admin/user.svg'
export default function Sidebar() {
  return (
    <div className="fixed left-0 w-20 h-screen bg-white flex justify-center pt-28 z-10">
      <ul className="w-full flex flex-col h-full justify-around items-center">
        <li className="list-side w-full flex justify-center relative">
          <Link to="/admin" className="block">
            <img src={Dashboard} />
            {/* image */}
          </Link>
          <div className="tolltipss">Dashboard</div>
        </li>
        <li className="list-side w-full flex justify-center relative">
          <Link to="/admin/variant">
            {/* <p>Variant</p> */}
            <img src={Dashboard} />
            {/* image */}
          </Link>
          <div className="tolltipss">Variant</div>
        </li>
        <li className="list-side w-full flex justify-center relative">
          <Link to="/admin/discount">
            {/* <p>Discount</p> */}
            <img src={Product} />
            {/* image */}
          </Link>
          <div className="tolltipss">Discount</div>
        </li>
        <li className="list-side w-full flex justify-center relative">
          <Link to="/admin/product">
            <img src={Product} />
            {/* image */}
          </Link>
          <div className="tolltipss">Product</div>
        </li>
        <li className="list-side w-full flex justify-center relative">
          <Link to="/admin/user">
            <img src={User} />
            {/* image */}
          </Link>
          <div className="tolltipss">User</div>
        </li>
        <li className="list-side w-full flex justify-center relative">
          <Link to="/admin/category">
            <img src={Category} />
            {/* image */}
          </Link>
          <div className="tolltipss">Category</div>
        </li>
        <li className="list-side w-full flex justify-center relative">
          <Link to="/admin/history">
            <img src={History} />
            {/* image */}
          </Link>
          <div className="tolltipss">History</div>
        </li>
      </ul>
    </div>
  )
}
