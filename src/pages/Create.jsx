import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [socialMediaHandle, setSocialMediaHandle] = useState('');
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    // Convert FileList to an array and set it in state
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('socialMediaHandle', socialMediaHandle);

    // Append each file from the images array to FormData
    images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      await axios.post('http://localhost:3001/user/create', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('User submitted successfully');
      navigate('/');
    } catch (error) {
      console.error('There was an error uploading the data', error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-[500px]">
      <form className="min-w-96" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="media"
            className="block mb-2 text-sm font-medium text-white"
          >
            Social Media Handle
          </label>
          <input
            type="text"
            id="media"
            name="socialMediaHandle"
            value={socialMediaHandle}
            onChange={(e) => setSocialMediaHandle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5 mt-5">
          <label
            htmlFor="images"
            className="block mb-2 text-sm font-medium text-white"
          >
            Upload Images
          </label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
            className="file-input file-input-bordered w-full"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
