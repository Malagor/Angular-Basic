import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {MyValidator} from "../my.validator";

@Component({
  selector: 'app-form-global',
  templateUrl: './form-global.component.html',
  styleUrls: ['./form-global.component.less']
})
export class FormGlobalComponent {
  delIcon = faTrashAlt;
  form: FormGroup = new FormGroup({
    email: new FormControl("mail@mail.ru", [
      Validators.email,
      Validators.required,
      MyValidator.restrictedEmail
    ], [
      MyValidator.uniqEmail
    ]),
    password: new FormControl('123456', [
      Validators.required,
      Validators.minLength(6)
    ]),
    address: new FormGroup({
      country: new FormControl('by'),
      city: new FormControl('Гомель', Validators.required)
    }),
    skills: new FormArray([])
  });

  validator = {
    email: [
      {
        key: 'restrictedEmail',
        message: `Этот email запрещен.`
      },
      {
        key: 'uniqEmail',
        message: `Этот email занят.`
      },
      {
        key: 'email',
        message: `Введите корректный Email.`
      },
      {
        key: 'required',
        message: `Поле Email не может быть пустым.`
      }
    ]
  }

  submit() {
    if (this.form.value) {
      console.log('Form: ', this.form);
      console.log('Form Data', {...this.form.value});
      this.form.reset();
    }
  }

  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    }

    const cityKey = this.form.get('address')?.get('country')?.value;
    const city = cityMap[cityKey as keyof object];
    this.form.patchValue({address: {city}});
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }

  getControls() {
    return (this.form.get('skills') as FormArray).controls;
  }

  deleteSkill(idx: number) {
    (this.form.get('skills') as FormArray).removeAt(idx);
  }
}
