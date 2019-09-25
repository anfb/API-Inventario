import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-equipament',
  templateUrl: './show-equipament.component.html'
})
export class ShowEquipamentComponent implements OnInit {

  equipment: any;
  id: any
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.route.params.subscribe( params => this.id = params.id );
    this.http.get('http://localhost:4200/api/equipments/' + this.id, {
      headers: new HttpHeaders({Accept: 'application/json, */*'})
      }).subscribe(res => {
        console.log(res)
        this.equipment = res;
      });
  }

}
