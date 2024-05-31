"use client"
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';

export default function GridDemo() {
  return (
   <Box sx={{backgroundColor:"var(--bgsoft)"}}>
     <LineChart
    
    xAxis={[
      {
        data: [1, 2, 3, 5, 8, 10],
      }
    ]}
    yAxis={[
      {
        data: [100, 200, 300, 400, 500, 600],
      }
    ]}
    series={[
      { curve: "catmullRom", data: [100, 120, 150, 160, 300, 320] },
      { curve: "catmullRom", data: [6, 3, 7, 9.5, 4, 2] },
    ]}
  
    height={300}
    margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
    grid={{ vertical: true, horizontal: true }}
    sx={{
      '& .MuiChartsAxis-root line': {
        stroke: 'white',
      },
      '& .MuiChartsAxis-root text': {
        fill: 'white',
      },
      '& .MuiChartsGrid-root line': {
        stroke: 'white',
      }
    }}
  />
   </Box>
  );
}
