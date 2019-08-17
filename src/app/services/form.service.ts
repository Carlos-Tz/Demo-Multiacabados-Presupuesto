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

  AddForm(form: object) {
    this.formsList.push(form as Form
      /* {
      nombre: form.nombre,
      fecha: form.fecha,
      orden: form.orden,
      domicilio: form.domicilio,
      rfc: form.rfc,
      ciudad: form.ciudad,
      anexo: form.anexo,
      firma: form.firma,
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
      tipo0: form.tipo0,
      tipo1: form.tipo1,
      tipo2: form.tipo2,
      tipo3: form.tipo3,
      tipo4: form.tipo4,
      tipo5: form.tipo5,
      tipo6: form.tipo6,
      tipo7: form.tipo7,
      tipo8: form.tipo8,
      tipo9: form.tipo9,
      tipo10: form.tipo10,
      tipo11: form.tipo11,
      tipo12: form.tipo12,
      tipo13: form.tipo13,
      total: form.total
    } */
    );
  }

  GetFormsList() {
    this.formsList = this.db.list('forms-list');
    return this.formsList;
  }

  GetForm(key: string) {
    this.formObject = this.db.object('forms-list/' + key);
    return this.formObject;
  }

  UpdateForm(form: Form, key: string) {
    this.db.object('forms-list/' + key)
    .update(form);
  }
}
