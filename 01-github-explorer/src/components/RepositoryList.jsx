import React from "react";

const RepositoryList = () => {
  const repository = "Ignite";

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <li>
          <strong>{repository}</strong>
          <p>Fomrs in React</p>
          <a href="#">Acessar repositório</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Fomrs in React</p>
          <a href="#">Acessar repositório</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Fomrs in React</p>
          <a href="#">Acessar repositório</a>
        </li>
      </ul>
    </section>
  );
};

export default RepositoryList;
