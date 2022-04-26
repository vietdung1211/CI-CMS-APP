import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LogoComponent } from "../builder/logo/logo.component";
import { MenuComponent } from "../builder/menu/menu.component";
import { HeaderComponent } from "./header.component";

@NgModule({
    declarations: [
        HeaderComponent,
        LogoComponent,
        MenuComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [HeaderComponent]

})

export class HeaderComponentModule { }