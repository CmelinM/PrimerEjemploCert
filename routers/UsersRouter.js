const express = require('express')
const { UsersController } = require('../controllers')
const { AuthMiddleware, AdminMiddleware } = require('../middlewares')

const router = express.Router()

router.get("/", UsersController.getAllUser)
router.get("/:id", UsersController.findByidUser)
// router.get("/:id/purchases", AuthMiddleware, UsersController.findPurchases)
router.post("/", UsersController.create)
router.patch("/:id", UsersController.update);
router.delete("/:id", UsersController.deleteUser)
router.put("/status/:id", AdminMiddleware, UsersController.changeStatus)

module.exports = {
  UsersRouter: router
}
