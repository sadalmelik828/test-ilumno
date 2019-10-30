import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';

import { Noticias } from '../../services/noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: Noticias[];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.getNoticias();
  }

  getNoticias(): void {
    this.noticiasService.getNoticias()
        .subscribe(noticias => this.noticias = noticias);
  }

}
