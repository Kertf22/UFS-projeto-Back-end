
const Posts = require("../models/Post.js")

class PostRepository{
    async create({user_id,title,description,imgUrl=""}){
        const post = new Posts({
            user_id,
            title,
            description,
            imgUrl,
        })

        const data = await post.save()

        return data
    }

    async update({id,user_id,content}){
        const post = await Posts.updateOne({_id: id},{
            $push: { 
                comments:{
                    user_id,
                    content
                }
            }
        })

        return post
    }

    async delete({id}){
        const post = await Posts.remove({_id: id})

        return post
    }

    async findOne({id}){
        const post = await Posts.findOne({_id: id})

        return post

    }

    async findAll(){
        
        const posts = await Posts.find()

            return posts
        }

    async findAllbyUser({user_id}){
        const posts = await Posts.find({user_id})

        return posts
    }
}

module.exports = PostRepository