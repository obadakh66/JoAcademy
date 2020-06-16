import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, LoadingController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';
import { ModalPage } from '../result-dialog/result-dialog';

const form_template = [
  {
    "type": "textBox",
    "label": "Name",
  },
  {
    "type": "number",
    "label": "Age"
  },
  {
    "type": "select",
    "label": "favorite book",
    "options": ["Jane Eyre", "Pride and Prejudice", "Wuthering Heights"]
  }
]
@Component({
  selector: 'app-just-cumulator',
  templateUrl: './just-cumulator.page.html',
  styleUrls: ['./just-cumulator.page.scss'],
})
export class JustCumulatorPage implements OnInit {
  calculationType = 1;

  constructor(
    private langService: LanguageService,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) { }
  courses: number[] = [0]
  coursesSum: number[] = []
  hoursSum: number[] = []
  avgResult: any;
  avgType: number;
  ngOnInit() {
    this.dynamicForm = new FormGroup({
      expectedCourseNo0: new FormControl(),
      noOfHoursCourseNo0: new FormControl(),
      statusOfCourseNo0: new FormControl(),
      previousMarkCourseNo0: new FormControl()
    })
  }
  @ViewChild('IonContent') ionContent: IonContent;
  dynamicForm: FormGroup;
  mainNumbersForm: FormGroup = new FormGroup({
    currentGpa: new FormControl('', [Validators.required, Validators.max(4.00)]),
    noOfHoursIncluded: new FormControl('', [Validators.required, Validators.maxLength(3)])
  });

