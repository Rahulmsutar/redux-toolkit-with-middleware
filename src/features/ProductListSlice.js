import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosConfig from '../apis/axiosConfig';
// import { useParams } from 'react-router-dom';



export const fetchAsynchProduct = createAsyncThunk('allproduct/fetchAsynchProduct', async () => {
    const response = await axiosConfig.get("/products")
    return response.data
})

export const fetchAsynchSelectedProduct = createAsyncThunk('product/fetchAsynchSelectedProduct', async (id) => {
    // const productId = useParams();
    const response = await axiosConfig.get(`/products/${id}`)
    return response.data
})

export const ProductListSlice = createSlice({
    name: 'Product',
    initialState: {
        allproduct: [],
        product: [],
        loading: false
    },
    reducers: {
        setProduct: (state, action) => {
            state.allproduct = action.payload
        }

    },
    extraReducers: {
        [fetchAsynchProduct.pending]: () => {
            console.log("Pending");
        },
        [fetchAsynchProduct.fulfilled]: (state, action) => {

            console.log("Fetched Successfully");
            return { ...state, allproduct: action.payload }
        },
        [fetchAsynchProduct.rejected]: () => {
            console.log("Rejected");
        },
        [fetchAsynchSelectedProduct.pending]: (state, action) => {
            console.log("Pending", state.loading);
            state.loading = action.type.endsWith('/pending')
        },
        [fetchAsynchSelectedProduct.fulfilled]: (state, action) => {
            state.loading = action.type.endsWith('/fulfilled')
            console.log("Product Details Fetched Successfully", state.loading);
            return { ...state, product: action.payload, loading: false }
        },
        [fetchAsynchSelectedProduct.rejected]: () => {
            console.log("Rejected");
        },
    }

})



export const { setProduct } = ProductListSlice.actions

export default ProductListSlice.reducer