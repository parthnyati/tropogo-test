import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor() { }
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
      'courseNum': 1
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
      'courseNum' : numOfBatches + 1
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
      this.courseList[num].courseLanguages = undefined;
    }else{
      if(this.courseList.length === 1){
        this.atleastOneCourse = true;
      }
      this.courseList.splice(num,1);
    }
  }

}
