import { Church } from "./church.model";

export class User {
  public id?: number;
  public login: string;
  public password: string;
  public isAdmin: boolean;
  public church?: Church;
}
