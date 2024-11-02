import { Col, Container, Row } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
    onSearchChange: (value: string) => void;
}

export default function SearchBar({ onSearchChange }: SearchBarProps) {

    const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.target.value);
    }

    return (
        <>
            <Container fluid>
                <Row className="d-flex justify-content-center align-items-between" style={{ border: "solid 1px rgb(210, 210, 210)", borderRadius: "0.4vw", height: "40px" }}>
                    <Col md={2} className="p-0 d-flex justify-content-center align-items-center">
                        <IoSearch size={"1.3em"} />
                    </Col>
                    <Col className="p-0 d-flex justify-content-center align-items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            style={{
                                border: "none",
                                outline: "none",
                                width: "100%",
                                height: "100%",
                                borderRadius: "0.3vw",
                                padding: "0.5vw"
                            }}
                            className="p-0"
                            onChange={(event) => {
                                handleSetValue(event);
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}