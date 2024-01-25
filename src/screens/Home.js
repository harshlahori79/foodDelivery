import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import MyCard from '../components/MyCard'
import { useState , useEffect } from 'react'






export default function Home() {


  const [foodCategory , setCategory] = useState([]);
  const [foodItem , setItem] = useState([]);
  const [search , setSearch] = useState('');

  const getData = async()=>{

    const response = await fetch('http://localhost:5000/api/displaydata',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      }
    })

    const foodresponse = await response.json();

    //console.log(foodresponse[0] , foodresponse[1]);

    setCategory(foodresponse[1]);
    setItem(foodresponse[0]);
  

  }

  useEffect(()=>{
    getData()
  },[]);

  



  return (
    <>
    <div><Navbar/></div>
   <div>
    
   {/* <Carousel/> */}

   <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit:"contain !important"}}>
  <div className="carousel-inner" style={{maxHeight:"500px"}}>

  
<div className='carousel-caption' style={{zIndex:"10"}}>
<div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
      {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
    </div>
     
</div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?rajma" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?pasta" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

   
   </div>






    <div className = 'container'>
    {foodCategory !== null ?foodCategory.map((data)=>{
    return(
      <>
      <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
      <hr/>
      <div className='row mb-3'>
        {foodItem !== null ? foodItem.filter((item)=>
          (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))
        ).map((filteredItems)=>{
          return(
            <div key={foodItem._id} className='col-12 col-md-6 col-lg-3'>
          <MyCard foodItems={filteredItems} foodOptions={filteredItems.options[0]}/>
          </div>
          )
         
        }) : ""}
      </div>
      </>
      )}) 
    : ""}


       
    </div>
   
   {/* <div><MyCard/></div> */}


    <div><Footer/></div>
    </>
  )
}
