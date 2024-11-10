import { Col, Container } from "react-bootstrap";
import { CommentsProps } from "../Interfaces/comments-props";
import { MdVerified } from "react-icons/md";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useState } from "react";

const CommentCard: React.FC<CommentsProps> = ({ commenterID, commenterImage, commenterName, comment, isDoctor }) => {
    const [heart, setHeart] = useState(0);
    return (
        <>
            <Container fluid style={{ width: "82%" }}>
                <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingBottom: "3vw", height: "9vw" }}>
                    <Col md={1} style={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
                        <img
                            className="d-block img-fluid"
                            src={commenterImage}
                            alt=""
                            style={{ objectFit: 'cover', borderRadius: '50%', width: "5vw", height: "5vw", }}
                        />
                    </Col>
                    <Col md={10} style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-evenly" }}>
                        <div onClick={() => { console.log(commenterID) }} style={{ display: "flex", alignItems: "center", gap: "0.3vw" }}>
                            <h5 className="m-0" style={{ color: isDoctor ? "rgb(224, 49, 96)" : "" }}>{commenterName}</h5>
                            {isDoctor ? <MdVerified color="rgb(49, 140, 224)" /> : ""}
                        </div>
                        <div style={{ whiteSpace: "nowrap" /* "normal"*/, overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%" }}>{comment}</div>
                    </Col>
                    <Col md={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div onClick={() => {
                            if (heart === 0) {
                                setHeart(1);
                            } else {
                                setHeart(0);
                            }
                        }}>
                            {heart === 0 ? <GoHeart /> : <GoHeartFill />}
                        </div>
                    </Col>
                </Col>
            </Container >
        </>
    );
}

export default CommentCard;