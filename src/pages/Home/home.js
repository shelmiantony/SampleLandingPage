import React from 'react'
import './home.css'
import { RiArrowDropDownLine,RiWhatsappFill } from "react-icons/ri";
import {BsWhatsapp, BsFillCalendar2EventFill,BsFillRecordFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

function Homes(){
    return(
    <div  class="bg-img" >
        

   <nav className="main-nav">
       <div className="logo">
           <h2>
               <span>T</span>ravel
               <span>E</span>ib<BsFillRecordFill className="round"/>
           </h2>
       </div>
       <div className="menu-link">
           <ul>
          
                   <a href="#Home"style={{ textDecoration:"underline solid springgreen 2px"}}>Home</a>
                   <a href="#Tours">Tours<RiArrowDropDownLine className="dropdown"/></a>
                   <a href="#Hotel">Hotel<RiArrowDropDownLine className="dropdown"/></a>
                   <a href="#Flight">Flight <RiArrowDropDownLine className="dropdown"/></a>
                   <a href="#About Us">About Us</a>
                   <a href="#Blog">Blog</a>
                   <a href="#Contact">Contact</a>
              
           </ul>
       </div>
 {/* social media link  */}

       <div className="social-media">
       <button class="w3-button w3-black w3-round-xlarge button5 btn-lg "  size="lg">
           <BsWhatsapp className="whatspp"></BsWhatsapp>
           Whats App
           </button>

       </div>

   </nav>

   <div >
       <p className="hero-section">MALE`</p>
       {/* <p className="maldives">MALDIVES</p> */}
   </div>
   


   <div class="btn-group">
       {/* for giving labels */}
     <div class="container">
        <div class="topnav ">
            <a href="#home">Destination:</a>
            <a href="#news">Travel from:</a>
            <a href="#contact">To:</a>
            <a href="#about">Rooms:</a>
            <a href="#about">Adults:</a>
            <a href="#about">Child:</a>
        </div>
    </div> 

   {/* button group  */}
        <button class="button1">Choose Location <RiArrowDropDownLine className="dropdown2"/></button>
        <button class="button1" ><BsFillCalendar2EventFill  className="calender"/>  17/01/2021</button>
        <button class="button1"><BsFillCalendar2EventFill  className="calender"/> 19/01/2021</button>
        <button class="button1">1<RiArrowDropDownLine className="dropdown2"/></button>
        <button class="button1">5<RiArrowDropDownLine className="dropdown2"/></button>
        <button class="button1">0<RiArrowDropDownLine className="dropdown2"/></button>
        <button class="button2 search ">SEARCH</button>
    </div>

</div>


)};

export default Homes;