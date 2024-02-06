import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {

  get resultados() {
    return this.gifService.resultados;
  }

  constructor(private gifService: GifsService) { }
}
