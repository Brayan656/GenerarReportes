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
      alto62_ancho84: [{ value: false, disabled: false }, []],
      alto84_ancho105: [{ value: false, disabled: false }, []],
      alto115_ancho148: [{ value: false, disabled: false }, []],
      alto158_ancho210: [{ value: false, disabled: false }, []],
      //alto62_ancho84: [{ value: false, disabled: false }, []],

    });
  }

  zice: any;
  tamano() {

    this.zice = [];
    if (this.form.controls['alto62_ancho84'].getRawValue()) {
      this.zice.push('alto62_ancho84');
    }
    if (this.form.controls['alto84_ancho105'].getRawValue()) {
      this.zice.push('alto84_ancho105');
    }
    if (this.form.controls['alto115_ancho148'].getRawValue()) {
      this.zice.push('alto115_ancho148');
    }
    if (this.form.controls['alto158_ancho210'].getRawValue()) {
      this.zice.push('alto158_ancho210');
    }
    /*
    if (this.form.controls['EtqMayor500mlServikom'].getRawValue()) {
      this.zice.push('EtqMayor500mlServikom');
    }
    */

    this.dialogRef.close(this.zice);

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
