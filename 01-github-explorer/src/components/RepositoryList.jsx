import React, { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

const repository = {
  name: "Ignite",
  description: "Repo RactJS",
  link: "https://github.com/thuurzz/ignite-reactjs-rocketseat",
};

//https://api.github.com/users/thuurzz/repos

const RepositoryList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(()=>{
    handleRepositories();
  }, []);

  async function handleRepositories(){
    fetch("https://api.github.com/users/thuurzz/repos")
      .then(resp => resp.json())
      .then(data => setRepos(data));
  }

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
};

export default RepositoryList;
