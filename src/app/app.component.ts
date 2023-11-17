import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FruitComponent } from './fruit/fruit.component';
import { PetComponent } from './pet/pet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FruitComponent, PetComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alex';
  public title2:string
  public colors:Array<string>
  public colors2:Array<any>
  wildcard:any
  constructor() {
    console.log(this.title)
    this.title2 = "Cuevas"
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