import { Component, OnInit } from '@angular/core';
import * as num from 'written-number';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import 'fecha';
import fechaObj from 'fecha';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  total = 0;
  myformValuesChanges$;
  numero:  num;
  fecha: string;

  constructor(
    private fb: FormBuilder,
    private currencyPipe: CurrencyPipe,
    public toastr: ToastrService,
    public formApi: FormService
  ) {  }

  ngOnInit() {
    this.fecha = fechaObj.format(new Date(), 'D [de] MMMM [de] YYYY');
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
      qty: [''],
      price: [''],
      subtotal: ['']
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
    this.total = 0;
    for (let i in units) {
      let totalUnitPrice = (units[i].qty*units[i].price);
      let totalUnitPriceFormatted = this.currencyPipe.transform(totalUnitPrice, 'USD', 'symbol-narrow', '1.2-2');
      if(totalUnitPrice != 0)
      control.at(+i).get('subtotal').setValue(totalUnitPriceFormatted, {onlySelf: true, emitEvent: false});
      this.total += totalUnitPrice;
    }
  }

  ResetForm() {
    this.myForm.reset();
  }

  submitSurveyData = () => {
    this.formApi.AddForm(this.myForm.value);
    this.toastr.success('Encuesta Enviada!');
    this.ResetForm();
  }

  sForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      order: ['', [Validators.required]],
      question1: ['', [Validators.required]],
      question2: ['', [Validators.required]],
      question3: ['', [Validators.required]],
      question4: [''],
      question5: ['', [Validators.required]],
      question6: [''],
      question7: ['', [Validators.required]],
      question8: [''],
      fecha: ['']
    });
  }
}
