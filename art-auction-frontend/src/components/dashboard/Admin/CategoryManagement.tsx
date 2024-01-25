import React, { useState } from 'react';
import Sidebar from '../../common/Sidebar';

const CategoryManagement: React.FC = () => {
  const [categories, setCategories] = useState<string[]>(['Painting', 'Sculpture', 'Photography']);

  const handleAddCategory = (newCategory: string) => {
    // Implement logic to add a new category
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  const handleEditCategory = (index: number, updatedCategory: string) => {
    // Implement logic to edit a category
    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      updatedCategories[index] = updatedCategory;
      return updatedCategories;
    });
  };

  const handleDeleteCategory = (index: number) => {
    // Implement logic to delete a category
    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      updatedCategories.splice(index, 1);
      return updatedCategories;
    });
  };

  return (
    <div className="flex">      
      <Sidebar persona="admin" />
      <div className="ml-64 p-8 w-full">
      <h2 className="text-2xl font-semibold mb-4">Category Management</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4">
            <strong>{category}</strong>
            <div className="mt-2">
            <button className="mr-2 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600" onClick={() => handleEditCategory(index, prompt('Enter updated category', category) || '')}>
              Edit Category
            </button>
            <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600" onClick={() => handleDeleteCategory(index)}>Delete Category</button>
            </div>
          </div>
        ))}
      <button className="mt-4 bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600" onClick={() => handleAddCategory(prompt('Enter new category') || '')}>Add Category</button>
    </div>
    </div>
    </div>
  );
};

export default CategoryManagement;
