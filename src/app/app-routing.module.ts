import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'avg-comulator',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  }, 
  {
    path: 'avg-comulator',
    loadChildren: './average-comulator/average-comulator.module#AverageComulatorPageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'average-comulator', loadChildren: './average-comulator/average-comulator.module#AverageComulatorPageModule' },
  { path: 'header', loadChildren: './header/header.module#HeaderPageModule' },
  { path: 'ahu-cumulator', loadChildren: './cumulators/ahu-cumulator/ahu-cumulator.module#AhuCumulatorPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
