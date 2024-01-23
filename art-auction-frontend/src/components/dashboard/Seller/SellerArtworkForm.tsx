import React, { useState } from 'react';

const SellerArtworkForm: React.FC = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [startingPrice, setStartingPrice] = useState(0);
    const [images, setImages] = useState<FileList | null>(null);

  const handleArtworkSubmit = (formData: any) => {
    // Implement logic for submitting artwork details to the backend
    console.log('Artwork Details:', formData);
  };

  return (
    <div>
      <h3>Create Artwork</h3>

      {/* Artwork Form */}
      <form onSubmit={(e) => { e.preventDefault(); handleArtworkSubmit({/* form data */}); }}>
        {/* Include input fields for artwork details */}
        <div>
        <label>Product Name:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Starting Price:</label>
        <input type="number" value={startingPrice} onChange={(e) => setStartingPrice(Number(e.target.value))} />

        <label>Images:</label>
        <input type="file" multiple onChange={(e) => setImages(e.target.files)} />

        <button onClick={handleArtworkSubmit}>Upload Product</button>
      </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellerArtworkForm;
