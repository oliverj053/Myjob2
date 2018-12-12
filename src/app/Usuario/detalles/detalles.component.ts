import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VacanteempleoService } from '../../empresa/servicios/vacanteempleo.service';
////pdf
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
 
  constructor(private vacanteempleoService: VacanteempleoService) { }

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

    doc.fromHTML(content.innerHTML, 0, 0, {
      'width':100,
      'elementHandlers': specialElemetHandlers
    });

    doc.save('Empleo.pdf');
  }


}
