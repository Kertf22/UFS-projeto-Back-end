const UserRepository = require("../repository/UserRepository")

class DeleteUserService {
    async execute({id}){
        const userRepository = new UserRepository();

        const data = await userRepository.delete({
            id
        })

        return data
    }
}

module.exports = DeleteUserService