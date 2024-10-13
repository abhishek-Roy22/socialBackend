// src/components/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('http://localhost:3001/user/posts');
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="text-white max-w-6xl mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>
      <div className="flex flex-wrap gap-5">
        {users.map((user) => (
          <div className="card bg-base-100 w-96 shadow-xl" key={user._id}>
            <div className="card-body">
              <h2 className="card-title text-slate-900">{user.name}</h2>
              <p className="text-slate-800">{user.socialMediaHandle}</p>
            </div>
            <figure>
              {user.images.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:3001/${image}`}
                  alt={`upload-${index}`}
                />
              ))}
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
