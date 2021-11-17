const UserRepository = require("../repository/UserRepository")


class GetUsersbyIdService {
    async execute(id){
        const userRepository = new UserRepository()

        const user = await userRepository.findbyId({id})

        if (!user){
            throw new Error("Usuário não encontrado")
        }
        
        return user
    }
};

module.exports = GetUsersbyIdService;