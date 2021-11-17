const ChageUserPhotoSerivce = require("../service/ChageUserPhotoSerivce");

class ChageUserPhotoController {
    async handler(req,res){
        
        const chageUserPhotoSerivce = new ChageUserPhotoSerivce();
        
        var { location } = req.file;

        const user = await chageUserPhotoSerivce.execute({
            _id: req.user_id,
            imgUrl:location
        });

        return res.json(user);
    }
}


module.exports = ChageUserPhotoController;