const UserRepository = require("../repository/UserRepository.js")
const AuthenticateUserService = require("./AuthenticateUserService.js")

const { hash } = require("bcryptjs")

class CreateUserService {
    async execute({name,password,imgUrl}){
        const userRepository = new UserRepository()
        const authenticateUserService = new AuthenticateUserService()

        // Verificar se o nome já está sendo utilizado
        const ExistUser = await userRepository.find(name)

        if (ExistUser) {
            throw new Error("Já existe esse nome no banco de dados!")
        }

        // Criptografia da senha
        const passwordHash = await hash(password, 8)

        await userRepository.create({
            name,
            password:passwordHash,
            imgUrl
        })

        // Já logar e autenticar o usuário
        const token = await authenticateUserService.execute(name,password)
        
        return token;
    }
}

module.exports = CreateUserService