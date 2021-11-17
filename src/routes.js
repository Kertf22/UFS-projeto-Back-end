const { Router } = require("express");
const AuthenticateUserController = require("./controllers/AuthenticateUserController.js");
const CreateCommentController = require("./controllers/CreateCommentController.js");
const CreatePostController = require("./controllers/CreatePostController.js");
const CreateUserController = require("./controllers/CreateUserController.js");
const DeletePostController = require("./controllers/DeletePostController.js");
const GetAllPostsController = require("./controllers/GetAllPostsController.js");
const UserPostController = require("./controllers/UserPostController.js");
const GetUserController = require("./controllers/GetUserController.js");
const GetUserIdController = require("./controllers/GetUsersbyIdController.js");
const ChangeUserPhotoController = require("./controllers/ChageUserPhotoController.js");

const { isAuthenticated } = require("./middleware/isAuthenticated.js");
const upload = require("./config/multer.js");


const routes = Router();
const createUserController = new CreateUserController();
const getUserController = new GetUserController()
const authenticateUserController = new AuthenticateUserController();
const createPostController = new CreatePostController();
const createCommentController = new CreateCommentController();
const deletePostController = new DeletePostController();
const getAllPostsController = new GetAllPostsController();
const userPostController = new UserPostController();
const getUserIdController = new GetUserIdController();
const changeUserPhotoController = new ChangeUserPhotoController()

routes
    .post("/user", upload.single("file"), createUserController.handle)
    .post("/user/login", authenticateUserController.handle)
    .get("/user", isAuthenticated, getUserController.handle)
    .post("/user/post", isAuthenticated ,createPostController.handle)
    .delete("/user/post", isAuthenticated ,deletePostController.handle)
    .patch("/posts/comment", isAuthenticated ,createCommentController.handle)
    .get("/user/:id/posts", isAuthenticated, userPostController.handle)    
    .get("/posts", isAuthenticated, getAllPostsController.handle)
    .get("/user/:id", isAuthenticated, getUserIdController.handle)
    .post("/user/profile", isAuthenticated, upload.single("file"),changeUserPhotoController.handler)
module.exports = { routes }




