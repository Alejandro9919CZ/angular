import { Injectable } from "@angular/core";

@Injectable()
export class ClothesService{
    public clothes1 = "Shoes"

    test() {
        return this.clothes1
    }
}