import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import {Card,CardActionArea,CardContent, Typography} from '@mui/material'
import { useTheme } from '@emotion/react';


const expenditure = [
    { month: 'April', food: 500, utilities: 300, rent: 1000, shopping: 10 },
    { month: 'May', food: 550, utilities: 210, rent: 1000, shopping: 500 },
    { month: 'June', food: 600, utilities: 220, rent: 1000, others: 200 },
    { month: 'July', food: 580, utilities: 230, rent: 1000, bills: 500 },
  ];

export default function Barchart() {
    const theme=useTheme();
  return (
    <Card sx={{ height:"250px", width:"250px", border:"1px solid white",borderRadius:"20px",backgroundColor:theme.palette.secondary.main}}>
    <CardActionArea>
    <CardContent>
    <Typography variant="body1" sx={{textAlign:"center",fontWeight:"bold",color:theme.palette.primary.main}}>Analytics</Typography>
    <BarChart
      dataset={expenditure}
      series={[
        { dataKey: 'food', stack: 'expenditure', label:"Food" },
        { dataKey: 'shopping', stack: 'expenditure',label:"Shopping" },
        { dataKey: 'utilities', stack: 'expenditure',label:"Utilities" },
        { dataKey: 'bills', stack: 'expenditure',label:"Bills" },
        { dataKey: 'rent', stack: 'expenditure',label:"Rent" },
        { dataKey: 'others', stack: 'expenditure',label:"Others" },
      ]}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      slotProps={{ legend: { hidden: true } }}
      width={250}
      height={230}
    />
    </CardContent>
    </CardActionArea>
    </Card>
  );
}
