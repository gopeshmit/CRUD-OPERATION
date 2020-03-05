const user= require('../model/user.model');

//For Creating User
exports.user_create = function (req,res) {
    console.log(req.body);
    let users = new user(
    {
        user_id             :req.body.user_id,
        name                :req.body.name,
        email               :req.body.email,
        phone               :req.body.phone,
        dob                 :req.body.dob,
        access_token        :req.body.access_token,
        address             :req.body.address,
        deviceType          :req.body.deviceType,
        deviceToken         :req.body.deviceToken,
        latitude            :req.body.latitude,
        longitude           :req.body.longitude,
        location            :req.body.location,
        is_blocked          :req.body.is_blocked,
        is_active           :req.body.is_active,
        isVerified          :req.body.isVerified,
        is_profile_created  :req.body.is_profile_created,
        created_on          :req.body.created_on,
        social_id           :req.body.social_id,
        social_type         :req.body.social_type
    }
);
users.save()
.then(()=>{ console.log("success")})
.catch((error)=>{console.log("error",error )})  
};

//For Getting User Detail
exports.user_details = function (req, res) {
user.find((err, docs)=> {
    if (err) return(err);
    else
    res.send(docs);
    console.log("get")
})
};

//for Upadating User Detail
module.exports.user_update=(req,res)=>{
    user.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err,user) {
        if (err) return(err);
        res.send('User is  udpated.');
    });
}


//For Deleting User Detail
exports.user_delete = function (req, res) {
user.findByIdAndRemove(req.params.id, function (err) {
    if (err) return(err);
    res.send('Deleted successfully!');
})
};
