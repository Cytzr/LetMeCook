import { Col, Container } from "react-bootstrap";
import { RecipesStepsPropsWithIndex } from "../Interfaces/recipe-steps-props";

const RecipeSteps: React.FC<RecipesStepsPropsWithIndex> = ({ index, recipeDetail, onStepEdit }) => {

    const handleSetStepName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const temp = recipeDetail;
        temp.step_name = e.target.value;
        onStepEdit(temp, index - 1);
    }

    const handleSetStepDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const temp = recipeDetail;
        temp.description = e.target.value;
        onStepEdit(temp, index - 1);
    }

    return (
        <>
            <Container fluid style={{ width: "82%" }}>
                <Col style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start" }}>
                    <div
                        className="me-3"
                        style={{ backgroundColor: "black", textAlign: "center", color: "white", borderRadius: "20vw", height: "3.5vw", width: "3.5vw", fontSize: "1.5vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p className="m-0">{index}</p>
                    </div>
                    <input onChange={(e) => handleSetStepName(e)} value={recipeDetail.step_name} type="text" style={{ height: "2vw", width: "40%", borderRadius: "0.5vw", padding: "0.55vw", border: "solid grey 1px" }} />
                </Col>
                <Col style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start" }}>
                    <div className="me-3" style={{ width: "3.5vw", height: "5vw", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: "1px", height: "5vw", border: "solid 1px grey" }}></div>
                    </div>
                    <textarea onChange={handleSetStepDescription} value={recipeDetail.description} style={{ height: "4vw", width: "100%", borderRadius: "0.5vw", padding: "0.4vw" }}></textarea>
                </Col>
            </Container>
        </>
    )
}

export default RecipeSteps;
