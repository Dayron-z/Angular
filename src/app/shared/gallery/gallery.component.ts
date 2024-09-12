import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../services/DataService.service';
import { ImageDetailsComponent } from '../../image-details/image-details.component';
import { Image } from '../../Image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images: any[] = [];
  @Input() favoriteIds: number[] = [];

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dataService.getImages().subscribe(data =>{
      this.images = data;
    })
    this.loadFavorites();
  }

  toggleFavorite(imageId: number): void {
    const index = this.favoriteIds.indexOf(imageId);
    if (index > -1) {
      this.favoriteIds.splice(index, 1);
    } else {
      this.favoriteIds.push(imageId);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favoriteIds));
  }

  isFavorite(imageId: number): boolean {
    return this.favoriteIds.includes(imageId);
  }

  openImageDetails(image: Image): void {
    const modalRef = this.modalService.open(ImageDetailsComponent, { ariaLabelledBy: 'imageDetailsModalLabel' });
    modalRef.componentInstance.selectedImage = image;
  }

  private loadFavorites(): void {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favoriteIds = JSON.parse(savedFavorites);
    }
  }
}
