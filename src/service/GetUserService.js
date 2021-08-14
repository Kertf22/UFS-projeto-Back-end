const UserRepository = require("../repository/UserRepository")


class GetUserService {
    async execute(id){
        const userRepository = new UserRepository()

        const user = userRepository.findbyId({id})

        if (!user){
            throw new Error("Usuário não encontrado")
        }
        
        return user
    }
}

module.exports = GetUserService