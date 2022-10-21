import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
      isLoading: false,
      productos: []
    },
    reducers: {
      startLoadingProducts: (state) =>{
        state.isLoading = true
      },

      setProducts: (state, action) => {
        state.isLoading = false
        state.productos = action.payload.productos
      }
    },
  })
  
  export const { startLoadingProducts, setProducts } = productsSlice.actions
  
  export default productsSlice.reducer