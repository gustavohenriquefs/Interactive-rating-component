import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardThankYouComponent } from './card-thank-you.component';
import { CardModule } from './../../shared/components/atoms/card/card.module';

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