import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product-list/productdata';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    const numericProductId = productId ? +productId : null;
    
    if (numericProductId !== null) {
      this.product = products.find(p => p._id === numericProductId);
    }
  }
}
