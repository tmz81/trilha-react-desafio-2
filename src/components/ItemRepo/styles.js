import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
  }

  a.open-repo {
    color: #00ff00;
    font-weight: bold;
  }

  a.remover {
    color: #ff0000;
    font-weight: bold;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;
