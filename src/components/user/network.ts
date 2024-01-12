// network.js contiene las rutas
import { Router } from "express";
import * as Controller from "./controller.js"

//Variable que instancia a ROUTER
const userRouter:Router = Router()

//Forma antigua
//userRouter.get("/",Controller.list)

//Forma moderna
userRouter.route("/").get(Controller.list);
userRouter.route("/:id").get(Controller.getById);
userRouter.route("/").post(Controller.store);
userRouter.route("/:id").put(Controller.update);
userRouter.route("/:id").delete(Controller.destroy);

export default userRouter;