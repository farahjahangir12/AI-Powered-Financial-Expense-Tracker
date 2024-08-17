import React from 'react';
import { Box, Grid } from '@mui/material';
import Insight from './Insight';
import ExpenseCard from './ExpenseCard';
import Reports from './Reports';

export default function Content() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={2}>
        {/* First Row */}
        <Grid item xs={6} sm={4}>
          <Box sx={{ bgcolor: 'primary.main', height: 100 }}>
            <Insight />
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box sx={{ bgcolor: 'secondary.main', height: 100 }}>
            <Insight />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box sx={{ bgcolor: 'info.main', height: 100 }}>
            <Reports />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
