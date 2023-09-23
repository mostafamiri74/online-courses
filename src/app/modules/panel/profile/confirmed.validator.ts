import { FormGroup } from '@angular/forms';

export function ConfirmedValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors['repeatPassword']) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ repeatPassword: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
