import jsPDF from "jspdf";
import { datosIniciales } from "./datosIniciales";

export class alto158_ancho210 extends datosIniciales {
    override pdfDoc: jsPDF = new jsPDF('l', 'mm', 'letter');
    marginLeft = 20
    marginTop = 20
    marginRight = 20
    fondo = '../../assets/Imagen3logo.jpg'
    public imprimir() {
        this.pdfDoc.addImage(this.fondo, 'JPEG', this.marginLeft, this.marginTop, 210, 158);
        //titulo
        this.pdfDoc.setFontSize(16);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.setTextColor(255, 255, 255)
        this.pdfDoc.text(this.tipoQuimico, this.marginLeft + 105, this.marginTop + 4, { baseline: 'top', align: 'center' });
        this.pdfDoc.text(this.riesgo, this.marginLeft + 20, this.marginTop + 15, { baseline: 'top', align: 'center' });
        //INDICACIONES DE PELIGRO
        this.pdfDoc.setFontSize(10);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.setTextColor(0, 0, 0)
        this.pdfDoc.text(this.indicaciones, this.marginLeft + 100, this.marginTop + 14, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFontSize(8);
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.indicaciones1, this.marginLeft + 100, this.marginTop + 16, { baseline: 'top', align: 'left', maxWidth: 90, lineHeightFactor: 0.7 });

        //Consejos de prucencia
        this.pdfDoc.setFontSize(10);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.text(this.consejos, this.marginLeft + 100, this.marginTop + 63, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFontSize(7);
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.consejos1, this.marginLeft + 100, this.marginTop + 68, { baseline: 'top', align: 'left', maxWidth: 105 });
        //Norma
        this.pdfDoc.setFontSize(8);
        this.pdfDoc.text(this.norma, this.marginLeft + 100, this.marginTop + 120, { baseline: 'top', align: 'left', maxWidth: 105 });

        //imagenes de abajo
        this.pdfDoc.addImage(this.lavarseManos, 'JPEG', this.marginLeft + 103, this.marginTop + 134, 15, 15);
        this.pdfDoc.addImage(this.manipularConCuidado, 'JPEG', this.marginLeft + 124, this.marginTop + 134, 15, 15);
        this.pdfDoc.addImage(this.protegerDelSol, 'JPEG', this.marginLeft + 145, this.marginTop + 134, 15, 15);
        this.pdfDoc.addImage(this.NoFumar, 'JPEG', this.marginLeft + 166, this.marginTop + 134, 15, 15);
        this.pdfDoc.addImage(this.noComer, 'JPEG', this.marginLeft + 187, this.marginTop + 134, 15, 15);


        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.setFontSize(7);
        this.pdfDoc.text(this.lavar, this.marginLeft + 111, this.marginTop + 149, { baseline: 'top', align: 'center', maxWidth: 18, lineHeightFactor: 1 });
        this.pdfDoc.text(this.manipular, this.marginLeft + 132, this.marginTop + 149, { baseline: 'top', align: 'center', maxWidth: 18, lineHeightFactor: 1 });
        this.pdfDoc.text(this.proteger, this.marginLeft + 153, this.marginTop + 149, { baseline: 'top', align: 'center', maxWidth: 18, lineHeightFactor: 1 });
        this.pdfDoc.text(this.fumar, this.marginLeft + 174, this.marginTop + 149, { baseline: 'top', align: 'center', maxWidth: 18, lineHeightFactor: 1 });
        this.pdfDoc.text(this.comer, this.marginLeft + 195, this.marginTop + 149, { baseline: 'top', align: 'center', maxWidth: 18, lineHeightFactor: 1 });

        this.pictogramas()
        this.oblicagiones();

        this.pdfDoc.setFontSize(6);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.text(this.codigo, this.marginLeft + 2, this.marginTop + 155, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.codigo1, this.marginLeft + 15, this.marginTop + 155, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.text(this.version, this.marginLeft + 207, this.marginTop + 155, { baseline: 'top', align: 'right' });
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.version1.toString(), this.marginLeft + 195, this.marginTop + 155, { baseline: 'top', align: 'right' });



        this.pdfDoc.save(this.codigo1+'_210mm X 158mm.pdf');
    }
    pictogramas() {
        if (this.pictograma1 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma1);
            this.pdfDoc.addImage(img, 'PNG', 49.6, 40.5, 40, 40)
        }
        if (this.pictograma2 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma2);
            this.pdfDoc.addImage(img, 'PNG', 74.2, 63.7, 40, 40)
        }
        if (this.pictograma3 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma3);
            this.pdfDoc.addImage(img, 'PNG', 49.6, 87.5, 40, 40)
        }
        if (this.pictograma4 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma4);
            this.pdfDoc.addImage(img, 'PNG', 24.5, 63.7, 40, 40)
        }
        /*
        */
    }

    oblicagiones() {
        if (this.obligacion1 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion1);
            this.pdfDoc.addImage(img, 'JPEG', this.marginLeft + 5, this.marginTop + 110, 18, 18);
        }
        if (this.obligacion2 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion2);
            this.pdfDoc.addImage(img, 'JPEG', this.marginLeft + 39.5, this.marginTop + 110, 18, 18);
        }
        if (this.obligacion3 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion3);
            this.pdfDoc.addImage(img, 'JPEG', this.marginLeft + 70, this.marginTop + 110, 18, 18);
        }

        if (this.obligacion4 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion4);
            this.pdfDoc.addImage(img, 'JPEG', this.marginLeft + 5, this.marginTop + 130, 18, 18);
        }
        if (this.obligacion5 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion5);
            this.pdfDoc.addImage(img, 'JPEG', this.marginLeft + 39.5, this.marginTop + 130, 18, 18);
        }
        if (this.obligacion6 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion6);
            this.pdfDoc.addImage(img, 'JPEG', this.marginLeft + 70, this.marginTop + 130, 18, 18);
        }
        /*
        */
    }
}