import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FamilyService} from '../family.service';

export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  familyForm: FormGroup;
  statuses: Status[] = [
    {value: 'both-0', viewValue: 'Both'},
    {value: 'active-1', viewValue: 'Active'},
    {value: 'closed-2', viewValue: 'Closed'}

  ];

  constructor(private formBuilder: FormBuilder, private familyService: FamilyService) { }

  get familyid() {
    return this.familyForm.get('familyid');
  }

  get CFN() {
    return this.familyForm.get('CFN');
  }
  get familyName() {
    return this.familyForm.get('familyName');
  }
  get CLN() {
    return this.familyForm.get('CLN');
  }
  get firstName() {
    return this.familyForm.get('firstName');
  }
  get lccStaff() {
    return this.familyForm.get('lccStaff');
  }
  get lastName() {
    return this.familyForm.get('lastName');
  }


  ngOnInit() {
    this.familyForm = this.formBuilder.group({
      familyid: [''],
      CFN: [''],
      familyName: [''],
      CLN: [''],
      firstName: [''],
      lccStaff: [''],
      lastName: [''],


    });
  }

}
