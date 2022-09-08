// TODO
import * as questionRepository from '../repositories/questionRepository';
import { Iquestions } from "../types/questionTypes";

export async function newQuestion(questionData:Iquestions) {
    return await questionRepository.insert(questionData)
     
}

export async function allQuestions(){
    return await questionRepository.get()
}

export async function getById(questionId:number){
    return await questionRepository.getById(questionId)
}