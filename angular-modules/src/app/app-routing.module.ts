import { HomePageComponent } from "./home-page/home-page.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomePageComponent, pathMatch: "full" },
  {
    path: "about",
    loadChildren: "./about-page/about-page.module#AboutPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
