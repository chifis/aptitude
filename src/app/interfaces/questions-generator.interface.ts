import { Question } from "../models/question.model";

export interface QuestionsGenerator {
	getQuestions() : Question[]
}