import React, { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

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
      {repositories.map((repository) => {
        return (
          <ul>
            <RepositoryItem repository={repository} key={repository.name} />
          </ul>
        );
      })}
    </section>
  );
};

export default RepositoryList;
