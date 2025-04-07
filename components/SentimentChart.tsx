import { LineChart } from '@mui/x-charts/LineChart';
import { memo, useMemo } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const SentimentChart = memo(({ trend }: { trend: { date: string; sentiment: number }[] }) => {
  const xData = useMemo(() => trend.map((t) => t.date), [trend]);
  const yData = useMemo(() => trend.map((t) => t.sentiment), [trend]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const min = Math.min(...yData);
  const max = Math.max(...yData);

  return (
    <Box width="100%" overflow="auto">
      <LineChart
        xAxis={[{ scaleType: 'point', data: xData }]}
        series={[
          {
            data: yData,
            color: '#1976d2',
            label: 'Sentiment',
          }
        ]}
        width={isMobile ? 300 : 500}
        height={300}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
      <Box mt={1} fontSize="0.875rem">
        <div>🔺 Max: {max}</div>
        <div>🔻 Min: {min}</div>
      </Box>
    </Box>
  );
});

export default SentimentChart;
