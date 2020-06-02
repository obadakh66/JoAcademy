import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { LanguageService } from '../services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-average-comulator',
  templateUrl: './average-comulator.page.html',
  styleUrls: ['./average-comulator.page.scss'],
})
export class AverageComulatorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToAhu() {
    this.router.navigate(["/ahu-cumulator"])
  }
}
