const { Router } = require("express");
const AuthenticateUserController = require("./controllers/AuthenticateUserController.js");
const CreateCommentController = require("./controllers/CreateCommentController.js");
const CreatePostController = require("./controllers/CreatePostController.js");
const CreateUserController = require("./controllers/CreateUserController.js");
const DeletePostController = require("./controllers/DeletePostController.js");
const GetAllPostsController = require("./controllers/getAllPostsController.js");
const UserPostController = require("./controllers/UserPostController.js");
const GetUserController = require("./controllers/GetUserController.js")
const { isAuthenticated } = require("./middleware/isAuthenticated.js");


const routes = Router();
const createUserController = new CreateUserController();
const getUserController = new GetUserController()
const authenticateUserController = new AuthenticateUserController();
const createPostController = new CreatePostController();
const createCommentController = new CreateCommentController();
const deletePostController = new DeletePostController();
const getAllPostsController = new GetAllPostsController();
const userPostController = new UserPostController();

routes
    .post("/user",createUserController.handle)
    .post("/user/login", authenticateUserController.handle)
    .get("/user",isAuthenticated, getUserController.handle)
    .post("/user/post", isAuthenticated ,createPostController.handle)
    .patch("/posts/comment", isAuthenticated ,createCommentController.handle)
    .delete("/user/post", isAuthenticated ,deletePostController.handle)
    .get("/user/posts",isAuthenticated, userPostController.handle)    
    .get("/posts",isAuthenticated, getAllPostsController.handle)


module.exports = { routes }