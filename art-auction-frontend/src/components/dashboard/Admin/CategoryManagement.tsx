import React, { useState } from 'react';

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
    <div>
      <h2>Category Management</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <strong>{category}</strong>
            <button onClick={() => handleEditCategory(index, prompt('Enter updated category', category) || '')}>
              Edit Category
            </button>
            <button onClick={() => handleDeleteCategory(index)}>Delete Category</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddCategory(prompt('Enter new category') || '')}>Add Category</button>
    </div>
  );
};

export default CategoryManagement;
