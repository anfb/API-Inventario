import { Component, OnInit } from '@angular/core';
import sampleData from '../../assets/data.json';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, public _DomSanitizer: DomSanitizer) {}

  Produtos: any;

  ngOnInit() {
    this.http.get('http://localhost:4200/api/equipments', {
      headers: new HttpHeaders({Accept: 'application/json, */*'})
      }).subscribe(res => {
        console.log(res);
        this.Produtos = res;
      });
  }

  delete(item){
    this.http.delete('http://localhost:4200/api/equipments/' + item.codeEquipment,{
      headers: new HttpHeaders({Accept: 'application/json, */*'}),
      }).subscribe(res => {
      });;
      window.location.reload();
  }

  showEquipment(id){
    this.router.navigate(['/show/' + id]);
  }
}
