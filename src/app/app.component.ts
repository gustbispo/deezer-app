import { Component } from '@angular/core';
import { DeezerService } from './services/deezer.service';
import { Track } from './models/track';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pesquisa: string;
  title = 'deezer-front';
  columnsToDisplay = ['img_album','title','artista', 'rank', 'link',];
  // musicas = [
  //   { capa: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg', artista: '2001', rank: '1205', link: 'https://www.deezer.com/track/1109731%22'},
  // ];
  musicas: Track[];

  constructor(private deezerService: DeezerService) {}

  goToLink(link) {
    window.open(link, '_blank');
  }

  getTrack(){
    this.deezerService.getTrack(this.pesquisa).subscribe((musicas: Track[]) => {
      this.musicas = musicas;
    });
  }

}
