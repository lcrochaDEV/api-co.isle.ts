import { ObjectId } from "mongodb";
import { Request, Response } from "express";
import conectDataBase from "conect-data/conectDB";

interface IReqRes{
  req: Request,
  res: Response
}

class Rotas {
  static async methodGet({req , res}: IReqRes){ //GET OK
    try {
      const id = req.params.id;
      const ObjectIdDB = new ObjectId(req.params.id);
      if (id) {
          const data = await conectDataBase.findOne({'_id':ObjectIdDB});
          res.status(200).json(data); 
        }else{
          const data = await conectDataBase.find({}).toArray();
          res.status(200).json(data);       
        }
      }
      catch(error){
        res.status(500)
        res.send({mensagem: (error as Error).message})   
      }
    };
    static async methodPost ({req , res}: IReqRes) { //POST OK
      try {
        const data = await conectDataBase.insertOne(req.body);
        res.status(201).json({ message: "Criado com sucesso"});
      } catch (error) {
        res.status(500).json({ message: `${(error as Error).message} - Falha ao cadastrar` });
      }
    }
    static async methodPetch({req , res}: IReqRes){
      try {
        const ObjectIdDB = new ObjectId(req.params.id);
        console.log(ObjectId)
        await conectDataBase.findOneAndUpdate({'_id':ObjectIdDB}, { $set:req.body });
        res.status(200).json({ message: "Dados atualizados com sucesso!" }); 
      } catch (error) {
        res.status(500).json({ message: `${(error as Error).message} - Falha na atualização` });
      }
    };
    static async methodDelete({req , res}: IReqRes) { //DELETE OK
      try {
        const ObjectIdDB = new ObjectId(req.params.id);
        console.log({'_id':ObjectIdDB})
        await conectDataBase.findOneAndDelete({'_id':ObjectIdDB});
        res.status(200).json({ message: "Dados excluídos com sucesso" });
      } catch (error) {
        res.status(500).json({ message: `${(error as Error).message} - Falha ao Deletar` });
      }
    };
  }
export default Rotas;