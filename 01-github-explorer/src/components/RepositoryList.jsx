import React, { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    handleRepositories();
  }, []);

  async function handleRepositories() {
    fetch("https://api.github.com/users/thuurzz/repos")
      .then((resp) => resp.json())
      .then((data) => setRepositories(data));
  }

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      {repositories.map((repository, index) => {
        return (
          <ul key={index}>
            <RepositoryItem repository={repository} />
          </ul>
        );
      })}
    </section>
  );
};

export default RepositoryList;
