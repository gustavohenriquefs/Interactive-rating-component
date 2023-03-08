import { RoundButtonModule } from './../../atoms/round-button/round-button.module';
import { RoundButtonComponent } from './../../atoms/round-button/round-button.component';
import { CardModule } from './../../atoms/card/card.module';
import { CardRatingComponent } from './card-rating.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        CardModule,
        RoundButtonModule
    ],
    declarations: [
        CardRatingComponent
    ],
    exports: [
        CardRatingComponent
    ]
})
export class CardRatingModule {}