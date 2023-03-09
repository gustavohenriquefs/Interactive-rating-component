import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "src/app/shared/components/atoms/button/button.module";
import { CardModule } from "src/app/shared/components/atoms/card/card.module";
import { IconBoxModule } from "src/app/shared/components/atoms/icon-box/icon-box.module";
import { RoundButtonModule } from "src/app/shared/components/atoms/round-button/round-button.module";
import { RatingButtonListModule } from "src/app/shared/components/molecules/rating-button-list/rating-button-list.module";
import { CardRatingComponent } from "./card-rating.component";

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