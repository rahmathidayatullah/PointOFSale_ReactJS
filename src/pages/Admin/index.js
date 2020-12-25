import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Product from './components/Product'
import User from './components/User'
import Category from './components/Category'
import History from './components/History'

const Test = () => {
  return <p>TEST</p>
}

export default function Admin() {
  return (
    <div className="relative">
      <Header />
      <Sidebar />
      <div className="relative pr-20 pl-28 top-24 left-5 pt-5">
        <Switch>
          <Route exact path="/admin" component={Dashboard} />
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
