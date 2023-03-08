import { RoundButtonModule } from './../../atoms/round-button/round-button.module';
import { CommonModule } from '@angular/common';
import { RatingButtonListComponent } from './rating-button-list.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RatingButtonListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RoundButtonModule
    ],
    exports: [
        RatingButtonListComponent
    ]
})
export class RatingButtonListModule {}