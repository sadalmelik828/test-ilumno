import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Programas } from '../../services/programas';
import { PROGS } from '../../services/mock-programas';

import { ProgramasService } from '../../services/programas.service';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {

  programas: Programas[];
  registroForm;

  constructor(
    private programasService: ProgramasService,
    private formBuilder: FormBuilder
  ) {
    this.registroForm = this.formBuilder.group({
      name: '',
      program: '',
      comment: ''
    });
  }

  ngOnInit() {
    this.getProgramas();
  }

  getProgramas(): void {
    this.programasService.getProgramas()
        .subscribe(programas => this.programas = programas);
  }

  onSubmit(dataForm) {
    console.log('Form Data: ', dataForm);
    this.registroForm.reset();
  }
}
