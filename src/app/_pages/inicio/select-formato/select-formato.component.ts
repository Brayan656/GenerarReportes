import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-select-formato',
  standalone: true,
  imports: [CheckboxModule, ReactiveFormsModule, FormsModule],
  templateUrl: './select-formato.component.html',
  styleUrl: './select-formato.component.sass'
})
export class SelectFormatoComponent {

  form!: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<SelectFormatoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }
  buildForm() {
    this.form = this.formBuilder.group({
      EtqRecipMenor500ml: [{ value: false, disabled: false }, []],
      EtqRecipMayor500ml: [{ value: false, disabled: false }, []],
      EtqPublicacion: [{ value: false, disabled: false }, []],
      EtqMenor500mlServikom: [{ value: false, disabled: false }, []],
      EtqMayor500mlServikom: [{ value: false, disabled: false }, []],

    });
  }

  zice: any;
  tamano() {

    this.zice = [];
    if (this.form.controls['EtqRecipMenor500ml'].getRawValue()) {
      this.zice.push('EtqRecipMenor500ml');
    }
    if (this.form.controls['EtqRecipMayor500ml'].getRawValue()) {
      this.zice.push('EtqRecipMayor500ml');
    }
    if (this.form.controls['EtqPublicacion'].getRawValue()) {
      this.zice.push('EtqPublicacion');
    }
    if (this.form.controls['EtqMenor500mlServikom'].getRawValue()) {
      this.zice.push('EtqMenor500mlServikom');
    }
    if (this.form.controls['EtqMayor500mlServikom'].getRawValue()) {
      this.zice.push('EtqMayor500mlServikom');
    }

    this.dialogRef.close(this.zice);

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
