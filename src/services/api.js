// services/api.js
const API_URL = 'https://jsonplaceholder.typicode.com/albums';

export const getAlbums = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch albums');
  }
  return response.json();
};

export const addAlbum = async (albumData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(albumData),
  });
  if (!response.ok) {
    throw new Error('Failed to add album');
  }
  return response.json();
};

export const updateAlbum = async (albumData) => {
  const response = await fetch(`${API_URL}/${albumData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(albumData),
  });
  if (!response.ok) {
    throw new Error('Failed to update album');
  }
  return response.json();
};

export const deleteAlbum = async (albumId) => {
  const response = await fetch(`${API_URL}/${albumId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete album');
  }
};
