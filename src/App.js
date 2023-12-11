import React from "react";
import './App.css'
import Card from './Components/Card';

function App(){
  const userProfiles=[
    {
      name: 'Rohit Sharma',
      age:67,
      city:'Pune',
      profileUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww"
    },
    {
      name: 'Divyanshi Agrawal',
      age:21,
      city:'Mathura',
      profileUrl:"https://plus.unsplash.com/premium_photo-1689266188052-704d33673e69?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8fDA%3D"
    },
    {
      name: 'Anjalika Goswami',
      age:20,
      city:'Agra',
      profileUrl:"https://plus.unsplash.com/premium_photo-1686244745070-44e350da9d37?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFufGVufDB8fDB8fHww"
    },
    {
      name: 'Anuj Chaudhary',
      age:24,
      city:'Alighar',
      profileUrl:"https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fHww"
    }
  ];

  // it returns jsx
  const userList=userProfiles.map((user)=>{
    return <Card name={user.name} age={user.age} city={user.city} url={user.profileUrl}/>
  });


  return(
    <div className="main">
      {/* parent component */}

      {/* {userProfiles.length} */}
      
      {userList}


    </div>
  )
};
export default App;
