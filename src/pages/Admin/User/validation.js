const rules = {
  full_name: {
    required: { value: true, mesage: 'Nama lengkap harus diisi .' },
    maxLength: {
      value: 500,
      message: 'Panjang nama lengkap maksimal 500 karakter',
    },
  },
  email: {
    required: { value: true, message: 'Email harus diisi .' },
    maxLength: {
      value: 255,
      message: 'Maksimal panjang karakter 255 karakter',
    },
  },
  password: {
    required: { value: true, message: 'Pasword harus diisi' },
    maxLength: {
      value: 255,
      message: 'panjang password maksimal 255 karakter .',
    },
  },
}

export { rules }
