// TODO
 import * as answerRepository from "../repositories/answerRepository";
import { IanswersData } from "../types/answerTypes";

 export async function newAnswer(answerData:IanswersData,questionId:number){
    return await answerRepository.insert(answerData,questionId)
 }