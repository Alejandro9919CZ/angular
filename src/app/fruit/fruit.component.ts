import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PetComponent } from '../pet/pet.component';

import { Fruit } from './fruit';

@Component({
  selector: 'fruit',
  standalone: true,
  imports: [CommonModule, FormsModule, PetComponent],
  // template: `
  //   <h2>{{title}}</h2>
  //   <p>Orange, Apple</p>`,
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.css'
})
export class FruitComponent {
  public title = "Fruit component"
  public fruit: Fruit;
  public fruits:Array<Fruit>
  public expired:boolean
  public color:string
  public selectedColor:string

  constructor(){
    this.fruit = new Fruit("Lemon", 5)
    this.fruits = [new Fruit("Coconut", 7), new Fruit("Pineapple", 3)]
    this.expired = true
    this.color = "red"
    // try blue or red
    this.selectedColor = "lightgray"
  }

  ngOnInit(){
    console.log(this.fruit)
  }

  changeExpired(value:boolean) {
    this.expired = value
  }

  logColor() {
    console.log(this.selectedColor)
  }
}
