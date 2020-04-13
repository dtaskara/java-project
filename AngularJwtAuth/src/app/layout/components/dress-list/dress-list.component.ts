import { DressDetailsComponent } from '../dress-details/dress-details.component';
import { Observable } from 'rxjs';
import { Dress } from './dress';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DressService} from '../../services/dress.service';

@Component({
  selector: 'app-dress-list',
  templateUrl: './dress-list.component.html',
  styleUrls: ['./dress-list.component.css']
})
export class DressListComponent implements OnInit {
  dresses: Observable<Dress[]>;
  totalSize: number;
  pageCount: number[] = [];
  selectedPage: number;

  constructor(private dressService: DressService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.dressService.getDressList().subscribe((res) => {
      this.totalSize = res.length;
      const count = this.totalSize % 5;
      for (let i = 0; i < count; i++) {
        this.pageCount[i] = i + 1;
      }
      console.log('pageCount', this.pageCount.length);
      this.selectedPage = 1;
    });
    this.dresses = this.dressService.getDressListByPage(0, 5);
  }

  loadData(page: number): void {
    this.selectedPage = page - 1;
    this.dresses = this.dressService.getDressListByPage(page - 1, 5);
  }

  deleteDress(id: number) {
    this.dressService.deleteDress(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
