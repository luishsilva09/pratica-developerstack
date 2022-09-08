// TODO
import  {prisma as client}  from "../config/database";
import { IanswersData } from "../types/answerTypes";

export async function insert(answerData:IanswersData,questionId:number){
    return await client.answers.create({data:{...answerData,questionId}})
}
