import styled from "styled-components";

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #800020;
  min-height: 100vh;
`;

export const PageNav = styled.nav`
  width: 100%;
  border-radius: 20px;
  height: 4rem;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 20% 60%;
  align-items: center;
  background-color: #fffdd0;
  color: white;
  padding: 10px 20px;
`;

export const PageTitle = styled.h1`
  font-family: "ICA Rubrik", sans-serif;
  color: black;
  font-size: 30px;
`;

export const SearchBox = styled.input`
  font-family: "ICA Rubrik", sans-serif;
  padding: 5px 10px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  width: 22rem;
  outline: none;
  color: white;
  background-color: #d95d48;
`;

export const RecipeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const RecipeButton = styled.button`
  font-family: "ICA Rubrik", sans-serif;
  font-size: 16px;
  background-color: #d95d48;
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e4a27a;
  }
`;

export const RecipeDetails = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #d95d48;
  width: 80%;
`;

export const RecipeTitle = styled.h1`
  font-family: "ICA Rubrik", sans-serif;
  font-size: 28px;
  margin: 0;
`;

export const RecipeInfo = styled.p`
  font-family: "Agbalumo", sans-serif;
  font-size: 16px;
  margin: 5px 0;
`;
