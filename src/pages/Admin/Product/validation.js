const rules = {
  name: {
    required: { value: true, message: 'Nama Produk harus diisi' },
    minLength: { value: 5, message: 'Nama Produk minimal 3 karakter' },
    maxLength: { value: 500, message: 'Nama Produk maximal 500 karakter' },
  },
  price: {
    required: { value: true, message: 'Price Produk harus diisi' },
  },
  description: {
    required: { value: true, message: 'Description Produk harus diisi' },
  },
  category: {
    required: { value: true, message: 'Category Produk harus diisi' },
  },
  variant: {
    required: { value: true, message: 'Variant Produk harus diisi' },
  },
  image: {
    required: { value: true, message: 'Image Produk harus diisi' },
  },
}

export { rules }
