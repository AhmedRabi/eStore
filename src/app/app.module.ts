import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";

import { PriceFilterPipe } from "./price-filter.pipe";
import { CategoryFilterPipe } from "./category-filter.pipe";
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { ItemCardComponent } from "./item-card/item-card.component";
import { ItemDetailsCardComponent } from "./item-details-card/item-details-card.component";
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "detail/:id", component: ItemDetailsComponent },
  { path: "about", component: AboutComponent },
  { path: "cart", component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PriceFilterPipe,
    CategoryFilterPipe,
    ItemDetailsComponent,
    ItemCardComponent,
    ItemDetailsCardComponent,
    CartComponent,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
