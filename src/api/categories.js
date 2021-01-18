import axios from 'axios'

import { config } from '../config'

// export async function createCategory(name) {
//   let { token } = localStorage.getItem('auth')
//     ? JSON.parse(localStorage.getItem('auth'))
//     : {}

//   try {
//     const post = await axios.post(
//       `${config.api_host}/api/categories`,
//       { name: name },
//       {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       },
//     )
//     console.log('POST', post)
//   } catch (error) {
//     console.log(error.response)
//   }
// }

export async function getAllCategory(params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/categories`, {
    params,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function getSinglecategoryy(id) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/categories/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export const deleteCategory = (id) => {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}
  return async () => {
    try {
      const del = await axios.delete(
        `${config.api_host}/api/categories/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      )
      console.log('RESPONSE DELETE', del)
    } catch (error) {
      console.log(error.response)
    }
  }
}
export const editCategory = async (id, data) => {
  // let { token } = localStorage.getItem('auth')
  //   ? JSON.parse(localStorage.getItem('auth'))
  //   : {}
  // return async () => {
  //   try {
  //     const edit = await axios.put(
  //       `${config.api_host}/api/categories/${id}`,
  //       { data },
  //       {
  //         headers: {
  //           authorization: `Bearer ${token}`,
  //         },
  //       },
  //     )
  //     console.log('RESPONSE EDIT', edit)
  //   } catch (error) {
  //     console.log(error.response)
  //   }
  // }
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.put(`${config.api_host}/api/categories/${id}`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

// export async function deleteCategory(id) {
//   let { token } = localStorage.getItem('auth')
//     ? JSON.parse(localStorage.getItem('auth'))
//     : {}

//   return await axios
//     .delete(`${config.api_host}/api/categories/${id}`, {
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       console.log('res')
//       console.log(res)
//       window.location.reload(false)
//     })
//     .catch((err) => {
//       console.log(err.response)
//     })
// }

export async function createCategory(data) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.post(`${config.api_host}/api/categories`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  // .then((res) => {
  //   getAllCategory()
  // })
}
