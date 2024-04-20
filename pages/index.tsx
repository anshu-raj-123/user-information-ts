import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mt-8 mb-4">Users</h1>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <motion.li key={user.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link href={`/users/${user.id}`}>
             
                <p className="text-lg font-semibold">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
              
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
