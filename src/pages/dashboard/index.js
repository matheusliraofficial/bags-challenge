import { useState } from 'react';

import { Box, Button, Grid, List, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';

import IncomeAreaChart from './IncomeAreaChart';
import MainCard from 'components/MainCard';
import AnalyticCard from 'components/cards/statistics/AnalyticCard';

const DashboardDefault = () => {
  const [slot, setSlot] = useState('month');

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} md={5} lg={4}>
        <Typography variant="h5">Welcome, John Doe</Typography>
        <Grid sx={{ mt: 2 }} item>
          <AnalyticCard title="Total Debt" count="$121,974.06" percentage={20.3} color="error" extra="$21,543" />
        </Grid>
        <Grid sx={{ mt: 1 }} item>
          <AnalyticCard title="Total Minimum Monthly Payment" count="$3,299.59" isLower color="success" percentage={5.5} />
        </Grid>
        <Grid container alignItems="center" justifyContent="space-between" sx={{ mt: 2 }}>
          <Grid sx={{ mb: 2 }} item>
            <Typography variant="h5">Your Business Health</Typography>
          </Grid>
        </Grid>
        <MainCard content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Annualized Revenue Projection</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                Month
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                Year
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
