const PostRepository = require("../repository/PostRepository");
const UserRepository = require("../repository/UserRepository");

class DeletePostService {
    async execute({post_id,user_id}){
        const postRepository = new PostRepository();
        const userRepository = new UserRepository();

        const user = await userRepository.findbyId({id:user_id})

        if (!user){
            throw new Error("Usuário não encontrado")
        };

        const isAdmim = user.admim;
        const post = await postRepository.findOne({id: post_id})

        if (!post){
            throw new Error("Post não existe");
        };

        if (post.user.user_id != user_id && !isAdmim){
            throw new Error("Não autorizado");  
        }

        //Deleta post
        const data = await postRepository.delete({
            id: post._id,
        })

        // Diminui um post no perfil do usuário
        await userRepository.update({
            id:user_id,
            quantity:-1
        })

        return data;
    }
}

module.exports = DeletePostService