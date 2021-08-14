const CreateUserService = require("../src/service/CreateUserService.js");
const DeleteUserService = require("../src/service/DeleteUserService.js");
require("../src/db/connection_db_test.js")

describe('Testes com Usuário', () => {

    let createUserService;
    let deleteUserService;
    let id;
    let params = {
        name:"Teste Name",
        password:"123",
        imgUrl: "images/teste.jpg"
    }

    beforeAll(() => {
        createUserService = new CreateUserService();
        deleteUserService = new DeleteUserService()
    })


    it("Criando o Usuário", async () => {

        const user = await createUserService.execute({...params});

        id = user._id
        await expect(user).toHaveProperty("_id")
    })

    it("Não deveria ser possívl criar um novo usuário com um nome já utilizado", async () => {

        await expect(createUserService.execute({...params})).rejects.toEqual(
            new Error("Já existe esse nome no banco de dados!")
        )
    })

    it("Deletar o usuário",async () => {

        const { deletedCount } = await deleteUserService.execute({id})
        await expect(deletedCount).toEqual(1)
    })
})