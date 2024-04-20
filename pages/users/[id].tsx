
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const UserProfile: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className="container mx-auto">
      <h1 className="text-3xl font-semibold mt-8 mb-4">{user.name}</h1>
      <p className="text-lg mb-2"><strong>Email:</strong> {user.email}</p>
      <p className="text-lg mb-2"><strong>Phone:</strong> {user.phone}</p>
      <p className="text-lg mb-2"><strong>Company:</strong> {user.company.name}</p>
    </motion.div>
  );
};

export default UserProfile;
