export interface RecipesStepsPropsWithIndex {
    index: number,
    recipeDetail: RecipesStepsProps,
    onStepEdit: (recipeDetail: RecipesStepsProps, index: number) => void;
}

export interface RecipesStepsProps {
    stepName: string,
    stepDescription: string,
}