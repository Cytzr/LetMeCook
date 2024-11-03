export default interface IngredientsCardProps {
    IngredientID: number,
    IngredientName: string,
    // IngredientWeightPerPorsion: number,
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
    IngredientID: number,
    IngredientName: string,
    // IngredientWeightPerPorsion: number,
    Nutrient: string,
    NutrientsContained: [],
    IngredientDescription: string,
    TotalCalorie: number,
    ImageLink: string,
    IngredientAmount: number,
}
