import {Router} from 'express'
import postRouter from './post'
import commentRouter from './comment'

const router = Router()

router.use("/posts", postRouter)
router.use("/comments", commentRouter)

export default router;