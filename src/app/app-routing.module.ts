import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'category/:category', component: CategoryComponent },
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: '**', redirectTo: '/gallery' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
