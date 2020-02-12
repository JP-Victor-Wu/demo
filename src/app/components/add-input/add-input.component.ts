import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.css']
})
export class AddInputComponent implements OnInit {
  inputForm : FormGroup;
  
  constructor(private fb: FormBuilder) { 
    const records = [];
    records.push(this.fb.group({
      record: new FormControl('')
    }));
    this.inputForm = this.fb.group({
      details: this.fb.array(records)
    });
  }

  ngOnInit() {
    
  }
  add() {
    const details = this.inputForm.get('details') as FormArray;
    details.push(this.createItem());
  }
  createItem(): FormGroup {
    return this.fb.group({
      record: []
    });
  }
  remove(index) {
    const details = this.inputForm.get('details') as FormArray;
    details.removeAt(index);
  }
}
