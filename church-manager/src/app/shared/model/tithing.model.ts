import { Christian } from './christian.model';
import { Church } from './church.model';

export class Tithing {
  public id?: number;
  public value: number;
  public date?: any;
  public christian: Christian;
  public church?: Church;
}
