export class Jogador{
  

  private _pontos1: number;
  private _pontos2: number;


  constructor(pontos1: number, pontos2: number){
    this._pontos1 = pontos1
    this._pontos2 = pontos2
  }
  public getPontos1():number{
    return this._pontos1
  }
  public setPontos1(pontos1: number):void{
    this._pontos1 = pontos1
  }
   public getPontos2():number{
    return this._pontos2
  }
  public setPontos2(pontos2: number):void{
    this._pontos2 = pontos2
  }

}
