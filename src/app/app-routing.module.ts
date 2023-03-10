import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CardRatingComponent } from './pages/card-rating/card-rating.component';
import { CardThankYouComponent } from './pages/card-thank-you/card-thank-you.component';

const routes: Routes = [{ 
  path: 'rating', 
  component: CardRatingComponent
}, { 
  path: 'thank-you/:rating', 
  component: CardThankYouComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: '/rating'
}, {
  path: '**',
  redirectTo: '/rating',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
