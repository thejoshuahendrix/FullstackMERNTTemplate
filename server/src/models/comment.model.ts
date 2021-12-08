import * as mongoose from "mongoose";

export interface CommentI {
    content: string;
    postId: string;
};

const CommentSchema = new mongoose.Schema({
    content: {
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
