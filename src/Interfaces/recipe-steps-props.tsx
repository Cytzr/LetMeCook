export interface RecipesStepsPropsWithIndex {
    index: number,
    recipeDetail: RecipesStepsProps,
    onStepEdit: (recipeDetail: RecipesStepsProps, index: number) => void;
}

export interface RecipesStepsNoEdit {
    index: number,
    recipeDetail: RecipesStepsProps,
    instructionLength: number,
}

export interface RecipesStepsProps {
    stepName: string,
    stepDescription: string,
}