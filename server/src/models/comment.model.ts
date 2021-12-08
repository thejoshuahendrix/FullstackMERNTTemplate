import * as mongoose from "mongoose";

export interface CommentI {
    title: string;
    description: string;
    postId: string;
};

const CommentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export const Comment = mongoose.model("comments", CommentSchema);
