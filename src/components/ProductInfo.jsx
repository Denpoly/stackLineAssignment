import React from 'react'
import { useSelector } from 'react-redux';
import { getProduct } from '../slices/productSlice';
import { Box, Card, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles'
import ProductTags from './ProductTags';

const useStyles = makeStyles({
    outerContainer: {
        width: "20vw",
        marginLeft: "2%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        objectFit: "contain",
        padding: "1%",
        height: "100%"
    },
    imageContainer: {
        width: "100%",
        height: "40%"
    },
    infoContainer: {
    }
});
function ProductInfo() {
    const classes = useStyles();
    const product = useSelector(getProduct)
  return product &&
        (
        <Card className = {classes.outerContainer}>
                <Box
                    component="img"
                    src = {product.image}
                    className = {classes.imageContainer}
                >
                </Box>
                <Box className = {classes.infoContainer}>
                    <Typography variant = "h5">
                        {product.title}
                    </Typography>
                    <Typography variant = "subtitle2">
                        {product.subtitle}
                    </Typography>

                    <ProductTags>
                    </ProductTags>
                </Box>
        </Card>

    )
}

export default ProductInfo