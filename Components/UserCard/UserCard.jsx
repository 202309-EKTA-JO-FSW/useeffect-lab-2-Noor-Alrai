import React from "react";
export default function UserCard(props) {
  const {userData} = props
  return (
    <div className="user-card">
      {
         userData ? ( <div>
         <img src={userData.avatar_url} alt="avatar" />
 
   
         <h5> Name: {userData.name}</h5>
 
         <p> Username: {userData.login} </p>
       </div>) : 
          (
            <p>No user data to display.</p>)
      }
    
    </div>
  );
}
