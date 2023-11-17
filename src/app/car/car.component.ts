import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  public param: any;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}
  
  ngOnInit() {
    this._route.params.forEach((params: Params)=>{
      this.param = params['id']
    })
  }

  redirect() {
    this._router.navigate(['/car', '2'])
  }

  redirectHome() {
    this._router.navigate(['/home'])
  }

}
