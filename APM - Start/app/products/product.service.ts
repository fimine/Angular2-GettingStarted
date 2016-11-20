import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { Http, Response } from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";


@Injectable()
export class ProductService {

private _productUrl: string = "api/products/products.json";


getProducts() : Observable<IProduct[]> {

let resp =  this._http.get(this._productUrl);
let ret = resp.map((response: Response) => <IProduct[]>response.json())
.do(data => console.log("All: " + JSON.stringify(data)))
.catch(this.handleError);
return ret;
}

private handleError(error: Response)   {
console.error(error);
return Observable.throw(error.json().error || "Server error");
}

    constructor(private _http: Http) { }
}
