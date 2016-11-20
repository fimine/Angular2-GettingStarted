import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/find";

@Injectable()
export class ProductDetailService {
    private _productUrl: string = "api/products/products.json";


    constructor(private _http: Http) { }

    getProductDetails(id: number): Observable<IProduct> {

        console.log("getProductDetailsCalled");
        console.log(id);
        let resp = this._http.get(this._productUrl);
        let products = resp.map((response: Response) => <IProduct[]>response.json());
        let product = products.map((products: IProduct[]) => products.find(p => p.productId === id));

        return product;

    }

}
