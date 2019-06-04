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
      nombre: form.nombre,
      fecha: form.fecha,
      orden: form.orden,
      domicilio: form.domicilio,
      rfc: form.rfc,
      ciudad: form.ciudad,
      hojalateria0: form.hojalateria0,
      hojalateria1: form.hojalateria1,
      hojalateria2: form.hojalateria2,
      hojalateria3: form.hojalateria3,
      hojalateria4: form.hojalateria4,
      hojalateria5: form.hojalateria5,
      hojalateria6: form.hojalateria6,
      hojalateria7: form.hojalateria7,
      hojalateria8: form.hojalateria8,
      hojalateria9: form.hojalateria9,
      hojalateria10: form.hojalateria10,
      hojalateria11: form.hojalateria11,
      hojalateria12: form.hojalateria12,
      hojalateria13: form.hojalateria13,
      hojalateria14: form.hojalateria14,
      hojalateria15: form.hojalateria15,
      hojalateria16: form.hojalateria16,
      hojalateria17: form.hojalateria17,
      hojalateria18: form.hojalateria18,
      hojalateria19: form.hojalateria19,
      refaccion0: form.refaccion0,
      refaccion1: form.refaccion1,
      refaccion2: form.refaccion2,
      refaccion3: form.refaccion3,
      refaccion4: form.refaccion4,
      refaccion5: form.refaccion5,
      refaccion6: form.refaccion6,
      refaccion7: form.refaccion7,
      refaccion8: form.refaccion8,
      refaccion9: form.refaccion9,
      refaccion10: form.refaccion10,
      refaccion11: form.refaccion11,
      refaccion12: form.refaccion12,
      refaccion13: form.refaccion13,
      refaccion14: form.refaccion14,
      refaccion15: form.refaccion15,
      refaccion16: form.refaccion16,
      refaccion17: form.refaccion17,
      refaccion18: form.refaccion18,
      refaccion19: form.refaccion19,
      pintura0: form.pintura0,
      pintura1: form.pintura1,
      pintura2: form.pintura2,
      pintura3: form.pintura3,
      pintura4: form.pintura4,
      pintura5: form.pintura5,
      pintura6: form.pintura6,
      pintura7: form.pintura7,
      pintura8: form.pintura8,
      pintura9: form.pintura9,
      pintura10: form.pintura10,
      pintura11: form.pintura11,
      pintura12: form.pintura12,
      pintura13: form.pintura13,
      pintura14: form.pintura14,
      pintura15: form.pintura15,
      pintura16: form.pintura16,
      pintura17: form.pintura17,
      pintura18: form.pintura18,
      pintura19: form.pintura19,
      desc0: form.desc0,
      desc1: form.desc1,
      desc2: form.desc2,
      desc3: form.desc3,
      desc4: form.desc4,
      desc5: form.desc5,
      desc6: form.desc6,
      desc7: form.desc7,
      desc8: form.desc8,
      desc9: form.desc9,
      desc10: form.desc10,
      desc11: form.desc11,
      desc12: form.desc12,
      desc13: form.desc13,
      desc14: form.desc14,
      desc15: form.desc15,
      desc16: form.desc16,
      desc17: form.desc17,
      desc18: form.desc18,
      desc19: form.desc19,
      total: form.total
    });
  }

  GetFormsList() {
    this.formsList = this.db.list('forms-list');
    return this.formsList;
  }

  GetForm(key: string) {
    this.formObject = this.db.object('forms-list/' + key);
    return this.formObject;
  }
}
