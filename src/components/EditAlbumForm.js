// components/EditAlbumForm.js
import React, { useState } from 'react';

function EditAlbumForm({ album, onUpdate, onCancel }) {
  const [title, setTitle] = useState(album.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ id: album.id, title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Update</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default EditAlbumForm;
