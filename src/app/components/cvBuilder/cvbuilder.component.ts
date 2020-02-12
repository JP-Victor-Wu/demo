import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CVViewDialogComponent } from '../cvViewDialog/cv-view-dialog.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-cvbuilder',
  templateUrl: './cvbuilder.component.html',
  styleUrls: ['./cvbuilder.component.css']
})
export class CVBuilderComponent implements OnInit {
  cvForm: FormGroup;
  skill: FormArray;
  work: FormArray;
  edu: FormArray;
  interest: FormArray;
  reference: FormArray;
  workTasks: FormArray;
  eduInfos: FormArray;

  minDate: Date;
  maxDate: Date;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    ) {
    this.setDateLimit();
  }

  // Sets date limit for datepickers 
  setDateLimit(){
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 45, 0, 1);
    this.maxDate = new Date(currentYear + 2, 11, 31);
  }


  ngOnInit() {
    this.formInit()
  }


  // Initialise entire form (Form group)
  formInit(){
    this.cvForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      perferredName: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      phone: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.email]],
      address: ['', [Validators.minLength(3), Validators.maxLength(30)]],
      linkedin: ['', [Validators.minLength(3), Validators.maxLength(30)]],
      github: ['', [Validators.minLength(8), Validators.maxLength(70)]],
      statement: ['', [Validators.minLength(10), Validators.maxLength(100)]],
      skill: this.formBuilder.array([this.createSkillItem()]),
      work: this.formBuilder.array([this.createworkItem()]),
      edu: this.formBuilder.array([this.createEduItem()]),
      interest: this.formBuilder.array([this.createInterestItem()]),
      reference: this.formBuilder.array([this.createReferenceItem()])
    });
  }

  // Skills form  (Form array)
  createSkillItem(): FormGroup {
    return this.formBuilder.group({
      skillName: ['', [Validators.minLength(3), Validators.maxLength(50)]]
    });
  }

  // Work experience form (Form array)
  createworkItem(): FormGroup {
    return this.formBuilder.group({
      workName: ['', [Validators.minLength(2), Validators.maxLength(30)]],
      workTitle: ['', [Validators.minLength(2), Validators.maxLength(30)]], 
      workStart: '',
      workEnd: '',
      workDescription: ['', [Validators.minLength(3), Validators.maxLength(100)]],
      workOtherExp: ['', [Validators.minLength(3), Validators.maxLength(100)]],
      workTasks: this.formBuilder.array([this.createWorkTasksItem()])
    });
  }
  
  // Education experience form (Form array)
  createEduItem(): FormGroup {
    return this.formBuilder.group({
      eduName: '',
      eduQualification: '', 
      eduStart: '',
      eduEnd: '',
      eduDescription: '',
      eduInfos: this.formBuilder.array([this.createEduInfosItem()])
    });
  }

  // Interst form (Form array)
  createInterestItem(): FormGroup {
    return this.formBuilder.group({
      interestName: '',
      interestDescription: ''
    });
  }

  // Reference form (Form array)
  createReferenceItem(): FormGroup {
    return this.formBuilder.group({
      referenceName: ['', [Validators.minLength(2), Validators.maxLength(40)]],
      referenceTitle: ['', [Validators.minLength(3), Validators.maxLength(60)]],
      referencePhone: '',
      referenceEmail: ['', [Validators.email]]
    });
  }
  

  // Work task form (Form array)
  createWorkTasksItem(): FormGroup {
    return this.formBuilder.group({
      task: ''
    });
  }

  // Education info form (Form array)
  createEduInfosItem(): FormGroup {
    return this.formBuilder.group({
      info: ''
    });
  }


  // Add one skill (button triggered)
  addSkillItem(): void {
    this.skill = this.cvForm.get('skill') as FormArray;
    this.skill.push(this.createSkillItem());
  }

  // Add one work-experience (button triggered)
  addWorkItem(): void {
    this.work = this.cvForm.get('work') as FormArray;
    this.work.push(this.createworkItem());

  }
  // Add one education-experience (button triggered)
  addEduItem(): void {
    this.edu = this.cvForm.get('edu') as FormArray;
    this.edu.push(this.createEduItem());
  }
  
  // Add one interest or other information (button triggered)
  addInterestItem(): void {
    this.interest = this.cvForm.get('interest') as FormArray;
    this.interest.push(this.createInterestItem());
  }

  // Add one reference (button triggered)
  addReferenceItem(): void {
    this.reference = this.cvForm.get('reference') as FormArray;
    this.reference.push(this.createReferenceItem());
  }

  // Add work task item 
  addWorkTaskItem(workItem): void {
    this.workTasks = workItem.get('workTasks') as FormArray;
    this.workTasks.push(this.createWorkTasksItem());
  }

  // Add education information item
  addEduInfoItem(eduItem): void {
    this.eduInfos = eduItem.get('eduInfos') as FormArray;
    this.eduInfos.push(this.createEduInfosItem());
  }




  
  saveForm(): void{
    console.log(this.cvForm)
    localStorage.setItem('cv', JSON.stringify(this.cvForm.value));
  }

  // Open CV view Dialog
  viewCV(){
    let dialogRef = this.dialog.open(CVViewDialogComponent, {
      height: '90%',
      width: '90%',
    });
  }



}