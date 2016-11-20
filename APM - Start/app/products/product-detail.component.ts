import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";
    product: IProduct;
    productId: number;

    constructor(private _route: ActivatedRoute,
                private _router: Router) {

    }

    onBack(): void {
        this._router.navigate(["/products"]);
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params["id"];
        console.log(id);
        this.pageTitle += `: ${id}`;
    }

}

