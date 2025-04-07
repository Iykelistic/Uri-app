import { useCallback, useEffect, useState } from 'react';

export const useHashtagTrend = (hashtag: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTrend = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/trends/${hashtag}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [hashtag]);

  useEffect(() => {
    if (hashtag) fetchTrend();
  }, [fetchTrend, hashtag]);

  return { data, loading, error, retry: fetchTrend };
};