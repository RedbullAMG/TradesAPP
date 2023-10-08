import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
    
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
  
  {
    path: 'pmaestro',
    loadChildren: () => import('./pmaestro/pmaestro.module').then( m => m.PmaestroPageModule)
  },
  
  {
    path: 'validacion',
    loadChildren: () => import('./validacion/validacion.module').then( m => m.ValidacionPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'product-add',
    loadChildren: () => import('./producto/product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  {
    path: 'product-all',
    loadChildren: () => import('./producto/product-all/product-all.module').then( m => m.ProductAllPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./producto/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-edit',
    loadChildren: () => import('./producto/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./producto/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-edit/:id',
    loadChildren: () => import('./producto/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./producto/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'cliente-add',
    loadChildren: () => import('./cliente/cliente-add/cliente-add.module').then( m => m.ClienteAddPageModule)
  },
  {
    path: 'cliente-all',
    loadChildren: () => import('./cliente/cliente-all/cliente-all.module').then( m => m.ClienteAllPageModule)
  },
  {
    path: 'cliente-detail',
    loadChildren: () => import('./cliente/cliente-detail/cliente-detail.module').then( m => m.ClienteDetailPageModule)
  },
  {
    path: 'cliente-edit',
    loadChildren: () => import('./cliente/cliente-edit/cliente-edit.module').then( m => m.ClienteEditPageModule)
  },
  {
    path: 'cliente-list',
    loadChildren: () => import('./cliente/cliente-list/cliente-list.module').then( m => m.ClienteListPageModule)
  },

  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
