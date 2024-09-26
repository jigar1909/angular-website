import { Component,OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { products } from './productdata';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productList: any[] = []; 
  constructor(private router: Router) {}

  ngOnInit() {
    this.productList = products;
  }
  goToProductDetail(productId: number) {
    this.router.navigate(['/products/', productId]);
  }
}
