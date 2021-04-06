const rules = {
  full_name: {
    required: { value: true, message: 'Nama lengkap harus diisi .' },
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
    // (1) cek pola / pattern email
    pattern: {
      value: /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/,
      message: 'Email tidak valid',
    },
  },
  password: {
    required: { value: true, message: 'Pasword harus diisi' },
    maxLength: {
      value: 255,
      message: 'panjang password maksimal 255 karakter .',
    },
  },
  role: {
    required: { value: true, message: 'Role harus diisi' },
  },
}

export { rules }
