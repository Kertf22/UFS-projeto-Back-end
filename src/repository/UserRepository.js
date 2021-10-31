const Users = require("../models/User.js")

class UserRepository{
    async create({name,password,imgUrl}){
        const user = new Users({
            name,
            password,
            imgUrl,
            created_at:Date.now(),
            updated_at:Date.now()
        })

        const data = await user.save()

        return data
    }

    async update({id}){
        const user = await Users.findOneAndUpdate({_id: id} ,{$inc : {'posts': 1}, updated_at:Date.now() })

        return user
    }

    async delete({id}){
        const user = await Users.remove({_id:id})

        return user
    }

    async find(name,password=""){
        if (!password){
            const user = await Users.findOne({name})

            return user
        }
        const user = await Users.findOne({name, password})
        
        return user
    }

    async findbyId({id}){
        const user = await Users.findById(id,{
            name:1,
            imgUrl:1,
            _id:1,
            posts:1,
            created_at:1,
            updated_at:1
        })

        return user
    }
}

module.exports = UserRepository