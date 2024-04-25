import { datosIniciales } from "./datosIniciales";

export class alto115_ancho148 extends datosIniciales {
    marginLeft = 20
    marginTop = 20
    marginRight = 20
    fondo = '../../assets/Imagen3logo.jpg'
    public imprimir() {
        this.pdfDoc.addImage(this.fondo, 'JPEG', this.marginLeft, this.marginTop, 148, 115);
        //titulo
        this.pdfDoc.setFontSize(10);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.setTextColor(255, 255, 255)
        this.pdfDoc.text(this.tipoQuimico, this.marginLeft + 74, this.marginTop + 3, { baseline: 'top', align: 'center' });
        this.pdfDoc.text(this.riesgo, this.marginLeft + 15, this.marginTop + 11, { baseline: 'top', align: 'center' });
        //INDICACIONES DE PELIGRO
        this.pdfDoc.setFontSize(8);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.setTextColor(0, 0, 0)
        this.pdfDoc.text(this.indicaciones, this.marginLeft + 70, this.marginTop + 10, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFontSize(7);
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.indicaciones1, this.marginLeft + 70, this.marginTop + 12, { baseline: 'top', align: 'left', maxWidth: 65, lineHeightFactor: 0.7 });

        //Consejos de prucencia
        this.pdfDoc.setFontSize(8);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.text(this.consejos, this.marginLeft + 70, this.marginTop + 46, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFontSize(5);
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.consejos1, this.marginLeft + 70, this.marginTop + 49, { baseline: 'top', align: 'left', maxWidth: 75 });
        //Norma
        this.pdfDoc.setFontSize(6);
        this.pdfDoc.text(this.norma, this.marginLeft + 70, this.marginTop + 85, { baseline: 'top', align: 'left', maxWidth: 75 });

        //imagenes de abajo
        this.pdfDoc.addImage(this.lavarseManos, 'JPEG', this.marginLeft + 71.5, this.marginTop + 98, 10, 10);
        this.pdfDoc.addImage(this.manipularConCuidado, 'JPEG', this.marginLeft + 85.75, this.marginTop + 98, 10, 10);
        this.pdfDoc.addImage(this.protegerDelSol, 'JPEG', this.marginLeft + 99.75, this.marginTop + 98, 10, 10);
        this.pdfDoc.addImage(this.NoFumar, 'JPEG', this.marginLeft + 113.75, this.marginTop + 98, 10, 10);
        this.pdfDoc.addImage(this.noComer, 'JPEG', this.marginLeft + 127.5, this.marginTop + 98, 10, 10);


        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.setFontSize(5);
        this.pdfDoc.text(this.lavar, this.marginLeft + 76.5, this.marginTop + 108, { baseline: 'top', align: 'center', maxWidth: 13, lineHeightFactor: 0.8 });
        this.pdfDoc.text(this.manipular, this.marginLeft + 90.5, this.marginTop + 108, { baseline: 'top', align: 'center', maxWidth: 13, lineHeightFactor: 0.8 });
        this.pdfDoc.text(this.proteger, this.marginLeft + 104.5, this.marginTop + 108, { baseline: 'top', align: 'center', maxWidth: 13, lineHeightFactor: 0.8 });
        this.pdfDoc.text(this.fumar, this.marginLeft + 118.5, this.marginTop + 108, { baseline: 'top', align: 'center', maxWidth: 13, lineHeightFactor: 0.8 });
        this.pdfDoc.text(this.comer, this.marginLeft + 132.5, this.marginTop + 108, { baseline: 'top', align: 'center', maxWidth: 13, lineHeightFactor: 0.8 });

        this.pictogramas()
        this.oblicagiones();

        this.pdfDoc.setFontSize(5);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.text(this.codigo, this.marginLeft + 2, this.marginTop + 113, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.codigo1, this.marginLeft + 14, this.marginTop + 113, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.text(this.version, this.marginLeft + 146, this.marginTop + 113, { baseline: 'top', align: 'right' });
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.version1.toString(), this.marginLeft + 136, this.marginTop + 113, { baseline: 'top', align: 'right' });

        this.pdfDoc.save(this.codigo1+'_115mm X 148mm.pdf');
    }
    pictogramas() {
        if (this.pictograma1 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma1);
            this.pdfDoc.addImage(img, 'PNG', 40, 34.5, 30, 30)
        }
        if (this.pictograma2 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma2);
            this.pdfDoc.addImage(img, 'PNG', 57, 51.5, 30, 30)
        }
        if (this.pictograma3 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma3);
            this.pdfDoc.addImage(img, 'PNG', 40, 68.5, 30, 30)
        }
        if (this.pictograma4 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma4);
            this.pdfDoc.addImage(img, 'PNG', 22.5, 51.5, 30, 30)
        }
        /*
        */
    }

    oblicagiones() {
        if (this.obligacion1 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion1);
            this.pdfDoc.addImage(img, 'JPEG', this.marginLeft + 5, this.marginTop + 80, 12, 12);
        }
        if (this.obligacion2 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion2);
            this.pdfDoc.addImage(img, 'JPEG', this.marginLeft + 28.5, this.marginTop + 80, 12, 12);
        }
        if (this.obligacion3 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion3);
            this.pdfDoc.addImage(img, 'JPEG', this.marginLeft + 50, this.marginTop + 80, 12, 12);
        }
        
        if (this.obligacion4 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion4);
            this.pdfDoc.addImage(img, 'JPEG', this.marginLeft + 5, this.marginTop + 92, 12, 12);
        }
        if (this.obligacion5 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion5);
            this.pdfDoc.addImage(img, 'JPEG', this.marginLeft + 28.5, this.marginTop + 92, 12, 12);
        }
        if (this.obligacion6 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion6);
            this.pdfDoc.addImage(img, 'JPEG', this.marginLeft + 50, this.marginTop + 92, 12, 12);
        }
        /*
        */
    }

}