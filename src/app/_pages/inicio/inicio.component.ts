import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import * as XLXS from 'xlsx'
import Swal from 'sweetalert2';
import { jsPDF } from 'jspdf';
import { find } from 'rxjs';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { SelectFormatoComponent } from './select-formato/select-formato.component';
import { EtqRecipMenor500ml } from '../../formatosPDF/EtqRecipMenor500ml';
interface Productos {
  Codigo: string
  Ubicacion: string
  Nombre: string
  Palabra: string
  Indicaciones: string
  Consejos: string
  Pictograma1: string
  Pictograma2: string
  Pictograma3: string
  Pictograma4: string
  Obligacion1: string
  Obligacion2: string
  Obligacion3: string
  Obligacion4: string
  Obligacion5: string
  Obligacion6: string
  Version: string

}

@Component({
  selector: 'app-inicio',
  standalone: true,
  providers: [DialogService],
  imports: [TableModule,DialogModule,DynamicDialogModule,MatDialogModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.sass'
})
export class InicioComponent implements OnInit{
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService,public dialog: MatDialog) {}
  ngOnInit(): void {
    
  }
 
  productos: Productos[] = [
  ];
  CargarDatosExel(event:any) {
    let file = event.target.files[0];

    let fileReader=new FileReader();

    fileReader.readAsBinaryString(file);
    fileReader.onload=(e)=>{
      this.productos=[]
      var workBook=XLXS.read(fileReader.result,{type:'binary'});

      var items=workBook.SheetNames;

      this.productos=XLXS.utils.sheet_to_json(workBook.Sheets[items[0]]);
       
    }
  }


  imprimir(producto:any){
    
    const dialogRef = this.dialog.open(SelectFormatoComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if (result!=undefined) {
        
        result.forEach((element: any) => {

          switch (element) {
            case 'EtqRecipMenor500ml':
              let pdf=new EtqRecipMenor500ml(
                producto.Nombre,
                producto.Palabra,
                producto.Indicaciones,
                producto.Consejos,
                producto.Codigo,
                producto.Version,
                producto.Pictograma1,
                producto.Pictograma2,
                producto.Pictograma3,
                producto.Pictograma4,
                producto.Obligacion1,
                producto.Obligacion2,
                producto.Obligacion3,
                producto.Obligacion4,
                producto.Obligacion5,
                producto.Obligacion6,
              )
              pdf.imprimir()
              break;
            case 'EtqRecipMayor500ml':
              
              break;
            case 'EtqPublicacion':
              
              break;
            case 'EtqMenor500mlServikom':
              
              break;
            case 'EtqMayor500mlServikom':
              
              break;
          
            default:
              break;
          }


        });
      }
        
      
    });


  }

}
