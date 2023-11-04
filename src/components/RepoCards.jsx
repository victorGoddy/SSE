import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import wacth from "../scr/eye.svg";
import fork from "../scr/icon.svg";
import star from "../scr/star.svg";
import "../styles/RepoCards.css";

function RepoCards() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(6);
  const [totalPage, setTotalPage] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/victorGoddy/repos`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  //  Getting my repo Cards
  const userElements = user.map((userElement) => {
    return (
      <div className="repo-card" key={userElement.id}>
        <Link to={`/repos/${userElement.name}`}>
          <h3 className="repo-name">{userElement.name}</h3>
        </Link>

        <p>
          {" "}
          <img src={wacth} /> {userElement.watchers_count} wacthing
        </p>

        <p>
          {" "}
          <img src={fork} /> {userElement.forks_count} Fork
        </p>

        <p>
          {" "}
          <img src={star} /> {userElement.stargazers_count} star
        </p>
      </div>
    );
  });

  const Display = () => {
    if (userElements.length >= currentPage) {
      for (let i = 0; i < currentPage; i++) {
        totalPage.push({ ...userElements[i] });
      }
    } else {
      return userElements;
    }
    return totalPage;
  };

  function next(event) {
    if (currentPage >= userElements.length) {
      event.target.textContent = "No More Repo";
    } else {
      setCurrentPage((prev) => prev + 6);
    }
  }

  return (
    <div className="MainRepo">
      <section className="repo-container">
        <Display />
      </section>
      <div>
        <p onClick={next}>Show More</p>
      </div>
    </div>
  );
}

export default RepoCards;
