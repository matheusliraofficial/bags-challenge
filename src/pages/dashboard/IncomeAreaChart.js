import PropTypes from 'prop-types';
import { useState, useEffect, useMemo } from 'react';

import { useTheme } from '@mui/material/styles';

import ReactApexChart from 'react-apexcharts';

const areaChartOptions = {
  chart: {
    height: 450,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 0
  }
};

const IncomeAreaChart = ({ slot }) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.primary[700]],
      xaxis: {
        categories:
          slot === 'month'
            ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            : ['2021', '2022', '2023'],
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary
            ]
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: slot === 'month' ? 11 : 7
      },
      yaxis: {
        labels: {
          formatter: (value) => `$${value}`,
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      tooltip: {
        theme: 'light',
        y: {
          formatter: function (value) {
            return `$${value}`; // Format the tooltip value as currency
          }
        }
      }
    }));
  }, [primary, secondary, line, theme, slot]);

  const originalData = useMemo(
    () => [
      {
        name: 'Current Growth',
        data: slot === 'month' ? [7600, 8500, 10100, 9800, 8700, 10500, 9100, 11400, 9400, 8600, 11500, 3500] : [310000, 400000, 280000]
      }
    ],
    [slot]
  );

  const tenPercentGrowth = originalData[0].data.map((value) => (value * 1.1).toFixed(2)); // Increase each value by 10%
  const twentyPercentGrowth = originalData[0].data.map((value) => (value * 1.2).toFixed(2)); // Increase each value by 20%

  const [series, setSeries] = useState([
    ...originalData,
    {
      name: 'Current Growth +10%',
      data: tenPercentGrowth
    },
    {
      name: 'Current Growth +20%',
      data: twentyPercentGrowth
    }
  ]);

  useEffect(() => {
    setSeries([
      ...originalData,
      {
        name: 'Current Growth +10%',
        data: tenPercentGrowth
      },
      {
        name: 'Current Growth +20%',
        data: twentyPercentGrowth
      }
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalData, slot]);

  return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

IncomeAreaChart.propTypes = {
  slot: PropTypes.string
};

export default IncomeAreaChart;
