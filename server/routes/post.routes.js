import { Router } from "express"; // import Router From express module
import { CreatePost, GetAllBooks, GetOneBooks, UpdateBook, DeleteBook } from "../controllers/post.controller.js" // import all the function from controller


const router = Router(); // create A NEW ROUTER

router.post("/", CreatePost);
router.get("/", GetAllBooks);
router.get("/:id", GetOneBooks);
router.put("/:id", UpdateBook);
router.delete("/:id", DeleteBook)

export default router;