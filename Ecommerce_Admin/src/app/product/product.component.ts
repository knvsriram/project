import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  addProductForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.pattern(/^[0-9]$/), Validators.required]],
    discountingPercentage: ['', [Validators.pattern(/^[0-9]$/), Validators.required, Validators.min(0),Validators.max(100)]],
    rating: ['', [Validators.pattern(/^[0-9]$/), Validators.required,Validators.min(0),Validators.max(5)]],
    stock: ['', [Validators.pattern(/^[0-9]$/), Validators.required]],
    brand: ['', [Validators.required]],
    category: ['', [Validators.required]],
    thumbnail: ['', [Validators.required]],
    images: ['', [Validators.required]],
    pngIcon: ['', [Validators.required]],
  })

  disableSubmit = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  g() {
    return this.addProductForm.controls;
  }

  addproduct() {
  }
}