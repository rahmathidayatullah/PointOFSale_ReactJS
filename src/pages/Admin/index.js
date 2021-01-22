import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../../components/Global/Header'
import Sidebar from '../../components/Global/Sidebar'
import Dashboard from './Dashboard'
import Variant from './Variant'
import Product from './Product'
import User from './User'
import Category from './Category'
import History from './History'
import Down from '../../assets/img/admin/toggle-down.svg'
import Close from '../../assets/img/close.svg'
import TopToggle from '../../components/Global/TopToggle'

export default function Admin() {
  const [toggle, setToggle] = useState(true)

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true)
  }
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Header
        TopElement={
          <div className="cursor-pointer">
            {toggle ? (
              <img className="" onClick={toggler} src={Down} />
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
      />
      <Sidebar />
      <div
        className="relative pr-20 ml-28 top-24 left-5 pt-5"
        style={{ height: '33rem', overflowY: 'scroll' }}
      >
        <Switch>
          <Route exact path="/admin" component={Dashboard} />
        </Switch>
        <Switch>
          <Route path="/admin/variant" component={Variant} />
        </Switch>
        <Switch>
          <Route path="/admin/product" component={Product} />
        </Switch>
        <Switch>
          <Route path="/admin/user" component={User} />
        </Switch>
        <Switch>
          <Route path="/admin/category" component={Category} />
        </Switch>
        <Switch>
          <Route path="/admin/history" component={History} />
        </Switch>
      </div>
    </div>
  )
}
