import { Col, Container, Row, Table } from "react-bootstrap";
import CustomNavbar from "../Components/navbar";
import Footer from "../Components/footer";
import { useState } from "react";

function CreateRecipe() {
    const [image, setImage] = useState<File | null>(null);
    const [previewImageUrl, setPreviewImageUrl] = useState("");

    const fileToDataString = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onerror = (error) => reject(error);
            reader.onload = () => resolve(reader.result as string);
        });
    };

    const handleImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList
        setImage(selectedFiles?.[0]);

        if (!selectedFiles) {
            return;
        }
        try {
            const imgUrl = await fileToDataString(selectedFiles?.[0]);
            setPreviewImageUrl(imgUrl);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <CustomNavbar />
            <Container fluid>
                <Row className="px-2">
                    {/* Image Part */}
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <input className="mb-3" type="file" name="recipe-image" onChange={(event) => handleImage(event)} />
                            <img src={previewImageUrl === "" ? "../src/Images/RecipePlaceholderImage.png" : previewImageUrl} className="d-block mb-3" width={475} height={475}
                                style={{ objectFit: 'cover', borderRadius: '1vw' }} />
                        </div>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <Col md={2}><h3>Ingredients</h3></Col>
                        <Col>
                            <Table>
                            </Table>
                        </Col>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default CreateRecipe;