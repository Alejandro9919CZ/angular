import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothesService } from '../services/clothes.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  public title: string
  public ClothesArray: Array<any>
  public inputNewClothes: any

  constructor(
    private _clothesService: ClothesService
    ) {
    this.title = "Home"
  }

  ngOnInit() {
    console.log(this._clothesService.test("Gloves"))
    this.ClothesArray = this._clothesService.getClothes()
  }

  addNewClothes() {
    this._clothesService.addClothes(this.inputNewClothes)
    this.inputNewClothes = ""
  }

  deleteClothes(index: number) {
   this._clothesService.deleteClothes(index)
  }
}
