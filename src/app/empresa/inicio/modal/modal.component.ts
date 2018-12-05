import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
//servicios
import { VacanteempleoService } from '../../servicios/vacanteempleo.service';
//
import { NgForm } from '@angular/forms';
import { Vacante } from '../../modelos/vacante';
import { Router } from '@angular/router';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  closeResult: string;

  constructor( private vacanteempleoService: VacanteempleoService, private router:Router) { }

  ngOnInit() {
    this.vacanteempleoService.getProducts();
    this.limpiarFormulario();
  }

  onSubmit(vacanteForm: NgForm) {
    if (vacanteForm.value.id == null)
      this.vacanteempleoService.insertar(vacanteForm.value);
    else
      this.vacanteempleoService.modificar(vacanteForm.value);

    this.limpiarFormulario(vacanteForm);
    this.router.navigate(['/inicio']);
  }

  limpiarFormulario(vacanteForm?: NgForm) {
    if (vacanteForm != null) {
      vacanteForm.reset();
      this.vacanteempleoService.vacantesel = new Vacante();
    }
  }

 

}


