import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { StarComponent } from "./../shared/star.component";
import { ProductDetailGuard } from "./product-guard.service";

import { ProductService } from "./product.service";

@NgModule({
    imports: [
        FormsModule
        , BrowserModule
        , HttpModule
        , RouterModule.forChild([{ path: "products", component: ProductListComponent },
        { path: "product/:id", canActivate: [ProductDetailGuard], component: ProductDetailComponent }])

    ],
    exports: [],
    declarations: [
        ProductListComponent
        , ProductDetailComponent
        , ProductFilterPipe
        , StarComponent
    ],
    providers: [ProductDetailGuard, ProductService],
})
export class ProductModule { }
