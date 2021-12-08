import * as mongoose from "mongoose";

export interface PostI {
    title: string;
    description?: string;
    done: boolean;
    comments: [];
}

const PostSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String,
    },
    done: {
        type: Boolean,
        default: false
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
