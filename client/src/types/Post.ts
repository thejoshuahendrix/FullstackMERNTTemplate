export type Post = {
    _id?: string;
    content: string;
    author:string;
    comments?: [];
    createdAt?: string;
    postId?:string;
}