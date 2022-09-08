// TODO
import  {prisma as client}  from "../config/database";
import { Iquestions } from "../types/questionTypes";

export async function insert(questionData:Iquestions){
   return await client.questions.create({data:{...questionData}})
}

export async function get(){
    return await client.questions.findMany()
}

export async function getById(questionId:number){
    return await client.questions.findUnique({
        where:{
            id:questionId
        },
        select:{
            id:true,
            question:true,
            askedBy:true,
            answers:{
                select:{
                    answeredBy:true,
                    answer:true
            }}
        }
    })
}