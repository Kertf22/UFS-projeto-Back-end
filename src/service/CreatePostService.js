
const PostRepository = require("../repository/PostRepository")
const UserRepository = require("../repository/UserRepository.js")

class CreatePostService{
    async execute({title,description,imgUrl="",user_id,user_name,user_imgUrl}){

        const postRepository = new PostRepository()
        const userRepository = new UserRepository()

        const post = await postRepository.create({
            user:{
                user_id,
                user_name,
                user_imgUrl
            },
            title,
            description,
            imgUrl
        })

        // Atualiza o número de post do usuário
        await userRepository.update({
            id:user_id,
            quantity:1
        })

        return post
    }
    

}

module.exports = CreatePostService