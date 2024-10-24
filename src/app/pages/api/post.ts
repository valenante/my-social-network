import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { user: 'Alice', content: '¡Hola mundo!', likes: 10 },
    { user: 'Bob', content: 'Mi primera publicación', likes: 5 },
  ]);
}
