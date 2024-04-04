// App.js
import React, { useState, useEffect } from 'react';
import AlbumList from './components/AlbumList';
import AddAlbumForm from './components/AddAlbumForm';
import { getAlbums, addAlbum, updateAlbum, deleteAlbum } from './services/api';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const fetchedAlbums = await getAlbums();
      setAlbums(fetchedAlbums);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  const handleAddAlbum = async (albumData) => {
    try {
      const newAlbum = await addAlbum(albumData);
      setAlbums([...albums, newAlbum]);
    } catch (error) {
      console.error('Error adding album:', error);
    }
  };

  const handleUpdateAlbum = async (albumData) => {
    try {
      const updatedAlbum = await updateAlbum(albumData);
      const updatedAlbums = albums.map(album =>
        album.id === updatedAlbum.id ? updatedAlbum : album
      );
      setAlbums(updatedAlbums);
    } catch (error) {
      console.error('Error updating album:', error);
    }
  };

  const handleDeleteAlbum = async (albumId) => {
    try {
      await deleteAlbum(albumId);
      const updatedAlbums = albums.filter(album => album.id !== albumId);
      setAlbums(updatedAlbums);
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };

  return (
    <div className="App">
      <h1>Albums Management</h1>
      <AddAlbumForm onAddAlbum={handleAddAlbum} />
      <AlbumList
        albums={albums}
        onUpdateAlbum={handleUpdateAlbum}
        onDeleteAlbum={handleDeleteAlbum}
      />
    </div>
  );
}

export default App;
