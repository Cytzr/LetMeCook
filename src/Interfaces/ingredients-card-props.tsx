export default interface IngredientsCardProps {
    IngredientID: string,
    IngredientName: string,
    IngredientWeightPerPorsion: number,
    NutrientsContained: string[],
    IngredientDescription: string,
    TotalCalorie: number,
    ImageLink: string,
    onAmountChange: (Data: IngredientProps, Action: string) => void;
}

export interface IngredientProps {
    IngredientID: string,
    IngredientName: string,
    IngredientWeightPerPorsion: number,
    NutrientsContained: string[],
    IngredientDescription: string,
    TotalCalorie: number,
    ImageLink: string,
    IngredientAmount: number,
}