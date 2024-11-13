export interface CommentsProps {
    user_id: string,
    forum_comment_id: string,
    commenterImage: string,
    username: string,
    comment: string,
    is_expert: number,
    like_amount: number,
    likes: []
}
