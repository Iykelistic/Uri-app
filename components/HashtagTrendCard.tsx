import dynamic from 'next/dynamic';
import { Box, Card, CardContent, CircularProgress, Typography } from '@mui/material';


export default function HashtagTrendCard({ data }: { data: any }) {
  const SentimentChart = dynamic(() => import('./SentimentChart'), { ssr: false, loading: () => <CircularProgress /> });
  const isUp = data.trend[data.trend.length - 1].sentiment > data.trend[0].sentiment;

  return (
    <Card sx={{ width: '100%' }}>
      <CardContent sx={{ px: { xs: 2, sm: 3 }, py: 2 }}>
        <Typography variant="h5">{data.hashtag} {isUp ? '📈' : '📉'}</Typography>
        <Typography variant="subtitle1" gutterBottom>{data.range}</Typography>
        <Box mt={2}>
          <SentimentChart trend={data.trend} />
        </Box>
      </CardContent>
    </Card>
  );
}