export interface CommentRequest {
    postId: number;
    id: number | string;
    name?: string;
    email?: string;
    body?: string;
}