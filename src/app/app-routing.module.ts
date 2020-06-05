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
  { path: 'ahu-cumulator', loadChildren: './cumulators/ahu-cumulator/ahu-cumulator.module#AhuCumulatorPageModule' },
  { path: 'uoj-cumulator', loadChildren: './cumulators/uoj-cumulator/uoj-cumulator.module#UojCumulatorPageModule' },
  { path: 'hu-cumulator', loadChildren: './cumulators/hu-cumulator/hu-cumulator.module#HuCumulatorPageModule' },
  { path: 'just-cumulator', loadChildren: './cumulators/just-cumulator/just-cumulator.module#JustCumulatorPageModule' },
  { path: 'yu-cumulator', loadChildren: './cumulators/yu-cumulator/yu-cumulator.module#YuCumulatorPageModule' },
  { path: 'aabu-cumulator', loadChildren: './cumulators/aabu-cumulator/aabu-cumulator.module#AabuCumulatorPageModule' },
  { path: 'psut-cumulator', loadChildren: './cumulators/psut-cumulator/psut-cumulator.module#PsutCumulatorPageModule' },
  { path: 'bau-cumulator', loadChildren: './cumulators/bau-cumulator/bau-cumulator.module#BauCumulatorPageModule' },
  { path: 'mutah-cumulator', loadChildren: './cumulators/mutah-cumulator/mutah-cumulator.module#MutahCumulatorPageModule' },
]; 

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
