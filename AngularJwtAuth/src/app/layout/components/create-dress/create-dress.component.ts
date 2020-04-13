import { Component, OnInit } from '@angular/core';
import {Dress} from '../dress-list/dress';
import {DressService} from '../../services/dress.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-dress.component.html',
  styleUrls: ['./create-dress.component.css']
})
export class CreateDressComponent implements OnInit {

  dress: Dress = new Dress();
  submitted = false;

  constructor(private dressService: DressService) { }

  ngOnInit() {
  }

  newDress(): void {
    this.submitted = false;
    this.dress = new Dress();
  }

  save() {
    this.dressService.createDress(this.dress)
      .subscribe(data => console.log(data), error => console.log(error));
    this.dress = new Dress();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
