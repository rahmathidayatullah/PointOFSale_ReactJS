import React from 'react'
import { Link } from 'react-router-dom'

import Profile from '../../../assets/img/admin/profile.jpg'
import Category from '../../../assets/img/admin/category.svg'
import Dashboard from '../../../assets/img/admin/dashboard.svg'
import History from '../../../assets/img/admin/history.svg'
import Product from '../../../assets/img/admin/product.svg'
import User from '../../../assets/img/admin/user.svg'
export default function Sidebar() {
  return (
    <div className="fixed left-0 w-20 h-screen bg-white flex justify-center pt-28">
      <ul className="w-full flex flex-col items-center">
        <li className="py-8 list-side w-full flex justify-center">
          <Link to="/admin" className="block">
            <img src={Dashboard} />
            {/* image */}
          </Link>
        </li>
        <li className="py-8 list-side w-full flex justify-center">
          <Link to="/admin/product">
            <img src={Product} />
            {/* image */}
          </Link>
        </li>
        <li className="py-8 list-side w-full flex justify-center">
          <Link to="/admin/user">
            <img src={User} />
            {/* image */}
          </Link>
        </li>
        <li className="py-8 list-side w-full flex justify-center">
          <Link to="/admin/category">
            <img src={Category} />
            {/* image */}
          </Link>
        </li>
        <li className="py-8 list-side w-full flex justify-center">
          <Link to="/admin/history">
            <img src={History} />
            {/* image */}
          </Link>
        </li>
      </ul>
    </div>
  )
}
