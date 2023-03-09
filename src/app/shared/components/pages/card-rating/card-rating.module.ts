import { ButtonModule } from './../../atoms/button/button.module';
import { RatingButtonListModule } from './../../molecules/rating-button-list/rating-button-list.module';
import { RoundButtonModule } from './../../atoms/round-button/round-button.module';
import { CardModule } from './../../atoms/card/card.module';
import { CardRatingComponent } from './card-rating.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        RoundButtonModule,
        ButtonModule,
        RatingButtonListModule,
        CardModule
    ],
    declarations: [
        CardRatingComponent
    ],
    exports: [
        CardRatingComponent,
    ]
})
export class CardRatingModule {}