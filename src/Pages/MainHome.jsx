import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Link, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Add from '../components/Add';
import EditRecipe from '../components/EditRecipe'; 
import { getRecipeApi } from '../../services/allApi';
import './MainHome.css';  // Custom CSS for additional styling

function MainHome(isLoggedIn,handleLogout) {
  const [recipes, setRecipes] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const addNewRecipe = (newRecipe) => {
    setRecipes(prevRecipes => {
      if (!prevRecipes.some(recipe => recipe.id === newRecipe.id)) {
        return [newRecipe, ...prevRecipes];
      }
      return prevRecipes;
    });
  };

  const setDeleteRecipeStatus = (status) => {
    if (status) {
      fetchRecipes();
    }
  };

  const fetchRecipes = async () => {
    const result = await getRecipeApi();
    if (result && result.data) {
      setRecipes(result.data);
    }
  };

  const openEditModal = (recipe) => {
    setCurrentRecipe(recipe);
    setIsEditModalOpen(true);
  };

  const saveUpdatedRecipe = (updatedRecipe) => {
    setRecipes(prevRecipes =>
      prevRecipes.map(r => (r.id === updatedRecipe.id ? updatedRecipe : r))
    );
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    
    <div>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={
          <div>
            <div className='d-flex flex-wrap m-5 justify-content-between align-items-center'>
              <Add setAddStatus={addNewRecipe} />
              <h5 className='text-end ms-auto'>
                <Link to={'/category'} className='view-categories-link'>
                  View all Categories
                </Link>
              </h5>
            </div>
            <div className='container mx-5'>
              <div className="row">
                {recipes.map((recipe) => (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={recipe.id}>
                    <RecipeCard 
                      displayRecipe={recipe} 
                      setDeleteRecipeStatus={setDeleteRecipeStatus} 
                      openEditModal={openEditModal} 
                    />
                  </div>
                ))}
              </div>
            </div>
            {isEditModalOpen && (
              <EditRecipe
                recipe={currentRecipe}
                onClose={() => setIsEditModalOpen(false)}
                onSave={saveUpdatedRecipe}
              />
            )}
          </div>
        } />
      </Routes>
    </div>
  );
}

export default MainHome;
