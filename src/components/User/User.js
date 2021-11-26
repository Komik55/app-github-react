import React from 'react'
import './User.css'
 function User(props) {
     console.log(props.message)
        return (
        props.message===undefined && 
        <div>
    <div className="user-block">
       <div className="top-block"> 
            <img src={props.avatar_url} alt={props.node_id} className="avatar-icon" />
            <div className="title">
            <p className="login">    login:  {props.login}</p>
            <span>Repository : {props.public_repos}</span>
            </div>
       </div>
       <div className="bottom-block">
       <span className="follower follower-first">followers:{props.followers}</span>
       <span className="follower">following:{props.following}</span>
       </div>
  </div>       
        </div>

    );
     }

export default User;
