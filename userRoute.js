const router=require("express").Router();
const userModule=require("./userModule")

// Get All Users
router.get("/",userModule.getAllUsers)

//get Single user
router.get("/:id",userModule.getUser)

//Add User
router.post("/",userModule.addUser)

//update User
router.put("/:id",userModule.editUser)

//Delete User
router.delete("/:id",userModule.deleteUser)

module.exports=router
