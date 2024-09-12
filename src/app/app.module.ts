import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [	
    AppComponent,
    GalleryComponent,
    FavoritesComponent,
    ImageDetailsComponent,
      CategoryComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
