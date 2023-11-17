// import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetComponent } from './pet/pet.component';
import { FruitComponent } from './fruit/fruit.component';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'pet', component: PetComponent},
    {path: 'fruit', component: FruitComponent},
    {path: 'car', component: CarComponent},
    {path: 'car/:id', component: CarComponent},
    {path: '**', component: HomeComponent}
];

// export const appRoutingProviders: any[] = [];

// export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
