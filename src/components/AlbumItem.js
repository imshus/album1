// components/AlbumItem.js
import React, { useState } from 'react';
import EditAlbumForm from './EditAlbumForm';

function AlbumItem({ album, onUpdateAlbum, onDeleteAlbum }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedAlbumData) => {
    onUpdateAlbum(updatedAlbumData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDeleteAlbum(album.id);
  };

  return (
    <li>
      {isEditing ? (
        <EditAlbumForm
          album={album}
          onUpdate={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <div>{album.title}</div>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default AlbumItem;
