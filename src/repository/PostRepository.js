
const Posts = require("../models/Post.js")
const UserRepository = require("./UserRepository.js")



class PostRepository{
    async create({user,title,description,imgUrl=""}){
        const post = new Posts({
            user,
            title,
            description,
            imgUrl,
            created_at:Date.now(),
            updated_at:Date.now()
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
            },
            updated_at:Date.now()
        })

        return post
    }

    async delete({id}){
        const post = await Posts.deleteOne({_id: id})
        
        return post
    }

    async findOne({id}){
        const post = await Posts.findOne({_id: id})

        return post

    }

    async findAll({_page ,_limit}){

        const posts = await Posts.find({},{}, { skip:_page*_limit , limit: _limit, sort: { 'created_at' : -1 } } )


        return posts
        }

    async findAllbyUser({user_id,_page ,_limit}){

        const posts = await Posts.find(
        { 'user.user_id':user_id },{},{ skip:_page*_limit , limit: _limit, sort: { 'created_at' : -1 } })

        return posts
    }
}

module.exports = PostRepository