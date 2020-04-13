import { Dress } from '../dress-list/dress';
import { Component, OnInit, Input } from '@angular/core';
import { DressListComponent } from '../dress-list/dress-list.component';
import {DressService} from '../../services/dress.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './dress-details.component.html',
  styleUrls: ['./dress-details.component.css']
})
export class DressDetailsComponent implements OnInit {

  @Input() dress: Dress;

  constructor(private dressService: DressService, private listComponent: DressListComponent) { }

  ngOnInit() {
  }

}
