import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VacanteempleoService } from 'src/app/empresa/servicios/vacanteempleo.service';
import{Vacante} from '../../empresa/modelos/vacante';
 
////pdf
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  vacanteList:Vacante [];
  constructor(private vacanteempleoService:VacanteempleoService) { }

  ngOnInit() {
    this.vacanteempleoService.getProducts();
  }

    @ViewChild('content') Content: ElementRef;
  public descargarPDF(){
    let doc =new jsPDF();

    let specialElemetHandlers ={
      '#editor': function(element,renderer){
        return true;
      }
    };

    let content=this.Content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width':190,
      'elementHandlers': specialElemetHandlers
    });

    doc.save('Empleo.pdf');
  }

}
