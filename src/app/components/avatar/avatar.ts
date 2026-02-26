import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class AvatarComponent {
  colorFondo = signal<string>('#3498db');

  tamaño = signal<number>(150);

  tieneLentes = signal<boolean>(false);

  tipoExpresion = signal<number>(1);

  cambiarTamaño(event: Event) {
    const input = event.target as HTMLInputElement;
    this.tamaño.set(parseInt(input.value));
  }
  cambiarColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
  }

  toggleLentes() {
    this.tieneLentes.update((flag) => !flag);
  }

  setExpresion(tipo: number) {
    this.tipoExpresion.set(tipo);
  }
}
