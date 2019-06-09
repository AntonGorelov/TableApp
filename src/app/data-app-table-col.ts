export class DataAppTableCol {

  public nameCol: string;
  public value: string;
  public templateHeader: any;
  public templateCell: any;
  public klass: string[] = [];
  public align: string;

  constructor(
    name: string,
    value: string,
    theader: any,
    tcell: any,
    align: string
  ) {
    this.nameCol = name;
    this.value   = value;
    this.templateHeader = theader;
    this.templateCell = tcell;
    this.align = align;
  }

  public addClass(classArray: string[]): string[] {
    let setArray = [];
    if (this.klass.length > 0) {
      setArray = this.klass;
      for (let i = 0; i < classArray.length; i++) {
        setArray.push(classArray[i]);
      }
      const set = setArray.slice(3);

      for (let i = 0; i < 3; i++) {
        if (setArray[i] === undefined) {
          setArray[i] = '';
        }
        this.klass[i] = set[i] + ' ' + setArray[i];
      }
      return this.klass;
    }

    for (let i = 0; i < classArray.length; i++) {
      if (classArray[i] === undefined) {
        classArray[i] = '';
      }
      this.klass[i] = classArray[i];
    }
  }
}
