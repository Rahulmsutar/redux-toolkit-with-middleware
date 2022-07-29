import React, { useEffect } from 'react'
import { Grid, Box, Card, CardHeader, CardMedia, CardContent, Typography, Container } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsynchSelectedProduct } from './ProductListSlice';
import axiosConfig from '../apis/axiosConfig';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const ProductDetails = useSelector((state) => state.Product.product)
    const Loading = useSelector((state) => state.Product.loading);
    // console.log(ProductDetails)
    const dispatch = useDispatch();
    const productId = useParams();
    useEffect(() => {
        dispatch(fetchAsynchSelectedProduct(productId.id))
    }, [dispatch])



    return (
        <>
            {Loading ?
                <h1>Loading....</h1>:
                
            <Container>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 400 }}
                    image={ProductDetails.image}
                    alt={ProductDetails.title}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent >
                        <Typography component="div" variant="h5" sx={{ m: 4 }}>
                            {ProductDetails.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ m: 4 }}>
                            {ProductDetails.description}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ m: 4 }}>
                            ₹{ProductDetails.price}
                        </Typography>
                    </CardContent>
                </Box>

            </Card>
        </Container>
                }


        </>
    )
}

export default ProductDetails