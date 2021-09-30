import {AbstractControl, FormControl, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";

type AnswerValidator = ValidationErrors | null;

export class MyValidator {
  static restrictedEmail(control: FormControl): AnswerValidator {
    const forbiddenEmail = [
      'v@mail.ru',
      'test@mail.ru'
    ]
    if (forbiddenEmail.includes(control.value)) {
      return {
        restrictedEmail: true
      }
    }
    return null;
  }

  static uniqEmail(control: AbstractControl): Promise<AnswerValidator> | Observable<AnswerValidator> {
    return new Promise<AnswerValidator>(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({
            uniqEmail: true
          })
        } else {
          resolve(null);
        }
      },1000)
    })
  }
}
