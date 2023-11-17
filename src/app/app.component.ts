import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

import { FruitComponent } from './fruit/fruit.component';
import { PetComponent } from './pet/pet.component';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car.component';

// import { routing, appRoutingProviders } from './app.routes'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FruitComponent, PetComponent, HomeComponent, CarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alex';
  public title2:any
  public colors:Array<string>
  public colors2:Array<any>
  wildcard:any
  constructor() {
    console.log(this.title)
    this.title2 = new Date().toDateString()
    this.colors = ["blue", "red"]
    this.colors2 = ["white", 12]
    this.wildcard = "Car"    
  }

  ngOnInit() {
    this.tellMeTheWildcard(this.wildcard)
  }
  
  tellMeTheWildcard(wc:any) {  
    console.log(wc)
  }
}