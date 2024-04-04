// components/AlbumList.js
import React from 'react';
import AlbumItem from './AlbumItem';

function AlbumList({ albums, onUpdateAlbum, onDeleteAlbum }) {
  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <AlbumItem
            key={album.id}
            album={album}
            onUpdateAlbum={onUpdateAlbum}
            onDeleteAlbum={onDeleteAlbum}
          />
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
