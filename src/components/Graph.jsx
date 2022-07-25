import React, {useEffect} from 'react'
import {Chart} from 'react-google-charts'
import {Card} from '@mui/material'
import { useSelector } from 'react-redux';
import { getProduct } from '../slices/productSlice';
import { useState } from 'react';

function Graph() {

    const product = useSelector(getProduct)

    const [chartData, setChartData] = useState({})

    useEffect(() => {
        if(product) setChartData(prepareChartData(product.sales))
        console.log(chartData)
    }, [product])




    const prepareChartData = (data) => {
        const preparedChartData = [
            [
                { type: "date", label: "Month" },
                "Retail Sales",
            ],
        ]
        data.forEach(sale => {
            preparedChartData.push(
                [
                    new Date(sale.weekEnding),
                    sale.retailSales
                ]
            )
        })

        return preparedChartData
    }
    const options = {
        title: "Retail Sales",
        curveType: 'function',
        chartArea : {left: 100, right: 150, bottom: 75, top: 70},
        vAxis: {
            textPosition: 'none',
            gridlines: { count: 0 }
          },
        hAxis: {
            gridlines: {
                    color: 'transparent'
                },
            format: 'MMM' 
        }
      };
    return (
        <Card>
            <Chart
                chartType="LineChart"
                height = '60vh'
                width = '70vw'
                data={chartData}
                options={options}
            >
            </Chart>
        </Card>
    )
}

export default Graph