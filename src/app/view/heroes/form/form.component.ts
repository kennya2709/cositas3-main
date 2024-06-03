import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { PeriodicElement } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  hide = true;
  formGroup!: FormGroup;

  constructor(private formB: FormBuilder, private userService: UsuarioService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formB.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      telefono: ["", Validators.required]
    });
  }

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  submit() {
    if (this.formGroup.valid) {
      const newUser: PeriodicElement = {
        
        name: this.formGroup.value.name,
        weight: this.formGroup.value.email,  // Ajusta según tus necesidades
        symbol: this.formGroup.value.password,  // Ajusta según tus necesidades
        email: this.formGroup.value.email,
        password: this.formGroup.value.password,
        phone: this.formGroup.value.telefono,
        position: this.formGroup.value.telefono,
      };
      this.userService.addData(newUser);
    }
  }
}