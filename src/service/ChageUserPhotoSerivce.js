const UserRepository = require("../repository/UserRepository");


class ChageUserPhotoSerivce {
    async execute({_id,imgUrl}){
        const userRepository= new UserRepository();

        const user = await userRepository.updateImgUrl({_id,imgUrl})

        return user
    }
}

module.exports = ChageUserPhotoSerivce