import * as mongoose from "mongoose";

export interface PostI {
    content: string;
    done: boolean;
    comments: [];
}

const PostSchema = new mongoose.Schema({
    content: {
        type: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comments"
        }
    ]
}, {
    timestamps: true
});

export const Post = mongoose.model("posts", PostSchema);
