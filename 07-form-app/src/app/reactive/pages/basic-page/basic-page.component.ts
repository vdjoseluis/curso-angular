import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

const RTX5090 = {
  name: 'RTX 5090',
  price: 1500,
  inStock: 10
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {
  /* public myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    inStock: new FormControl(0)
  }); */

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStock: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(private fb: FormBuilder, private validatorsService: ValidatorsService) { }
  ngOnInit(): void {
    //this.myForm.reset(RTX5090);
  }

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};
    for (const element of Object.keys(errors)) {
      switch (element) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres.`
      }
    }
    return null;

  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return
    };
    console.log(this.myForm.value);

    this.myForm.reset({ price: 10, inStock: 0 });
  }
}
