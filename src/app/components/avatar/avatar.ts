import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class AvatarComponent {

  anguloGiro = signal<number>(0);
  estaGirando = signal<boolean>(false);
  nombre = signal<string>('avatar');
  colorFondo = signal<string>('#3498db');
  tamano = signal<number>(150);
  tieneLentes = signal<boolean>(false);
  tipoExpresion = signal<number>(1);
  
  private intervalId: any = null;

  cambiarColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
  }
  cambiarTamano(event: Event) {
    const input = event.target as HTMLInputElement;
    this.tamano.set(parseInt(input.value));
  }
  toggleLentes() {
    this.tieneLentes.update((flag) => !flag);
  }
  setExpresion(tipo: number) {
    this.tipoExpresion.set(tipo);
  }
  Nombre(event: Event) {
    const input = event.target as HTMLInputElement;
    this.nombre.set(input.value);
   


  }
  
  toggleGiro() {
    if (this.estaGirando()) {
 
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.estaGirando.set(false);
    } else {
     
      this.estaGirando.set(true);
      this.intervalId = setInterval(() => {
        this.anguloGiro.update((angulo) => (angulo + 2) % 360);
      }, 30);
    }
  }

  



}
