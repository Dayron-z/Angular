import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/DataService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  images: any[] = [];
  favoriteIds: number[] = [];
  category: string = '';

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.category = params.get('category') || ''; //--> Estamos obteniendo la ruta dinámica
      this.loadImagesByCategory();
    });
  }
  //Filtramos la data
  loadImagesByCategory(): void {
    this.dataService.getImages().subscribe(data => {
      this.images = data.filter(image => image.category.toLowerCase() === this.category.toLowerCase());
    });
  }
}
