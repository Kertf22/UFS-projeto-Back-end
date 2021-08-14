const UserRepository = require("../repository/UserRepository.js")
const { compare } = require("bcryptjs")
const { sign } = require("jsonwebtoken")

class AuthenticateUserService {
    async execute(name,password){

        const userRepository = new UserRepository()

        // Acha o usuário
        const user = await userRepository.find(name)
        
        if(!user){
            throw new Error("Nome // Senha incorretos.")
        }

        // Compara as senhas
        const hashPassword = await compare(password,user.password)

        if (!hashPassword){
            throw new Error("Nome // Senha incorretos.")
        }

        // Cria token jwt
        const token = sign({
            name: user.name,   
            imgUrl: user.imgUrl,
            id: user._id
        },
        "ufs_project",
        {
            subject: user._id.toString(),
            expiresIn: "1d"
        }
        )

        return token
    }
}

module.exports = AuthenticateUserService