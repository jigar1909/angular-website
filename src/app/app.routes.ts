import { Routes } from '@angular/router';
import { ContactFormComponent } from '../contact/contact-form/contact-form.component';
import { HomeComponent } from '../Home/home/home.component';
import { ProductListComponent } from '../Products/product-list/product-list.component';
import { ProductDetailComponent } from '../Products/product-detail/product-detail.component';
// import { AboutComponent } from '../about/about/about.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Home page",
    },
    {
        path: "about",
        loadComponent: () => import('../about/about/about.component').then(mod => mod.AboutComponent),
        title: "About page",
    },
    {
        path: "contact",
        component: ContactFormComponent,
        title: "Contact",
    },
    {
        path: "products",
        component: ProductListComponent,
        title: "Product Listing Page",
    },
    {
        path: "products/:id",  
        component: ProductDetailComponent,
        title: "Product Detail Page"
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    }
];
