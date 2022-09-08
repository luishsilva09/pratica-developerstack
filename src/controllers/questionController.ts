import { Request, Response } from 'express';
import { newAnswer } from '../services/answerService';
import * as questionsService from '../services/questionService';
import { IanswersData } from '../types/answerTypes';
import { Iquestions } from '../types/questionTypes';

export async function createQuestion(req: Request, res: Response) {
  // TODO
  const questionData:Iquestions = req.body 

  const questionInfo = await questionsService.newQuestion(questionData)
  res.send(questionInfo)
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
  const questionId:number = Number(req.params.id);
  const answerData:IanswersData = req.body;
  const answerInfo = await newAnswer(answerData,questionId)

  res.send(answerInfo)
}

export async function get(req: Request, res: Response) {
  // TODO
  const allQuest = await questionsService.allQuestions()

  res.send({questions:allQuest})
}

export async function getById(req: Request, res: Response) {
  // TODO
  const questionId:number = Number(req.params.id)
  const result = await questionsService.getById(questionId)
  res.send(result)
}
