import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/DataService.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  images: any[] = [];
  favoriteImages: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getImages().subscribe(data => {
      this.images = data;
      this.loadFavorites();
    });
  }

  private loadFavorites(): void {
    const savedFavorites = localStorage.getItem('favorites');   

    console.log(savedFavorites);
    
    if (savedFavorites) {
      const favoriteIds = JSON.parse(savedFavorites);
      this.favoriteImages = this.images.filter(image => favoriteIds.includes(image.id));
    }
  }
}
