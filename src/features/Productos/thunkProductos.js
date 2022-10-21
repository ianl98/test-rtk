import { productosApi } from '../../api/ProductsApi';
import { setProducts, startLoadingProducts } from  './productsSlice';


export const getProducts = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingProducts())

        //const resp = await fetch('https://fakestoreapi.com/products');
        //const data = await resp.json();

        const resp = await productosApi.get('/products')

        dispatch(setProducts({productos: resp.data}))
    }
}