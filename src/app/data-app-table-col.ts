export class DataAppTableCol {

  public nameCol: string;
  public value: string;
  public templateHeader: any;
  public templateCell: any;
  public klass: string;

  constructor(name: string, value: string, theader: any, tcell: any, klass: string) {
    this.nameCol = name;
    this.value   = value;
    this.templateHeader = theader;
    this.templateCell = tcell;
    this.klass = klass;
  }
}
