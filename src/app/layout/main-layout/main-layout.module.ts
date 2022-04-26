import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { HeaderComponentModule } from "src/app/components/header/header.module";
import { HomeComponent } from "src/app/pages/home/home.component";
import { MainLayoutComponent } from "./main-layout.component";

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    }

];


@NgModule({
    declarations: [
        MainLayoutComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HeaderComponentModule
    ],
    exports: [
        MainLayoutComponent,
        RouterModule
    ]
})

export class MainLayoutComponentModule { }