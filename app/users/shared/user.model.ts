/**
 * Created by beateullmann on 07.01.17.
 *
 * Beschreibt die Struktur eines Users
 */

export class User{

  id: number;
  password: string;
  name: string;
  totalPoints: number;
  attemptsTotal: number;
  jsonWebToken: string;
}
