import { ButtonModule } from './shared/components/atoms/button/button.module';
import { CardThankYouComponent } from '../app/pages/card-thank-you/card-thank-you.component';
import { CardRatingComponent } from '../app/pages/card-rating/card-rating.component';
import { IconBoxModule } from 'src/app/shared/components/atoms/icon-box/icon-box.module';
import { RoundButtonModule } from './shared/components/atoms/round-button/round-button.module';
import { RatingButtonListModule } from './shared/components/molecules/rating-button-list/rating-button-list.module';
import { CardModule } from './shared/components/atoms/card/card.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    CardRatingComponent,
    CardThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    RatingButtonListModule,
    RoundButtonModule,
    IconBoxModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
