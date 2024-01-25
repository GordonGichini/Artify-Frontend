import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../common/Sidebar';

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Monalisa', category: 'Painting', startingPrice: 1000 },
    { id: 2, name: 'Bored Ape', category: 'Digital Art', startingPrice: 1050 },
    { id: 2, name: 'Martin Luther', category: 'Sculpture', startingPrice: 150 },
    { id: 2, name: 'Art By Don', category: 'Drawing', startingPrice: 550 },
    { id: 2, name: 'Kreative Arts', category: 'Photography', startingPrice: 150 },
    { id: 2, name: 'Vasco Da Gama', category: 'Sculpture', startingPrice: 750 }
    // Add more mock product data or fetch from the backend
  ]);

  const navigate = useNavigate();

  const handleViewProduct = (productId: number) => {
    // Implement logic to view product details
    navigate(`/product/${productId}`)
  };

  const handleEditProduct = (productId: number) => {
    // Implement logic to edit product details
    navigate(`/product/${productId}/edit`);
  };

  const handleDeleteProduct = (productId: number) => {
    // Implement logic to delete product
    setProducts(products.filter(product => product.id !== productId));
  };

  useEffect(() => {

  }, []);

  return (
    <div className="flex">      
      <Sidebar persona="admin" />
      <div className="ml-64 p-8 w-full">
      <h2 className="text-2xl font-semibold mb-4">Product Management</h2>
      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Starting Price</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">{product.id}</td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">{product.startingPrice}</td>
              <td className="py-2 px-4 border-b">
                {/* Add edit and delete actions here */}
                <button className="text-blue-500 hover:underline mr-2" onClick={() => handleEditProduct(product.id)}>Edit</button>
                <button className="text-blue-500 hover:underline mr-2" onClick={() => handleViewProduct(product.id)}>View</button>
                <button className="text-red-500 hover:underline" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default ProductManagement;
