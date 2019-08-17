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
  form_ = {
    nombre: '',
    fecha: '',
    orden: '',
    domicilio: '',
    rfc: '',
    ciudad: '',
    anexo: '',
    firma: '',
    hojalateria0: '',
    hojalateria1: '',
    hojalateria2: '',
    hojalateria3: '',
    hojalateria4: '',
    hojalateria5: '',
    hojalateria6: '',
    hojalateria7: '',
    hojalateria8: '',
    hojalateria9: '',
    hojalateria10: '',
    hojalateria11: '',
    hojalateria12: '',
    hojalateria13: '',
    refaccion0: '',
    refaccion1: '',
    refaccion2: '',
    refaccion3: '',
    refaccion4: '',
    refaccion5: '',
    refaccion6: '',
    refaccion7: '',
    refaccion8: '',
    refaccion9: '',
    refaccion10: '',
    refaccion11: '',
    refaccion12: '',
    refaccion13: '',
    pintura0: '',
    pintura1: '',
    pintura2: '',
    pintura3: '',
    pintura4: '',
    pintura5: '',
    pintura6: '',
    pintura7: '',
    pintura8: '',
    pintura9: '',
    pintura10: '',
    pintura11: '',
    pintura12: '',
    pintura13: '',
    desc0: '',
    desc1: '',
    desc2: '',
    desc3: '',
    desc4: '',
    desc5: '',
    desc6: '',
    desc7: '',
    desc8: '',
    desc9: '',
    desc10: '',
    desc11: '',
    desc12: '',
    desc13: '',
    tipo0: '',
    tipo1: '',
    tipo2: '',
    tipo3: '',
    tipo4: '',
    tipo5: '',
    tipo6: '',
    tipo7: '',
    tipo8: '',
    tipo9: '',
    tipo10: '',
    tipo11: '',
    tipo12: '',
    tipo13: '',
    total: 0
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
