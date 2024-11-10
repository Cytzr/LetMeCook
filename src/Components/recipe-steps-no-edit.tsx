import { Col, Container } from "react-bootstrap";
import { RecipesStepsNoEdit } from "../Interfaces/recipe-steps-props";

const RecipeStepsNoEdit: React.FC<RecipesStepsNoEdit> = ({ index, recipeDetail, instructionLength }) => {
    return (
        <>
            <Container fluid style={{ width: "82%" }}>
                <Col style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start" }}>
                    <div
                        className="me-3"
                        style={{ backgroundColor: "black", textAlign: "center", color: "white", borderRadius: "20vw", height: "3.5vw", width: "3.5vw", fontSize: "1.5vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p className="m-0">{index}</p>
                    </div>
                    <div style={{ height: "2vw", width: "40%", borderRadius: "0.5vw" }}><h5>{recipeDetail.stepName}</h5></div>
                </Col>
                <Col style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start" }}>
                    <div className="me-3" style={{ width: "3.5vw", height: "5vw", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: "1px", height: "5vw", border: instructionLength !== index ? "solid 1px grey" : "" }}></div>
                    </div>
                    <div style={{ height: "4vw", width: "100%", borderRadius: "0.5vw", paddingBottom: "0.4vw", paddingLeft: "0.3vw" }}>{recipeDetail.stepDescription}</div>
                </Col>
            </Container>
        </>
    );
}

export default RecipeStepsNoEdit;