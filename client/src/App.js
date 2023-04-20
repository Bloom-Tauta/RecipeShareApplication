
import './App.css';
import { Route, Routes } from "react-router-dom"
import React,{ useState} from 'react';
import LandingPage from './components/LandingPage';
import RecipeForm from './components/RecipeForm';
import Share from './components/Share';
// import ShareComponent from './components/ShareComponent';
import ShareComponent2 from './components/SharedComponents2';
import RatingsForm from './components/ReviewsForm';
import RecipeDetails from './components/RecipeDetailsComponent';
import UserDashboard from './components/UserDashboard';
import EditProfile from './components/EditProfile';
import ReviewsForm from './components/ReviewsForm';
import Edit from './components/Edit';
import Contact from './components/Contact';
import RecipePage from './components/RecipePage';
import RecipeCard from './components/RecipeCard';
import SearchById from './components/SearchById';
// import Sort from './components/Sort';
import DefaultCreation from './components/DefaultCreation'
import MealDetails from './components/MealDetails';
import Login from './components/Login';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TheDetails from './components/TheDetails';

function App() {

  const [search, setSearch] = useState('')
  function handleSearch(value){
    alert(value)
  }
  return (
    <div className="App">
      <NavBar search={search} handleSearch={handleSearch} />
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path="/" element={<LandingPage search={search}/>}/>
        <Route path="/recipe-form" element={<RecipeForm/>}/>
        <Route path="/share" element={<Share/>}/>
        <Route path="/sharesocials" element={<ShareComponent2/>}/>
        {/* <Route path="/ratings" element={<RatingsForm/>}/> */}
        <Route path="/recipe-details" element={<RecipeDetails/>}/>
        <Route path="/user-dashboard" element={<UserDashboard/>}/>
        {/* <Route path="/reviews" element={<ReviewsForm/>}/> */}
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/recipe-page/:id" element={<RecipePage/>}/>
        <Route path="/recipe-card" element={<RecipeCard/>}/>
        <Route path="/details" element={<SearchById/>}/>
        <Route path="/default" element={<DefaultCreation/>}/>
        {/* <Route path="/viewmeal/:id" element={<MealDetails/>}/> */}
        <Route path="/viewmeal/:id" element={<TheDetails/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
