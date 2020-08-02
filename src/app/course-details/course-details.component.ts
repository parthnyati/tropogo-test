import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(
    private router : Router
  ) { }
  courseNameError : boolean = false;
  showErrorAlert : boolean = false;
  showSuccessAlert : boolean = false;
  batchError : boolean = false
  aircraftError : boolean = false;

  courseName;
  selectedItems;
  selectedAircraft
  model : NgbDateStruct
  atleastOneCourse : boolean = false;
  aircraftList=[
    'Multi Rotar',
    'Fixed Wing'
  ]
  courseDetails
  locationList = [
    'Ajmer',
    'Bengaluru',
    'Calcutta',
    'Delhi',
    'Goa',
    'Haryana',
    'Indore',
    'Jharkhand',
    'Karnataka',
    'Kerala'
  ]

  languageList = [
    'Hindi',
    'English',
    'Rajasthani',
    'Punjabi',
    'Urdu',
    'Marathi'
  ]

  courseList = [
    {
      'startDate' : undefined,
      'endDate' : undefined,
      'courseLocation' : undefined,
      'courseLanguages' : [],
      'courseCost': undefined,
      'expand': false,
      'courseNum': 1,
      'hasError': false,
    }
  ]

  actionList = [
    'Reset',
    'Delete'
  ]
  ngOnInit() {
  }

  expand(num){
    this.courseList[num].expand = true;
  }
  collapse(num){
    console.log("collapse")
    this.courseList[num].expand = false;
  }  

  addBatch(){
    let numOfBatches = this.courseList.length;
    let temp = {
      'startDate' : undefined,
      'endDate' : undefined,
      'courseLocation' : undefined,
      'courseLanguages' : [],
      'courseCost': undefined,
      'expand': false,
      'courseNum' : numOfBatches + 1,
      'hasError': false,
    }

    this.courseList.push(temp);
  }

  onActionClick(e,num){
    console.log(e);
    console.log(num);

    if(e.itemData === "Reset"){
      this.courseList[num].startDate = undefined;
      this.courseList[num].endDate = undefined;
      this.courseList[num].courseLocation = undefined;
      this.courseList[num].courseLanguages = [];
      this.courseList[num].courseCost = undefined;
      this.courseList[num].hasError = false;
    }else{
      if(this.courseList.length === 1){
        this.atleastOneCourse = true;
      }
      this.courseList.splice(num,1);
    }
  }

  onClickSave(){ 
    for (let obj of this.courseList){
      if(obj){
        if(obj.startDate && obj.endDate && obj.courseLocation && obj.courseCost && obj.courseLanguages.length!==0){
          obj.hasError = false
          console.log("false")
        }else{
          this.batchError = true
          obj.hasError = true;
          console.log(this.courseList)
        }
      }
    }

    if(this.selectedAircraft){
      this.aircraftError = false
    }else{
      this.aircraftError = true;
    }

    if(this.courseName){
      this.courseNameError = false
    }else{
      this.courseNameError = true;
    }

    if( this.courseNameError || this.aircraftError || this.batchError){
      this.showErrorAlert = true;
      this.showSuccessAlert = false;
    }else{
      this.showSuccessAlert = true
      this.showErrorAlert = false;
    this.disapperAlert();
    }
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

  back(){
    this.router.navigateByUrl("instituteonboarding/institutedetails");
  }
}
