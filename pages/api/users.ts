
import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await response.json();
   
    const users = data.map(({ id, name, email }: User) => ({ id, name, email }));
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'server error' });
  }
}
