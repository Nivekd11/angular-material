import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  rutaImagen:string="holaaaaa"
  peliculas!: any

  constructor(public dialog: MatDialog,public requestPeliculas: PeliculasService) {}

  

  ngOnInit(): void {
    this.requestPeliculas.getMovies().subscribe(response =>{
      console.log(response)
      this.peliculas=response
    })
  }

  openDialog(index : number): void {
    
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '60%',
      data: {
        title: this.peliculas[index].title,
        img: 'https://image.tmdb.org/t/p/w500/' + this.peliculas[index].img,
        date: this.peliculas[index].date,
        popularity: this.peliculas[index].popularity,
        description: this.peliculas[index].description,
        language: this.peliculas[index].language,
        calf: this.peliculas[index].calf,
        banner: this.peliculas[index].banner,
        id: this.peliculas[index].id
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
       
    });
  }

}
