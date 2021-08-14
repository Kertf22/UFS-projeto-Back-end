const CreateUserService = require("../src/service/CreateUserService.js");
const CreatePostService = require("../src/service/CreatePostService.js");
const CreateCommentService = require("../src/service/CreateCommentService.js")
const GetAllPostsService = require("../src/service/GetAllPostsService.js")
const DeleteUserService = require("../src/service/DeleteUserService.js");
const DeletePostService = require("../src/service/DeletePostService.js");
const UserPostService = require("../src/service/UserPostService.js");

require("../src/db/connection_db_test.js")

describe('Testes com Posts', () => {


    let createUserService;
    let deleteUserService;
    let createPostService;
    let createCommentService;
    let userPostService;
    let getAllPostsService;
    let deletePostService;
    let user_1;
    let user_2;
    let post_1;
    let post_2;

    beforeAll(() => {
        createUserService = new CreateUserService();
        deleteUserService = new DeleteUserService();
        createPostService = new CreatePostService();
        createCommentService = new CreateCommentService();
        userPostService = new UserPostService();
        getAllPostsService = new GetAllPostsService();
        deletePostService = new DeletePostService();
    })

    it("Criando post",async () => {
        // Criaremos 2 usuários para melhor desempenho de teste
        let params = {
            password:"123",
            imgUrl: "images/teste.jpg"
        }
        let paramsPost = {
            title: " POST TESTE",
            description: "teste teste teste",
            imgUrl:"teste.jpg"
        }
        user_1 = await createUserService.execute({name:"Teste Post 1",...params});
        user_2 = await createUserService.execute({name:"Teste Post 2",...params});
        
        // Criando os posts
        post_1 = await createPostService.execute({ 
            user_id: user_1._id,
            ...paramsPost
        });
        post_2 = await createPostService.execute({
            user_id: user_2._id,
            ...paramsPost
        });
        
        await expect(post_1).toHaveProperty("_id")
        await expect(post_2).toHaveProperty("_id")
    })

    it("Comentando em um Post",async () => {
        const { nModified } = await createCommentService.execute({
            id: post_1._id,
            user_id: user_1._id.toString(),
            content:"Testando"
        })

        await expect(nModified).toEqual(1)
    })

    it("Recebendo todos os posts do usuário",async () =>{
        const posts = await userPostService.execute({user_id:user_1._id.toString()});

        //Será 1 pois só temos 1 post até o momento
        await expect(posts.length).toEqual(1)

    })

    it("Recebendo todos os posts",async () =>{
        const posts = await getAllPostsService.execute();

        
        //Será 1 pois só temos 1 post até o momento
        await expect(posts.length).toEqual(2)

    })

    it("Deletando post",async () => {
        //Deletando todos os posts
        const delete_1 = await deletePostService.execute({
            post_id:post_1._id,
            user_id:user_1._id
        })
        const delete_2 = await deletePostService.execute({
            post_id:post_2._id,
            user_id:user_2._id
        })

        // Deletando os usuários cadastrados
        await deleteUserService.execute({id:user_1._id})
        await deleteUserService.execute({id:user_2._id})

        await expect(delete_1.deletedCount).toEqual(1)
        await expect(delete_2.deletedCount).toEqual(1)
    })
})