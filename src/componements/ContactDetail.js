import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
         <image scr ={user} alt="user" />   
        </div>
        <div className="content">
            <div className="header">Ahmed</div>
            <div className="description">ahmed01benlarbi@gmail.com</div>
        </div>  
      </div>
    </div>
    
  );
};
export default  ContactCard;
