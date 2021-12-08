export type Post = {
    _id?: string;
    title: string;
    description: string;
    done?: boolean;
    comments?: [];
    createdAt?: string;
    postId?:string;
}