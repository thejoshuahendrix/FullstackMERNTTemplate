import BaseController from './base.controller'
import { Post } from '../models/post.model'
import { Comment, CommentI } from "../models/comment.model";
import { Request, Response } from 'express';

export default class PostController extends BaseController {

    constructor() {
        super(Post)
    }

    delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const post = await this.model.findById({ _id: id })
            const deletedComments = await Comment.deleteMany({ postId: id })
            const dbData = await this.model.deleteOne({ _id: id });
            res.send(dbData);

        } catch (error) {
            res.status(400).send(`Error in DELETE ${this.modelName}`);
        }
    }
}