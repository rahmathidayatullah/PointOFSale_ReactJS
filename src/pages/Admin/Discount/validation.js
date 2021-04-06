const rules = {
  name: {
    required: { value: true, message: 'Nama diskon harus diisi' },
    minLength: { value: 5, message: 'Nama diskon minimal 5 karakter' },
    maxLength: { value: 500, message: 'Nama diskon maximal 500 karakter' },
  },

  value: {
    required: { value: true, message: 'Jumlah diskon harus diisi' },
    minLength: { value: 1, message: 'Jumlah diskon minimal 5 karakter' },
    maxLength: { value: 10000, message: 'Jumlah diskon maximal 500 karakter' },
  },
  status: {
    required: { value: true, message: 'Aktivasi diskon harus diisi' },
  },
  type: {
    required: { value: true, message: 'Type diskon harus diisi' },
  },
  date: {
    required: { value: true, message: 'Date diskon harus diisi' },
  },
}

export { rules }
