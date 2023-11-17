import { Component } from "@angular/core"

@Component({
    selector: "pet",
    standalone: true,
    templateUrl: "./pet.component.html"
})

export class PetComponent {
    public name = "Yellow"
}