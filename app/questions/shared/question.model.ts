import {User} from "../../users/shared/user.model";
import {Answer} from "./answer.model";
import {Category} from "../../categories/shared/category.model";
/**
 * Created by beateullmann on 07.01.17.
 *
 * Beschreibt die Struktur einer Question
 */

export class Question{

  id: number;
  text: string;
  active: boolean;
  points: number;
  explanation: string;
  img: string;
  creator: User;
  category: Category;
  answers: Answer[];

}
