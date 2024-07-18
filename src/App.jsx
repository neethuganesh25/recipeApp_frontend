import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Register from './components/Register';
import MainHome from './Pages/MainHome';
import Login from './components/Login';
import Meal from './components/Meal';
import Category from './components/Category';
import Recipe from './components/Recipe';
import EditRecipe from './components/EditRecipe';
import FeedBack from './Pages/FeedBack';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {/*<Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/:recipeId" element={<Recipe />} />
        <Route path="/recipes" element={<Meal />} />
        <Route path="/mainhome/*" element={<MainHome />} />
        <Route path="/category" element={<Category />} />
        <Route path="/editrecipe/:id" element={<EditRecipe />} />
        <Route path="/feedback" element={<FeedBack />} />
      </Routes>
    </>
  );
}

export default App;
