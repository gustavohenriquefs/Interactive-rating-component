import { CardModule } from './../../atoms/card/card.module';
import { CardThankYouComponent } from './card-thank-you.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        CardModule
    ],
    declarations: [
        CardThankYouComponent
    ],
    exports: [
        CardThankYouComponent
    ]
})
export class CardThankYouModule {}