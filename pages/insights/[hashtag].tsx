import { useRouter } from 'next/router';
import { useHashtagTrend } from '../../hooks/useHashtagTrend';
import HashtagTrendCard from '../../components/HashtagTrendCard';
import { Box, CircularProgress, Button, Typography, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';

const HASHTAGS = ['uri', 'nextjs', 'react'];

export default function HashtagPage() {
  const router = useRouter();
  const { hashtag } = router.query;
  const [selected, setSelected] = useState(hashtag || 'uri');

  const { data, loading, error, retry } = useHashtagTrend(selected as string);

  useEffect(() => {
    if (hashtag !== selected) {
      router.push(`/insights/${selected}`);
    }
  }, [selected]);

  if (loading) return <Box textAlign="center" mt={4}><CircularProgress /></Box>;
  if (error) return (
    <Box textAlign="center" mt={4}>
      <Typography color="error">Error: {error}</Typography>
      <Button variant="contained" onClick={retry}>Retry</Button>
    </Box>
  );

  return (
    <Box p={2} maxWidth={600} mx="auto">
      <Select fullWidth value={selected} onChange={(e) => setSelected(e.target.value)}>
        {HASHTAGS.map((tag) => (
          <MenuItem key={tag} value={tag}>{`#${tag}`}</MenuItem>
        ))}
      </Select>
      {data && <HashtagTrendCard data={data} />}
    </Box>
  );
}
