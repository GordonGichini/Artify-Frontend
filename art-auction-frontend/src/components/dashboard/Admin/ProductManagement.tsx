import React from 'react';

const ProductManagement: React.FC = () => {
  const products = [
    { id: 1, name: 'Artwork 1', category: 'Painting', startingPrice: 100 },
    { id: 2, name: 'Artwork 2', category: 'Sculpture', startingPrice: 150 },
    // Add more mock product data or fetch from the backend
  ];

  const handleViewProduct = (productId: number) => {
    // Implement logic to view product details
    console.log(`Viewing details of product with ID ${productId}`);
  };

  const handleEditProduct = (productId: number) => {
    // Implement logic to edit product details
    console.log(`Editing details of product with ID ${productId}`);
  };

  const handleDeleteProduct = (productId: number) => {
    // Implement logic to delete product
    console.log(`Deleting product with ID ${productId}`);
  };

  return (
    <div>
      <h2>Product Management</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.category} - Starting Price: ${product.startingPrice}
            <button onClick={() => handleViewProduct(product.id)}>View Product</button>
            <button onClick={() => handleEditProduct(product.id)}>Edit Product</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete Product</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
