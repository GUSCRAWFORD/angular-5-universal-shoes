import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private http:Http) { }

  shoes: any[];

  ngOnInit() {
    this.http.get('http://localhost:4000/api/shoes')
      .subscribe(shoes=>(this.shoes as any) = shoes.json())
  }

}
