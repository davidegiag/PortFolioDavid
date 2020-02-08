import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule

} from '@angular/material';




@NgModule({
    imports: [
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatIconModule,
        MatTooltipModule,
        MatDialogModule
     ],
    exports: [
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatIconModule,
        MatTooltipModule,
        MatDialogModule
    ],
    providers: [],
})
export class SharedComponents {}