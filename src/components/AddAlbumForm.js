// components/AddAlbumForm.js
import React, { useState } from 'react';

function AddAlbumForm({ onAddAlbum }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAddAlbum({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter album title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Album</button>
    </form>
  );
}

export default AddAlbumForm;
