import React from 'react';
import Gallery from './Gallery';

const GalleryContainer = () => {
  return (
    <div>
      <Gallery title="Trending Now" query="Star Wars" />
      <Gallery title="Watch it Again" query="Harry Potter" />
      <Gallery title="New Releases" query="Lord of the Rings" />
    </div>
  );
};

export default GalleryContainer;
