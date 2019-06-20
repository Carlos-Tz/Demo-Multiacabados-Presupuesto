import { Component, OnInit } from '@angular/core';

/* import { AuthService } from '../../shared/auth.service'; */
import { Observable } from 'rxjs';
//import { ActivatedRoute } from '@angular/router';
//import 'fecha';
//import fechaObj from 'fecha';
import { Location } from '@angular/common';
import { FormService } from 'src/app/services/form.service';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Form: Form[];
  
  //fecha = '';
  save = 2;
  public dtOptions = {};
  //surveys = [];
  constructor(
    public formApi: FormService,
   // private actRouter: ActivatedRoute,
    private location: Location/* ,
    public authService: AuthService */
  ) { }

  ngOnInit() {
   // this.fecha = fechaObj.format(new Date(), 'D [de] MMMM [de] YYYY');
   // this.key = this.actRouter.snapshot.paramMap.get('key');
    /* this.dataSource = this.surveyApi.getAll(this.key);
    this.surveyApi.getCurrentData(this.key).valueChanges().subscribe(data => {
      this.currentData = data;
    }); */

    this.formApi.GetFormsList().snapshotChanges().subscribe(data => {
      this.Form = [];
      data.forEach(item => {
        let form_ = item.payload.toJSON();
        form_['$key'] = item.key;
        this.Form.push(form_ as Form);
      //  this.l1.push(form_);
      });
      //this.data_ = true;
    });

    this.dtOptions = {
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        /* {
          extend: 'print',
          title: 'Hazlo Volkswagen a ' + this.fecha,
          text: 'Imprimir tabla'
        },
        {
          extend: 'excel',
          title: 'Hazlo Volkswagen a ' + this.fecha,
          text: 'Exportar a Excel'
        } */
      ],
      language: {
        paginate: {
            first:    '«',
            previous: '‹',
            next:     '›',
            last:     '»'
        },
        aria: {
            paginate: {
                first:    'Primero',
                previous: 'Anterior',
                next:     'Siguiente',
                last:     'Último'
            }
        },
        info: 'Mostrando _START_ a _END_ de _TOTAL_ entradas',
        search: 'Buscar',
        emptyTable: ' '
      },
      info: false
    };
  }


  goBack = () => {
    this.location.back();
  }
}
