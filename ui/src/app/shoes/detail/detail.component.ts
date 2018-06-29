import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { environment } from '../../shared/shared.module';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http:Http) { }
  shoe = {} as any;
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.http.get(environment.api+'/shoes/'+params.shoeId)
      .subscribe(shoe=>{
        var shoeObj = shoe.json();
        this.shoe = shoeObj;
      })
    })
  }

}
