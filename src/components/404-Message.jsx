import React from "react";
import { Link } from "react-router-dom";
import "../styles/404-Message.css";

// setting my function for the text type animation
let message = "Oops! 🙈 We couldn't find the page you're looking for. It's a bit like searching for buried treasure and discovering an empty chest. Please double-check the URL for any typos, or mosey back to our homepage to embark on a fresh adventure. If you're feeling stuck, don't hesitate to 📞 contact us for a helping hand. We're here to make your browsing experience as smooth as a river cruise! 🚢😊"
let Message = ()=>{
  return (
    <div className="Holder404">
      <p>{message}</p>
      <button>
        <p>
          <Link to="/">
           {"Home Page"}
          </Link>
        </p>
      </button>
    </div>
  );
}
export default Message;
