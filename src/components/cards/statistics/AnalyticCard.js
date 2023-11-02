import PropTypes from 'prop-types';

import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

const AnalyticCard = ({ color, title, count, percentage, isLower, extra }) => (
  <MainCard contentSX={{ p: 2 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        {title}
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="h4" color="inherit">
            {count}
          </Typography>
        </Grid>
        {percentage && (
          <Grid item>
            <Chip
              variant="combined"
              color={color}
              icon={
                <>
                  {!isLower && <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                  {isLower && <FallOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 1 }}
              size="small"
            />
          </Grid>
        )}
      </Grid>
    </Stack>
    {extra && (
      <Box sx={{ pt: 1 }}>
        <Typography variant="caption" color="textSecondary">
          You increased your debt{' '}
          <Typography component="span" variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
            {extra}
          </Typography>{' '}
          this year
        </Typography>
      </Box>
    )}
  </MainCard>
);

AnalyticCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLower: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

AnalyticCard.defaultProps = {
  color: 'primary'
};

export default AnalyticCard;
