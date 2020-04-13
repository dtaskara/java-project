import { Component, OnInit } from '@angular/core';
import {Dress} from '../dress-list/dress';
import {DressService} from '../../services/dress.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-dress',
  templateUrl: './edit-dress.component.html',
  styleUrls: ['./edit-dress.component.css']
})
export class EditDressComponent implements OnInit {

  dress: Dress;
  dressId: string;
  submitted = false;

  constructor(
    private _dressService: DressService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.dressId = params['id'];
      this.loadDress();
    });
  }

  loadDress(): void {
    this._dressService.getDress(parseInt(this.dressId)).subscribe((res: any) => {
      this.dress = res;
    });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this._dressService.updateDress(this.dress)
      .subscribe(data => console.log(data), error => console.log(error));
  }
}
