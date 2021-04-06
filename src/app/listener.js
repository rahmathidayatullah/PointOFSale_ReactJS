import React, { useState } from 'react'
import store from './store'
import { saveCart, getCart } from '../api/cart'

let currentAuth
let currentCart

function listener() {
  // (1) buat variabel previousAuth dan berikan currentAuth sebagai nilai
  let previousAuth = currentAuth
  let previousCart = currentCart

  // console.log(object)

  // (2) update nilai currentAuth dari nilai state terbaru
  currentAuth = store.getState().auth
  currentCart = store.getState().cart

  let { token } = currentAuth

  // (3) cek apakah nilai state `auth` berubah dari nilai sebelumnya

  if (currentCart !== previousCart) {
    localStorage.setItem('cart', JSON.stringify(currentCart))

    //savecart saat cart berubah
    let data = currentCart.map((items) => items)

    // saveCart(token, currentCart)
  }

  // console.log('ssss', localStorage)

  if (currentAuth !== previousAuth) {
    // (4) jika berubah simpan ke localStorage
    localStorage.setItem('auth', JSON.stringify(currentAuth))
  }
}

function listen() {
  store.subscribe(listener)
}

export { listen }
