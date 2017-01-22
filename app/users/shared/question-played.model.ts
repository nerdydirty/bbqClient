import {Question} from "../../questions/shared/question.model";
import {User} from "./user.model";
/**
 * Created by beateullmann on 22.01.17.
 *
 * Beschreibt die Struktur eines Users
 */

export class QuestionPlayed{

  id: number;
  user: User;
  question: Question;
  answerWasRight: boolean;
  points: number;
  attempts: number;
}
