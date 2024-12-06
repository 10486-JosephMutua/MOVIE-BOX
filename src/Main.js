import React from "react";
export default function Main(Prop){
  return(
    <>
    
    <main>

  <div className="container">
 
  <div className="row">
 
  <div className="image">
  <img src={Prop.img} class="img-fluid" alt="moana 2" />

  
 </div>


  
 </div>
<div className="sapan">
 <span>{Prop.span}</span>

 </div>
  </div>

  </main>
  </>
  );




}