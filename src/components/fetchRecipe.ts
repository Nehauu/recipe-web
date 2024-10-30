import { useQuery } from "react-query";
import { apiInstance } from "../hooks/InstanceApi";

export interface recipeProps {
  meals: mealsProps[];
}

export interface mealsProps {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

const fetchData = ({
  food,
  apiKey,
}: {
  food: string;
  apiKey: number;
}): Promise<recipeProps> => {
  return apiInstance
    .get<recipeProps>(`json/v1/${apiKey}/search.php?s=${food}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

const instructionData = ({ id, apiKey }: { id: string; apiKey: number }) => {
  return apiInstance
    .get<recipeProps>(`json/v1/${apiKey}/lookup.php?i=${id}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const useData = ({ food }: { food: string }) => {
  const apiKey = 1;

  return useQuery(["recipe-name", food], () => fetchData({ food, apiKey }), {
    enabled: !!food,
  });
};

export const useInstruction = ({ id }: { id: string }) => {
  const apiKey = 1;

  return useQuery(["instructions", id], () => instructionData({ id, apiKey }), {
    enabled: !!id,
  });
};
