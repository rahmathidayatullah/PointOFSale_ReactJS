const rules = {
  name: {
    required: { value: true, message: 'Data nama category harus diisi .' },
    minLength: { value: 3, message: 'Minimal 3 karakter untuk nama category' },
  },
}

export { rules }
