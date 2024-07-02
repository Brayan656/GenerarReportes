import { Component, OnInit, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import * as XLXS from 'xlsx'
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { alto62_ancho84 } from '../../formatosPDF/alto62_ancho84';
import { alto84_ancho105 } from '../../formatosPDF/alto84_ancho105';
import { alto115_ancho148 } from '../../formatosPDF/alto115_ancho148';
import { alto158_ancho210 } from '../../formatosPDF/alto158_ancho210';
import { SelectFormatoComponent } from './select-formato/select-formato.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Table } from 'primeng/table';
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
  imports: [
    TableModule,
    DialogModule,
    DynamicDialogModule,
    MatDialogModule,
    CardModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService, public dialog: MatDialog) { }
  ngOnInit(): void {

  }

  productos: Productos[] = [
  ];
  CargarDatosExel(event) {
    let file = event.target.files[0];

    let fileReader = new FileReader();

    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      this.productos = []
      var workBook = XLXS.read(fileReader.result, { type: 'binary' });

      var items = workBook.SheetNames;

      this.productos = XLXS.utils.sheet_to_json(workBook.Sheets[items[0]]);

      console.log(this.productos);
    }

  }


  imprimir(producto: any) {


    const dialogRef = this.dialog.open(SelectFormatoComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);

      if (result != undefined) {

        result.forEach((element: any) => {
          let pdf;
          switch (element) {
            case 'alto62_ancho84':
              //console.log('hola');

              pdf = new alto62_ancho84(
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
            case 'alto84_ancho105':
              pdf = new alto84_ancho105(
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
            case 'alto115_ancho148':
              pdf = new alto115_ancho148(
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
            case 'alto158_ancho210':
              pdf = new alto158_ancho210(
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

            default:
              break;
          }


        });
      }

    });
    /*
    */


  }

  //Elementos de la tabla
  @ViewChild(Table) dt: Table;
  aplicarFiltros(event, tipoConsilta: string) {
    this.dt!.filterGlobal((event.target as HTMLInputElement).value, tipoConsilta);
  }
  first = 0;

  rows = 10;
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.productos ? this.first === this.productos.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.productos ? this.first === 0 : true;
  }
}
