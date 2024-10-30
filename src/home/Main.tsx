import { useState } from "react";
import {
  PageNav,
  SearchBox,
  PageTitle,
  PageBody,
  RecipeButton,
  RecipeList,
  RecipeDetails,
  RecipeTitle,
  RecipeInfo,
} from "../styles/homeStyle";
import { mealsProps, useData, useInstruction } from "../components/fetchRecipe";

export const MainPage = () => {
  const [userInput, setUserInput] = useState("");
  const [selectId, setSelectId] = useState("");
  const [error, setError] = useState(false); // Error state

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    setSelectId("");
    setError(false); // Reset error on new input
  };

  const handleSelection = (id: string) => {
    setSelectId(id);
  };

  // Fetching recipe data
  const { data: recipeData, isError: recipeError } = useData({
    food: userInput,
  });
  const { data: instructionData } = useInstruction({ id: selectId });

  // Set error state if fetching recipe data fails
  if (recipeError) {
    setError(true);
  }

  // Check if recipeData is defined and meals are an array
  const meals =
    recipeData && Array.isArray(recipeData.meals) ? recipeData.meals : [];

  return (
    <PageBody>
      <PageNav>
        <PageTitle>Recipe Api</PageTitle>
        <SearchBox
          type="text"
          placeholder="search"
          value={userInput}
          onChange={handleInput}
        />
      </PageNav>

      <RecipeList>
        {error ? (
          <p>Error fetching recipes. Please try again later.</p>
        ) : meals.length > 0 && !selectId ? (
          <div>
            {meals.map((data) => (
              <RecipeButton
                key={data.idMeal}
                onClick={() => handleSelection(data.idMeal)}
              >
                {data.strMeal}
              </RecipeButton>
            ))}
          </div>
        ) : null}
      </RecipeList>

      {instructionData?.meals &&
        instructionData.meals.map((data: mealsProps) => (
          <RecipeDetails key={data.idMeal}>
            <RecipeTitle>{data.strMeal}</RecipeTitle>
            <RecipeInfo>{data.strArea}</RecipeInfo>
            <RecipeInfo>{data.strInstructions}</RecipeInfo>
          </RecipeDetails>
        ))}
    </PageBody>
  );
};
