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
  navigateToUoj() {
    this.router.navigate(["/uoj-cumulator"])
  }
  navigateToHu() {
    this.router.navigate(["/hu-cumulator"])
  }
  navigateToJust() {
    this.router.navigate(["/just-cumulator"])
  }
  navigateToYu() {
    this.router.navigate(["/yu-cumulator"])
  }
  navigateToAabu() {
    this.router.navigate(["/aabu-cumulator"])
  }
  navigateToPsut() {
    this.router.navigate(["/psut-cumulator"])
  }
 navigateToBau() {
    this.router.navigate(["/bau-cumulator"])
  }
navigateToMutah() {
    this.router.navigate(["/mutah-cumulator"])
  }
}
