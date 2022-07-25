import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import {makeStyles} from '@mui/styles';
import Card from '@mui/material/Card';
import {Typography} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { getProduct } from '../slices/productSlice';
import { useState } from 'react';


const useStyles = makeStyles({
  tableContainer: {
      overflowY: 'scroll',
      marginTop: "2%",
      maxHeight: "60vh",
      height: '60vw',
      width: '70vw',
  },

});

function ProductTable() {
  const classes = useStyles();
    const product = useSelector(getProduct)

    const [rows, setRows] = useState([])

    useEffect(() => {
        if(product) setRows(product.sales)

    }, [product])
    
    const returnDollarComponent = (params) => {
      return (
        <Typography
          variant = "body1"
        >
          ${params.value.toLocaleString()}
        </Typography>
      )
    }
    const columns =  [
      {
        field: 'weekEnding',
        headerName: 'Week Ending',
        flex: 1,
        editable: false,
      },{
        field: 'retailSales',
        headerName: 'Retail Sales',
        flex: 1,
        editable: false,
        renderCell: returnDollarComponent
      },
      {
        field: 'wholesaleSales',
        headerName: 'Wholesale Sales',
        flex: 1,
        editable: false,
        renderCell: returnDollarComponent
      },
      {
        field: 'unitsSold',
        headerName: 'Units Sold',
        flex: 1,
        editable: false,
      },
      {
        field: 'retailerMargin',
        headerName: 'Retailer Margin',
        flex: 1,
        editable: false,
        renderCell: returnDollarComponent
      },
    ];

    return product && (
      <Card className = {classes.tableContainer}>
        <DataGrid
          component={Paper}
          rows={rows}
          columns={columns}
          pageSize = {rows.length}
          getRowId= {(row) => row.weekEnding}
          hideFooter={true}>
          
        </DataGrid>
      </Card>
    );

}

export default ProductTable