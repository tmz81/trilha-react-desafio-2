import React from "react";

import { ItemContainer } from "./styles";

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a className="open-repo" href={repo.html_url} rel="noreferrer" target="_blank">
        Open
      </a>
      <br />
      <a href="#" rel="noreferrer" className="remover">
        Delete
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
