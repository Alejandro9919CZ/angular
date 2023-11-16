import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [CommonModule],
  // template: `
  //   <h2>{{title}}</h2>
  //   <p>Orange, Apple</p>`,
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.css'
})
export class FruitComponent {
  public title = "Fruit component"

}
