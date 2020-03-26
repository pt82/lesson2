import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

type Product =
{
  title: string,
  desc: string,
  price: string
}
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,//id тек страницы

  ) { }
product: Product = {
  title: "",
  desc:"",
  price:""
}
  ngOnInit() {
    this.http.get("http://iilinov-n.myjino.ru/products/" + this.route.snapshot.paramMap.get('id'))
    .subscribe((product: Product)=>
    {
      this.product = product
    })
  }

}
