import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { ProfileForm } from '../modules/ProfileForm';
@Component({
  selector: 'app-rct-form',
  templateUrl: './rct-form.component.html',
  styleUrls: ['./rct-form.component.css']
})
export class RctFormComponent implements OnInit {
  profileForm : FormGroup;
  sample: ProfileForm = {
    firstName: 'ABCD',
    lastName: 'String',
    preferredName: 'String',
    phoneNum: 1234567,
    emailAddress: 'String@asd.com',
    phyAddress: 'String',
    linkedinAcc: 'String',
    githubAcc: 'String'
  };
  submitted = false;

  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit() {
    // console.log(this.sample);
    this.createForm();
  }
  
  createForm(){
    this.profileForm = this.fb.group({
      firstName: [this.sample.firstName,[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: [this.sample.lastName,[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      preferredName: [this.sample.preferredName,[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      phoneNum: [this.sample.phoneNum,[Validators.required,Validators.minLength(7),Validators.maxLength(16), Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/)]],
      emailAddress: [this.sample.emailAddress,[Validators.required, Validators.email]],
      phyAddress: [this.sample.phyAddress,[Validators.required, Validators.minLength(2),Validators.maxLength(200)]],
      linkedinAcc: [this.sample.linkedinAcc,[Validators.required, Validators.minLength(2),Validators.maxLength(200)]],
      githubAcc: [this.sample.githubAcc,[Validators.required, Validators.minLength(2),Validators.maxLength(200)]]
    });
  }

  onSubmit(){
    this.sample = this.profileForm.value;
    console.log(this.sample);
    // console.log(this.profileForm.value);
    

  }

}
