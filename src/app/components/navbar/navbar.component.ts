import { Component, OnInit, Input, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import 'materialize-css';
import * as M from 'materialize-css/dist/js/materialize';
//import { MaterializeAction } from 'angular2-materialize';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() public submitSurveyData: any;
  @Input() public myForm1: FormGroup;
  @Input() public save: number;
  @Input() public goBack: any;
  //@ViewChild('modal') modal: ElementRef;
  //modalActions = new EventEmitter<string>();


  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

 /*  ngAfterViewInit() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  } */
}
