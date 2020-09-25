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
  musicas: Track[];

  constructor(private deezerService: DeezerService) {}

  goToLink(link) {
    window.open(link, '_blank');
  }

  getTrack(){
    this.deezerService.getTrack(this.pesquisa).subscribe((musicas: any) => {
      this.musicas = musicas.data;
    });
  }

}
