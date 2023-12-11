import React from "react";

// child component
const Card=({name,age,city,url}) => {

    return(
        <div className="main">
        <div className="card">
            <div className="avatar">
                
                <img className="avatar-pic" src={url} alt='profile'/>

            </div>
            <div className="avatar-info">
                <div>
                    Name: {name}
                </div>
                <div>
                    Age:{age}
                </div>
                <div>
                    City: {city}
                </div> 

            </div>
        </div>
        </div>


    );
    
}

export default Card;