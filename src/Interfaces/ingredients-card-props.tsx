export default interface IngredientsCardProps {
    IngredientID: number,
    IngredientName: string,
    Nutrient: string,
    NutrientsContained: [],
    IngredientDescription: string,
    TotalCalorie: number,
    ImageLink: string,
    NutritionAmount: number,
    IngredientAmount: number,
    onAmountChange: (Data: IngredientProps, Action: string) => void;
}

export interface IngredientProps {
    ingredient_id: number,
    ingredient_name: string,
    nutrient: string,
    nutrition_contains: [],
    calories: number,
    amount: number,
}
