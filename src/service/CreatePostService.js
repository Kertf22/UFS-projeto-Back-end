
const PostRepository = require("../repository/PostRepository")
const UserRepository = require("../repository/UserRepository.js")

class CreatePostService{
    async execute({user_id,title,description,imgUrl}){

        const postRepository = new PostRepository()
        const userRepository = new UserRepository()

        const post = await postRepository.create({
            user_id,
            title,
            description,
            imgUrl
        })

        // Atualiza o número de post do usuário
        await userRepository.update({
            id:user_id,
        })

        return post
    }
    

}

module.exports = CreatePostService