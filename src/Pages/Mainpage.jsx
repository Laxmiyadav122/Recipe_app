import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Mealcards from './Mealcards';
import { handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

const Mainpage = () => {
  const [data, setData] = useState();
const [search, setSearch] = useState("");
const [msg, setMsg] = useState("");
const [loggedInUser, setLoggedInUser] = useState("");
const navigate = useNavigate();

useEffect(() =>{
  setLoggedInUser(localStorage.getItem('loggedInUser'));
},[]);

const handleLogout = () =>{
  localStorage.removeItem('token');
  localStorage.removeItem('loggedInUser');
  handleSuccess('User Logged out');
  setTimeout(() =>{
    navigate('/login');
  },1000)
}

const handleInput = (event) =>{
  setSearch(event.target.value)
}
const myFun = async() =>{
  if(search == ""){
    setMsg("Please Enter Something");
  }else{
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const jsonData = await get.json();
    setData(jsonData.meals)
    setMsg("")
  }
}
  return (
    <>
      <h1 className='head'>FOOD RECIPE APP</h1>
      <h3>Welcome, {loggedInUser}</h3>
      <div className='container'>
        <div className='searchBar'>
          <input type="text" placeholder='Enter Dishes' onChange={handleInput}/>
          <button onClick={myFun}>Search</button>
        </div>
        <h4 className='msg'>{msg}</h4>
      </div>
      <div>
        <Mealcards detail = {data}/>
      </div>
      <div style={{marginTop:"20px"}}>
        <button id='logoutbtn' onClick={handleLogout}>Logout</button>
        <ToastContainer/>
      </div>
    </>
  )
}

export default Mainpage
