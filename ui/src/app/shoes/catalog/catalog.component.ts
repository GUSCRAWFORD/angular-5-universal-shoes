import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../shared/shared.module'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private http:Http) { }

  shoes: any[];

  ngOnInit() {
    this.http.get(environment.api+'/shoes')
      .subscribe(shoes=>(this.shoes as any) = shoes.json())
  }

}
