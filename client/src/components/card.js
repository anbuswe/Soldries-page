import React from "react";

function Card(props){
    return(
       <div className="col-lg-2">  <div className="card">
           <img className="card-img-top" src={props.imgURL} alt="Card" />
        <div className="card-body">
       <div><h5 className="card-title">{props.title}</h5></div>
       <div><h5 className="card-title">{props.title2}</h5></div>
       <p className="card-text"> {props.subtitle}</p>
  </div>
</div></div> 
      
    );
}

export default Card;