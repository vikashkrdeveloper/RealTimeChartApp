const UserDetailsControllers=async (req,res)=>{
res.status(200).send(req.rootUser);
}
module.exports=UserDetailsControllers;