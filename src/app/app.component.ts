import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/services/DataService.service';
import { Image } from '../app/Image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images: Image[] = [];
  categoriesList  : string[] = ["Arquitectura", "Naturaleza", "Ciudad"];
  favoriteIds: number[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getImages().subscribe(data => {
      this.images = data;
      this.loadFavorites();
    });
  }

  private loadFavorites(): void {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favoriteIds = JSON.parse(savedFavorites);
    }
  }
}
