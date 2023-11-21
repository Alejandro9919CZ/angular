import { Injectable } from "@angular/core";

@Injectable()
export class ClothesService{
    public clothes1 = "Shoes"
    public clothesArray = ["Short", "T-Shirt"]

    test(clothes2: any) {
        // return this.clothes1
        return clothes2
    }

    addClothes(newClothes: any): Array<any> {
        this.clothesArray.push(newClothes)
        return this.getClothes()
    }

    getClothes(): Array<any> {
        return this.clothesArray
    }

    deleteClothes(index: number) {
        this.clothesArray.splice(index, 1)
        return this.getClothes()
    }
}