import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { StoreComponent } from "./store";
import { HeaderComponent } from "../menu-header";


@NgModule({
    declarations: [
        StoreComponent
        HeaderComponent

    ]
    imports: [
        BrowserModule,
    ]

    providers: [],
    bootstrap: [StoreComponent]

})

StoreComponent
export class StoreModule { }