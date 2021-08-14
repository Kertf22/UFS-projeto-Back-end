const UserRepository = require("../repository/UserRepository.js")
const { hash } = require("bcryptjs")

class CreateUserService {
    async execute({ name,password,imgUrl }){
        const userRepository = new UserRepository()

        // Verificar se o nome já está sendo utilizado

        const ExistUser = await userRepository.find(name)

        if (ExistUser) {
            throw new Error("Já existe esse nome no banco de dados!")
        }

        // Criptografia da senha
        const passwordHash = await hash(password, 8)

        const data = await userRepository.create({
            name,
            password:passwordHash,
            imgUrl
        })

        return data
    }
}

module.exports = CreateUserService