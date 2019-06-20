import { Component, OnInit } from '@angular/core';
import * as num from 'written-number';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import 'fecha';
import fechaObj from 'fecha';
import { FormService } from 'src/app/services/form.service';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  myForm1: FormGroup;
  myForm2: FormGroup;
  total = 0;
  totalr = 0;
  iva = 0;
  hojt = 0;
  pint = 0;
  reft = 0;
  myformValuesChanges$;
  numero:  num;
  fecha: string;
  save = 0;
  form_: Form = {
    $key: '',
    nombre: '',
    fecha: '',
    orden: '',
    domicilio: '',
    rfc: '',
    ciudad: '',
    anexo: '',
    firma: '',
    hojalateria0: null,
    hojalateria1: null,
    hojalateria2: null,
    hojalateria3: null,
    hojalateria4: null,
    hojalateria5: null,
    hojalateria6: null,
    hojalateria7: null,
    hojalateria8: null,
    hojalateria9: null,
    hojalateria10: null,
    hojalateria11: null,
    hojalateria12: null,
    hojalateria13: null,
    refaccion0: null,
    refaccion1: null,
    refaccion2: null,
    refaccion3: null,
    refaccion4: null,
    refaccion5: null,
    refaccion6: null,
    refaccion7: null,
    refaccion8: null,
    refaccion9: null,
    refaccion10: null,
    refaccion11: null,
    refaccion12: null,
    refaccion13: null,
    pintura0: null,
    pintura1: null,
    pintura2: null,
    pintura3: null,
    pintura4: null,
    pintura5: null,
    pintura6: null,
    pintura7: null,
    pintura8: null,
    pintura9: null,
    pintura10: null,
    pintura11: null,
    pintura12: null,
    pintura13: null,
    desc0: null,
    desc1: null,
    desc2: null,
    desc3: null,
    desc4: null,
    desc5: null,
    desc6: null,
    desc7: null,
    desc8: null,
    desc9: null,
    desc10: null,
    desc11: null,
    desc12: null,
    desc13: null,
    tipo0: null,
    tipo1: null,
    tipo2: null,
    tipo3: null,
    tipo4: null,
    tipo5: null,
    tipo6: null,
    tipo7: null,
    tipo8: null,
    tipo9: null,
    tipo10: null,
    tipo11: null,
    tipo12: null,
    tipo13: null,
    total: null
  };

  constructor(
    private fb: FormBuilder,
    private fb1: FormBuilder,
    private fb2: FormBuilder,
    private currencyPipe: CurrencyPipe,
    public toastr: ToastrService,
    public formApi: FormService
  ) {  }

  ngOnInit() {
    this.fecha = fechaObj.format(new Date(), 'D [de] MMMM [de] YYYY');
    this.form_.fecha = this.fecha;
    this.formApi.GetFormsList();
    this.sForm();
    this.myForm = this.fb.group({
      units: this.fb.array([
        this.getUnit()
      ])
    });
    this.myformValuesChanges$ = this.myForm.controls['units'].valueChanges;
    this.myformValuesChanges$.subscribe(units => {
      this.updateTotalUnitPrice(units);
      this.form_.total = this.total;
      this.numero =  num(this.total, {lang: 'es'});
      this.numero = this.numero.toString();
      this.numero = this.numero[0].toUpperCase() + this.numero.slice(1);
    });
    this.generRow();
  }

  private generRow() {
    for (let i = 1; i < 20; i++) {
      this.addUnit();
    }
  }

  private getUnit() {
    return this.fb.group({
      hojalateria: [''],
      refaccion: [''],
      pintura: [''],
      subtotal: [''],
      desc: [''],
      tipo: ['']
    });
  }

  private addUnit() {
    const control = <FormArray>this.myForm.controls['units'];
    control.push(this.getUnit());
  }

  getControls(frmGrp: FormGroup, key: string) {
  return (<FormArray>frmGrp.controls[key]).controls;
  }

  private updateTotalUnitPrice(units: any) {
    const control = <FormArray>this.myForm.controls['units'];
    this.totalr = 0;
    this.hojt = 0;
    this.pint = 0;
    this.reft = 0;
    for (let i in units) {
      //let totalUnitPrice = (units[i].hojalateria + units[i].refaccion + units[i].pintura);
      let totalUnitPrice = 0;
      totalUnitPrice += (units[i].hojalateria ? units[i].hojalateria : 0);
      totalUnitPrice += (units[i].refaccion ? units[i].refaccion : 0);
      totalUnitPrice += (units[i].pintura ? units[i].pintura : 0);
      let totalUnitPriceFormatted = this.currencyPipe.transform(totalUnitPrice, 'USD', 'symbol-narrow', '1.2-2');
      
      if(totalUnitPrice != 0)
      control.at(+i).get('subtotal').setValue(totalUnitPriceFormatted, {onlySelf: true, emitEvent: false});
      this.totalr += totalUnitPrice;
      this.hojt += (units[i].hojalateria ? units[i].hojalateria : 0);
      this.pint += (units[i].pintura ? units[i].pintura : 0);
      this.reft += (units[i].refaccion ? units[i].refaccion : 0);
    }
    this.iva = Math.round(this.totalr * 0.16);
    this.total = this.totalr + this.iva;
  }

  ResetForm() {
    this.myForm.reset();
    this.myForm1.reset();
    this.myForm2.reset();
  }

  submitSurveyData = () => {
    this.formApi.AddForm(this.form_);
    this.toastr.success('Guardado!');
    this.ResetForm();
  }

  sForm() {
    this.myForm1 = this.fb1.group({
      nombre: ['', [Validators.required]],
      orden: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      domicilio: ['', [Validators.required]],
      ciudad: [''],
      rfc: ['']
    });
    this.myForm2 = this.fb2.group({
      anexo: ['']
    });
  }

  imgChanged($event) {
    this.form_.firma = $event.target.src;
  }
}
