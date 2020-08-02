import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institute-details',
  templateUrl: './institute-details.component.html',
  styleUrls: ['./institute-details.component.css']
})
export class InstituteDetailsComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  url;
  brochureList = [];
  certificationList = []
  courseList = [];
  showAlert : boolean = false;
  logoError : boolean = false;
  courseError : boolean = false;
  iNameError : boolean = false;
  instituteName;
  showErrorAlert : boolean = false;
  showSuccessAlert : boolean = false;

  ngOnInit() {
    this.brochureList = [];
    this.certificationList = [];
    this.courseList = [];
  }

  onLogoChange(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 

      reader.onload = (event) => {
        this.url = reader.result;
      }
    }
  }

  onBrochureChange(event){
    for(let obj of event.target.files){
      this.brochureList.push(obj.name)
    }
  }

  removeBrochure(e){
    for(let i = 0; i<this.brochureList.length; i++){
      if(this.brochureList[i] === e){
        this.brochureList.splice(i,1);
      }
    }
  }

  onCertificateChange(event){
    for(let obj of event.target.files){
      this.certificationList.push(obj.name)
    }
  }

  removeCertificate(e){
    for(let i = 0; i<this.certificationList.length; i++){
      if(this.certificationList[i] === e){
        this.certificationList.splice(i,1);
      }
    }
  }

  onCourseChange(event){
    for(let obj of event.target.files){
      this.courseList.push(obj.name);
    }
  }

  removeCourse(e) {
    for(let i = 0; i<this.certificationList.length; i++){
      if(this.courseList[i] === e){
        this.courseList.splice(i,1);
      }
    }
  }

  onClickNext(){
    if(this.url){
      this.logoError =false
    }else{
      this.logoError = true;
    }

    if(this.courseList.length === 0){
      this.courseError = true;
    }
    else{
      this.courseError =false;
    }

    if(this.instituteName && this.instituteName !== ''){
      this.iNameError = false;
    }else{
      this.iNameError = true;
    }

    if(this.courseError || this.iNameError || this.logoError){
      this.showErrorAlert = true;
      this.showSuccessAlert = false;
    }else{
      this.showSuccessAlert = true
      this.showErrorAlert = false;
      setTimeout(() => {
        this.router.navigateByUrl("instituteonboarding/coursedetails");
      }, 1000);
      }
    this.disapperAlert();
  }

  disapperAlert(){
    setTimeout(() => {
        this.closeAlert();
    }, 2500);
  }

  closeAlert(){
    this.showErrorAlert = false;
    this.showSuccessAlert = false
  }

}
