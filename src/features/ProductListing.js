import React, { useEffect } from 'react'
import { Box, Grid, Link } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsynchProduct } from './ProductListSlice';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

function ProductListing() {
    const Productlist = useSelector((state) => state.Product.allproduct)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsynchProduct())
    }, [dispatch])


    const renderList = Productlist.map((item) => {
        return (

            <Grid item md={3} xs={6} key={item.id}>
                <Link href={`/products/${item.id}`} underline="none">
                    <Card sx={{ maxWidth: 345 }} >
                        <CardMedia
                            component="img"
                            height="194"
                            image={item.image}
                            alt={item.title}
                        />
                        <CardHeader
                            title={item.title}
                            subheader={item.price}
                        />

                        {/* <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent> */}


                    </Card>
                </Link>

            </Grid>



        )
    })
    return (
        <>
            <Box sx={{ display: "" }}>
                <Grid container spacing={3}>
                    {renderList}
                </Grid>
            </Box>

        </>

    )
}

export default ProductListing