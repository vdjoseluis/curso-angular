import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', [Validators.required]],
    wantsNotifications: [true, [Validators.required]],
    termsAndConditions: [false, [Validators.requiredTrue]]
  })

  public person = {
    gender: 'F',
    wantsNotifications: false
  }

  constructor(private fb: FormBuilder, private validatorsService: ValidatorsService) { }
  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  // (ngSubmit)
  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    };

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
    console.log(this.myForm.value);
    console.log(newPerson);
  }
}
