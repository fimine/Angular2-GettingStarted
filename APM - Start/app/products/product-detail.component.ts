import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductDetailService } from "./product-detail.service";
import { ProductService } from "./product.service";


@Component({
    moduleId: module.id,
    templateUrl: "product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";
    product: IProduct;
    productId: number;
    errorMessage: any;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productDetailService: ProductDetailService, 
        private _productService : ProductService
    ) {

    }

    onBack(): void {
        this._router.navigate(["/products"]);
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params["id"];
        console.log(id);
        this.pageTitle += `: ${id}`;
        this._productDetailService.getProductDetails(id)
        .subscribe(product => this.product = product, error => this.errorMessage = <any>error);

    }

}

