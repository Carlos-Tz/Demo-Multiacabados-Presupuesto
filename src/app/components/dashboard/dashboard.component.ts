import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  save = 1;
  data_ = false;
  public dtOptions = {};
  constructor(
    public formApi: FormService,
    private location: Location
  ) { }

  ngOnInit() {
    this.formApi.GetFormsList().snapshotChanges().subscribe(data => {
      this.Form = [];
      data.forEach(item => {
        const form_ = item.payload.toJSON();
        form_['$key'] = item.key;
        this.Form.push(form_ as Form);
      });
      this.data_ = true;
    });

    this.dtOptions = {
      dom: 'Bfrtip',
      order: [[0, 'desc']],
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
