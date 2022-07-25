import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductAsync } from './slices/productSlice';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';


import ProductInfo from './components/ProductInfo';
import Header from './components/Header';
import ProductTable from './components/ProductTable';
import Graph from './components/Graph';

const PROD_ID = 'B007TIE0GQ'

const useStyles = makeStyles({
  outerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: "5%",
    maxHeight: "100%",
    marginBottom: '5%'


  },
  dataContainer: {
    display: 'flex',
    flexDirection: "column",
    maxHeight: "100%",
    marginLeft: "4%"
  },
  app: {
    textAlign: 'center',
    backgroundColor: '#f7f8fa',
    minHeight: '100vh',  
    display: 'flex',
    flexDirection: 'column'
  }
})


function App() {
  const classes = useStyles();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProductAsync(PROD_ID));
  }, [])


  return (
    <div className={classes.app}>
        <Header></Header>
        <Box className = {classes.outerContainer}>
          <ProductInfo >
          </ProductInfo>
          <Box className = {classes.dataContainer}>
            <Graph></Graph>
            <ProductTable></ProductTable>
          </Box>
        </Box>
    </div>
  );
}

export default App;
