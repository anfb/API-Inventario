import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-equipament',
  templateUrl: './new-equipament.component.html',
})

@NgModule({

})

export class NewEquipamentComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router) { }
  url:string = '';
  tipoModelo: any ='';
  mesAno: any = '';
  modelo: any ='';
  valor: any = '';
  
  ngOnInit() {
  }

  onFileChanged(event) {
    const file = event.target.files[0]

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result.toString();
      }
    }
  }

  onSubmit(){
    
    let data = {
      "modelEquipment" : this.modelo,
      "valEquipment" : this.valor,
      "dtEquipment" : this.mesAno + '-01',
      "typeEquipment" : this.tipoModelo,
      "imageEquipment" : this.url
    }
    this.http.post('http://localhost:4200/api/equipments', data,{
      headers: new HttpHeaders({Accept: 'application/json, */*'}),
      }).subscribe(res => {
        console.log(res);
      });;
      this.router.navigate(['/']);
  }
}
