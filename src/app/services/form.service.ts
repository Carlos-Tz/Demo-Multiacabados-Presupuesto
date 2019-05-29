import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Form } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formsList: AngularFireList<any>;
  formObject: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  AddForm(form: Form) {
    this.formsList.push({
      name: form.name,
      order: form.order,
      date: form.date,
      group1: form.group1,
      group1b: form.group1b,
      group1c: form.group1c,
      group1d: form.group1d,
      group2: form.group2,
      group3: form.group3,
      group3b: form.group3b,
      group4: form.group4,
      group5: form.group5
    });
  }

  GetFormsList() {
    this.formsList = this.db.list('forms-list', ref =>
      ref.orderByChild('date')
    );
    return this.formsList;
  }
}
