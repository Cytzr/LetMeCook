import { Col, Container } from "react-bootstrap";
import { CommentsProps } from "../Interfaces/comments-props";
import { MdVerified } from "react-icons/md";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useState } from "react";
import axios from "axios";
const CommentCard: React.FC<CommentsProps> = ({ forum_comment_id , commenterImage, username, comment, is_expert, like_amount, likes, onLikeDislike}) => {
    const loginDataString = localStorage.getItem('login_data');
    const loginData = loginDataString ? JSON.parse(loginDataString) : null;

    const likeDislike = async () => {
        console.log('trigger');
        const response = await axios.post('http://localhost:8000/api/forum/like-dislike', {
            forum_comment_id,
            user_id:  loginData.user_id,
            action: !likes.includes(loginData.user_id) ? "like" : "dislike"
        });
        onLikeDislike();
    }
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
                        <div style={{ display: "flex", alignItems: "center", gap: "0.3vw" }}>
                            <h5 className="m-0" style={{ color: is_expert == 1 ? "rgb(224, 49, 96)" : "" }}>{username}</h5>
                            {is_expert == 1 ? <MdVerified color="rgb(49, 140, 224)" /> : ""}
                        </div>
                        <div style={{ whiteSpace: "nowrap" /* "normal"*/, overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%" }}>{comment}</div>
                    </Col>
                    <Col md={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div onClick={likeDislike}>
                            {!likes.includes(loginData.user_id) ? <GoHeart /> : <GoHeartFill />}
                            {like_amount > 0 ? (<span style={{marginLeft: "10px"}}>{like_amount}</span>) : (<div></div>)}
                        </div>

                    </Col>
                </Col>
            </Container >
        </>
    );
}

export default CommentCard;
