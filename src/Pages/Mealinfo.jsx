import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Mealinfo() {
  const {mealid} = useParams();
  const [info, setInfo] = useState(null);
  console.log(mealid);


  useEffect(() =>{
    const getInfo = async() =>{
    try{
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
      const jsonData = await get.json();
      if(jsonData.meals && jsonData.meals.length > 0){
        setInfo(jsonData.meals[0])
      }
    }
    catch(error){
      console.error("Error fetxhing meal info:", error);
    }
  };
  getInfo();
  }, [mealid]);

  return (
    <div>
      {!info ? "Data Not Found" :
       <div className='mealInfo'>
        <img src={info.strMealThumb}/>
        <div className='info'>
          <h1>Recipe Detail</h1>
          <button>{info.strMeal}</button>
          <h3>Intruction</h3>
          <p>{info.strInstructions}</p>
        </div>
       </div>
      }
    </div>
  )
}

export default Mealinfo
