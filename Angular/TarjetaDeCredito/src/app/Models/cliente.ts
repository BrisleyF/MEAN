export class Client{
  private _name:string;
  private _edad:number;

  constructor(name:string,edad:number){
    this._name = name;
    this._edad=edad;
  }

  public get getName():string{
    return this._name;
  }

  public set setName(name:string){
  // validaciones pertinentes
  this._name = name;
  }

  public get getEdad():number{
    return this._edad;
  }

  public set setEdad(edad:number){
    // validaciones
    this._edad = edad;
  }
}
