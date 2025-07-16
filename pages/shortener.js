import React, { useState } from 'react';
import axios from 'axios';

export default function Shortener() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post('http://localhost:5000/api/url', { longUrl }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input type="url" className="border p-2 w-full" value={longUrl} onChange={e => setLongUrl(e.target.value)} placeholder="Enter URL..." required />
        <button className="bg-blue-500 text-white px-4 py-2 mt-2 w-full" type="submit">Shorten</button>
      </form>
      {shortUrl && <p className="mt-4">Short URL: <a href={shortUrl}>{shortUrl}</a></p>}
    </div>
  );
}
