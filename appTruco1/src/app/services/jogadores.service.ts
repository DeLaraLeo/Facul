import { Injectable } from '@angular/core';
import { Jogador } from '../models/jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
  private _jogadores: Jogador[] = [];

  constructor() { }

  public getJogadores(): Jogador[]{
    return this._jogadores;
  }
  public inserir(jogador: Jogador): void {
    this._jogadores.push(jogador);
  }

}
