import React from "react";
import RepositoryItem from "./RepositoryItem";

const repository = {
  name: "Ignite",
  description: "Repo RactJS",
  link: "https://github.com/thuurzz/ignite-reactjs-rocketseat",
};

const RepositoryList = () => {
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
