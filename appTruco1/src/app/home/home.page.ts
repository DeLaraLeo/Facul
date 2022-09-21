import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { JogadorService } from '../services/jogadores.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pontos1: number = 0
  pontos2: number = 0


  constructor(public router: Router, public jogadorService: JogadorService, public alertController: AlertController) {

  }


  async presentAlert(titulo: string, subtitulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      subHeader: subtitulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

  public aumentar_3() {
    let incremento = this.pontos1 += 3
    if (this.pontos1 >= 12) {
      this.presentAlert("Contador de Truco", "Fim de jogo", "Você Ganhou!")
      this.zerarJogador1()
    }
  }
  public diminuir_3() {
    let decremento = this.pontos1 -= 3;
    if (this.pontos1 < 1) {
      this.zerarJogador1();
    }

  }
  public aumentar_1() {
    let incremento = this.pontos1++
    if (this.pontos1 >= 12) {
      this.presentAlert("Contador de Truco", "Fim de jogo", "Você Ganhou!")
      this.zerarJogador1()
    }
  }

  public diminuir_1() {
    let decremento = this.pontos1--
    if (this.pontos1 < 1) {
      this.zerarJogador1()
    }

  }

  public zerarJogador1() {
    this.pontos1 = 0
  }

  public aumentar3() {
    let incremento = this.pontos2 += 3;
    if (this.pontos2 >= 12) {
      this.presentAlert("Contador de Truco", "Fim de jogo", "Você Ganhou!")
      this.zerarJogador2()
    }
  }
  public diminuir3() {
    let decremento = this.pontos2 -= 3
    if (this.pontos2 < 1) {
      this.zerarJogador2()
    }

  }
  public aumentar1() {
    let incremento = this.pontos2++
    if (this.pontos2 >= 12) {
      this.presentAlert("Contador de Truco", "Fim de jogo", "Você Ganhou!")
      this.zerarJogador2()
    }
  }
  public diminuir1() {
    let decremento = this.pontos2--
    if (this.pontos2 < 1){
      this.zerarJogador2()
    }

  }
  public zerarJogador2() {
    this.pontos2 = 0
  }

}



