import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DeezerService } from './services/deezer.service';
import { Track } from './models/track';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  pesquisa: string;
  title = 'deezer-front';
  columnsToDisplay = ['img_album', 'nome_album','title','artista', 'rank', 'link'];
  musicas: MatTableDataSource<any>; //Track[];
  showTable: boolean = false;

  @ViewChild(MatSort, null) sort: MatSort;

  constructor(private deezerService: DeezerService) {}

  ngAfterViewInit() {
    
  }

  goToLink(link) {
    window.open(link, '_blank');
  }

  getTrack(){
    this.showTable = true;
    this.deezerService.getTrack(this.pesquisa).subscribe((musicas: any) => {
      this.musicas = new MatTableDataSource(musicas.data);
      this.musicas.sort = this.sort;
    });
  }

}