  get currentGpa() {
    return this.mainNumbersForm.get('currentGpa') as FormControl;
  }
  get noOfHoursIncluded() {
    return this.mainNumbersForm.get('noOfHoursIncluded') as FormControl;
  }
  formTemplate: any = form_template;
  addCourse() {
    if (this.courses.length < 9) {
      this.courses.push(this.courses[this.courses.length - 1] + 1)
      for (let i = 1; i < this.courses.length; i++) {
        this.dynamicForm.addControl("expectedCourseNo" + i.toString(), new FormControl('', [Validators.required]))
        this.dynamicForm.addControl("noOfHoursCourseNo" + i.toString(), new FormControl(Validators.required))
        this.dynamicForm.addControl("statusOfCourseNo" + i.toString(), new FormControl())
        this.dynamicForm.addControl("previousMarkCourseNo" + i.toString(), new FormControl())
      }
      this.scrollToBottom()
    }
  }
  scrollToBottom() {
    setTimeout(() => {
      this.ionContent.scrollToBottom(300)
      console.log("ok")
    }, 100);

  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: this.isArabic() ? 'يرجى الإنتظار ...' : 'Please wait...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.presentResult()
  }
  async presentResult() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'result': this.avgResult.toString(),
        'avgType': 2
      }
    });
    modal.onDidDismiss().then(res => {
      console.log(res)
      this.dynamicForm.reset();
      this.mainNumbersForm.reset();
    });
    return await modal.present();
  }

  removeCourse(course) {
    if (this.courses.length > 1) {
      this.courses = this.courses.filter(x => x != course)
      this.dynamicForm.removeControl("expectedCourseNo" + course.toString())
      this.dynamicForm.removeControl("noOfHoursCourseNo" + course.toString())
      this.dynamicForm.removeControl("statusOfCourseNo" + course.toString())
      this.dynamicForm.removeControl("previousMarkCourseNo" + course.toString())
      console.log(this.dynamicForm.value)
    }

  }
  isArabic() {
    return this.langService.isArabic()
  }
  calculate() {
    if (this.calculationType == 2) {
      this.presentLoading();
      Object.keys(this.dynamicForm.controls).forEach(key => {
        if (!this.dynamicForm.get(key).value) {
          this.dynamicForm.get(key).markAsTouched();
        }
      });
      Object.keys(this.mainNumbersForm.controls).forEach(key => {
        if (!this.mainNumbersForm.get(key).value) {
          this.mainNumbersForm.get(key).markAsTouched();
        }
      });
      if (this.dynamicForm.valid && this.mainNumbersForm.valid) {


        console.log(this.dynamicForm.value)
        for (let course = 0; course < this.courses.length; course++) {
          if (this.dynamicForm.controls["statusOfCourseNo" + course].value == true || this.dynamicForm.controls["statusOfCourseNo" + course].value == null) {//new
            let multiplyValue = (this.dynamicForm.controls["expectedCourseNo" + course].value) * (this.dynamicForm.controls["noOfHoursCourseNo" + course].value)
            this.coursesSum.push(multiplyValue)
            this.hoursSum.push(this.dynamicForm.controls["noOfHoursCourseNo" + course].value)
          }
          if (this.dynamicForm.controls["statusOfCourseNo" + course].value == false) {//not new
            let multiplyValue =
              ((this.dynamicForm.controls["expectedCourseNo" + course].value) -
                (this.dynamicForm.controls["previousMarkCourseNo" + course].value)) *
              (this.dynamicForm.controls["noOfHoursCourseNo" + course].value)
            this.coursesSum.push(multiplyValue)
          }
        }
        var totalCourseSum = 0;
        this.coursesSum.forEach(element => {
          totalCourseSum += element;
        });
        var totalHoursSum = 0;
        this.hoursSum.forEach(element => {
          totalHoursSum += element;
        });
        let totalAvg = ((this.currentGpa.value * this.noOfHoursIncluded.value) + totalCourseSum) / (this.noOfHoursIncluded.value + totalHoursSum)
        console.log(totalAvg)
        this.avgResult = totalAvg;
      }
    }
    if (this.calculationType == 1) {
      this.presentLoading();
      Object.keys(this.dynamicForm.controls).forEach(key => {
        if (!this.dynamicForm.get(key).value) {
          this.dynamicForm.get(key).markAsTouched();
        }
      });
      Object.keys(this.mainNumbersForm.controls).forEach(key => {
        if (!this.mainNumbersForm.get(key).value) {
          this.mainNumbersForm.get(key).markAsTouched();
        }
      });
      if (this.dynamicForm.valid) {
        console.log(this.dynamicForm.value)
        for (let course = 0; course < this.courses.length; course++) {
          if (this.dynamicForm.controls["statusOfCourseNo" + course].value == true || this.dynamicForm.controls["statusOfCourseNo" + course].value == null) {//new
            let multiplyValue = (this.dynamicForm.controls["expectedCourseNo" + course].value) * (this.dynamicForm.controls["noOfHoursCourseNo" + course].value)
            this.coursesSum.push(multiplyValue)
            this.hoursSum.push(this.dynamicForm.controls["noOfHoursCourseNo" + course].value)
          }
          if (this.dynamicForm.controls["statusOfCourseNo" + course].value == false) {//not new
            let multiplyValue =
              ((this.dynamicForm.controls["expectedCourseNo" + course].value) -
                (this.dynamicForm.controls["previousMarkCourseNo" + course].value)) *
              (this.dynamicForm.controls["noOfHoursCourseNo" + course].value)
            this.coursesSum.push(multiplyValue)
          }
        }
        var totalCourseSum = 0;
        this.coursesSum.forEach(element => {
          totalCourseSum += element;
        });
        var totalHoursSum = 0;
        this.hoursSum.forEach(element => {
          totalHoursSum += element;
        });
        let totalAvg = (totalCourseSum) / (totalHoursSum)
        console.log(totalAvg)
        this.avgResult = totalAvg;
      }
    }
  }
  checkFormControlValidaty(name, id) {
    let formControl = this.dynamicForm.controls[name + id.toString()];
    if (!formControl.value && formControl.touched) {
      return true;
    }
    return false;
  }
}