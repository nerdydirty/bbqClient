/**
 * Created by beateullmann on 08.01.17.
 * Beschreibt die Logik der Componente
 */

import { Component, OnInit } from '@angular/core';
import { AlertService } from './shared/alert.service';

@Component({
  moduleId: module.id,
  selector: 'bbq-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent {
  message: any;

  constructor(private alertService: AlertService){}

  ngOnInit(){
    this.alertService.getMessage().subscribe(message => {this.message = message;});
  }
}


