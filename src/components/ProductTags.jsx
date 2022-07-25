import React from 'react'
import { useSelector } from 'react-redux';
import { getProduct } from '../slices/productSlice';
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    gridContainer: {
        borderTop: "solid lightgrey 1px",
        paddingBottom: "2%",
        borderBottom: "solid lightgrey 1px"
    }
})
function ProductTags() {
    const classes = useStyles()
    const product = useSelector(getProduct)
        return product && (
        <Grid container className = {classes.gridContainer} style = {{marginTop: "6%"}}
            spacing = {1}
        >
            {product.tags.map( (tag, index) => {
                return (
                    <Grid item
                        key = {index}
                    >
                        <Chip
                            label = {tag}
                        >
                        </Chip>
                    </Grid>
                )
            })}

        </Grid>
        )
}

export default ProductTags