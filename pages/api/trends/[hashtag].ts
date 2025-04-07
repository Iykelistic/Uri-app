import { NextApiRequest, NextApiResponse } from 'next';
import trendData from '../../../mocks/trendData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { hashtag } = req.query;

  res.status(200).json({ ...trendData, hashtag: `#${hashtag}` });
}