import { ButtonModule } from './../../atoms/button/button.module';
import { RatingButtonListModule } from './../../molecules/rating-button-list/rating-button-list.module';
import { RoundButtonModule } from './../../atoms/round-button/round-button.module';
import { CardModule } from './../../atoms/card/card.module';
import { CardRatingComponent } from './card-rating.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { IconBoxModule } from '../../atoms/icon-box/icon-box.module';

@NgModule({
    imports: [
        CommonModule,
        RoundButtonModule,
        ButtonModule,
        RatingButtonListModule,
        CardModule,
        IconBoxModule
    ],
    declarations: [
        CardRatingComponent
    ],
    exports: [
        CardRatingComponent,
    ]
})
export class CardRatingModule {}