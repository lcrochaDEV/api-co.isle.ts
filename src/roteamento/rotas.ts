import { Router } from 'express';
import Rotas from 'Controladores/ClassRequest';


const router = Router();

router.get("/", Rotas.methodGet)
router.get("/:id", Rotas.methodGet)
router.post("/", Rotas.methodPost)
router.patch("/:id", Rotas.methodPetch)
router.delete("/:id", Rotas.methodDelete)

export default router;