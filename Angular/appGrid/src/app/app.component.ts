import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

interface Element{
  titulo:string;
  subtitulo:string;
  image:string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'appGrid';
  public elementList:Element[]=[];

  ngOnInit(): void {
    this.elementList = [
      {titulo:"video 1", subtitulo:"subtitulo video 1", image:"https://i.pinimg.com/736x/e6/1c/40/e61c403ea83be215eeafbc423a73cf26.jpg"},
      {titulo:"video 2", subtitulo:"subtitulo video 2", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCBCVWr1ETMxmFUMkGNhtMZmACbUrXav_16ZeSaREz26Rn-K-A3J0WsQSS-MqApfDroM&usqp=CAU"},
      {titulo:"video 3", subtitulo:"subtitulo video 3", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWfp5Hm7tdZ1_8XviKfPbi-uM7kRksIcJ-bw3n-juVNIQNDa0gLmpwi_VmJAjD5E12iY&usqp=CAU"},
      {titulo:"video 4", subtitulo:"subtitulo video 4", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEv-jnY2wenPlQQQ7K9lVPqXQbmUZsO8PtA&s"},
      {titulo:"video 5", subtitulo:"subtitulo video 5", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTooH-__a0xqLbO32iP8vzvwPYOGNl6tram1Q&s"},
      {titulo:"video 6", subtitulo:"subtitulo video 6", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZyEX1-v5GibmJmlTMXXI-9hNSq7owQNFvA&s"}
    ]
  }
}
