import { datosIniciales } from "./datosIniciales";

export class alto84_ancho105 extends datosIniciales {
    marginLeft = 20
    marginTop = 20
    marginRight = 20
    fondo = '../../assets/Imagen2logo.jpg'
    public imprimir() {
        this.pdfDoc.addImage(this.fondo, 'JPEG', this.marginLeft, this.marginTop, 105, 84);
//titulo
        this.pdfDoc.setFontSize(8);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.setTextColor(255, 255, 255)
        this.pdfDoc.text(this.tipoQuimico, this.marginLeft + 52.5, this.marginTop + 2, { baseline: 'top', align: 'center' });
        this.pdfDoc.text(this.riesgo, this.marginLeft + 12, this.marginTop + 7.5, { baseline: 'top', align: 'center' });
//INDICACIONES DE PELIGRO
        this.pdfDoc.setFontSize(6);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.setTextColor(0, 0, 0)
        this.pdfDoc.text(this.indicaciones, this.marginLeft + 50, this.marginTop + 7, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFontSize(5);
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.indicaciones1, this.marginLeft + 50, this.marginTop + 9, { baseline: 'top', align: 'left', maxWidth: 45, lineHeightFactor: 0.7 });

//Consejos de prucencia
        this.pdfDoc.setFontSize(5);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.text(this.consejos, this.marginLeft + 50, this.marginTop + 31, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFontSize(4);
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.consejos1, this.marginLeft + 50, this.marginTop + 33, { baseline: 'top', align: 'left', maxWidth: 52});
//Norma
        this.pdfDoc.text(this.norma, this.marginLeft + 50, this.marginTop + 65, { baseline: 'top', align: 'left', maxWidth: 52, lineHeightFactor: 0.7 });

//imagenes de abajo
        this.pdfDoc.addImage(this.lavarseManos, 'JPEG', this.marginLeft + 52.5, this.marginTop + 74, 5, 5);
        this.pdfDoc.addImage(this.manipularConCuidado, 'JPEG', this.marginLeft + 63.75, this.marginTop + 74, 5, 5);
        this.pdfDoc.addImage(this.protegerDelSol, 'JPEG', this.marginLeft + 74.75, this.marginTop + 74, 5, 5);
        this.pdfDoc.addImage(this.NoFumar, 'JPEG', this.marginLeft + 85.75, this.marginTop + 74, 5, 5);
        this.pdfDoc.addImage(this.noComer, 'JPEG', this.marginLeft + 96.75, this.marginTop + 74, 5, 5);


        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.setFontSize(3);
        this.pdfDoc.text(this.lavar, this.marginLeft + 55, this.marginTop + 79, { baseline: 'top', align: 'center', maxWidth: 10, lineHeightFactor: 0.8 });
        this.pdfDoc.text(this.manipular, this.marginLeft + 66, this.marginTop + 79, { baseline: 'top', align: 'center', maxWidth: 10, lineHeightFactor: 0.8 });
        this.pdfDoc.text(this.proteger, this.marginLeft + 77, this.marginTop + 79, { baseline: 'top', align: 'center', maxWidth: 10, lineHeightFactor: 0.8 });
        this.pdfDoc.text(this.fumar, this.marginLeft + 88, this.marginTop + 79, { baseline: 'top', align: 'center', maxWidth: 10, lineHeightFactor: 0.8 });
        this.pdfDoc.text(this.comer, this.marginLeft + 99, this.marginTop + 79, { baseline: 'top', align: 'center', maxWidth: 10, lineHeightFactor: 0.8 });

        this.pictogramas()
        this.oblicagiones();

        this.pdfDoc.setFontSize(5);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.text(this.codigo, this.marginLeft + 2, this.marginTop + 82, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.codigo1, this.marginLeft + 14, this.marginTop + 82, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.text(this.version, this.marginLeft + 103, this.marginTop + 82, { baseline: 'top', align: 'right' });
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.version1.toString(), this.marginLeft + 93, this.marginTop + 82, { baseline: 'top', align: 'right' });


        this.pdfDoc.save(this.codigo1+'_105mm X 84mm.pdf');
    }
    pictogramas() {
        if (this.pictograma1 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma1);
            this.pdfDoc.addImage(img,'PNG',35.4,32.5,20,20)
        }
        if (this.pictograma2 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma2);
            this.pdfDoc.addImage(img,'PNG',47.5,44.5,20,20)
        }
        if (this.pictograma3 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma3);
            this.pdfDoc.addImage(img,'PNG',35.4,57,20,20)
        }
        if (this.pictograma4 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma4);
            this.pdfDoc.addImage(img,'PNG',23,44.5,20,20)
        }
    }

    oblicagiones() {
        if (this.obligacion1 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion1);
            this.pdfDoc.addImage(img,'JPEG',this.marginLeft + 5,this.marginTop + 59.5,10,10);
        }
        if (this.obligacion2 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion2);
            this.pdfDoc.addImage(img,'JPEG',this.marginLeft + 20,this.marginTop + 59.5,10,10);
        }
        if (this.obligacion3 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion3);
            this.pdfDoc.addImage(img,'JPEG',this.marginLeft + 35,this.marginTop + 59.5,10,10);
        }

        if (this.obligacion4 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion4);
            this.pdfDoc.addImage(img,'JPEG',this.marginLeft + 5,this.marginTop + 69.5,10,10);
        }
        if (this.obligacion5 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion5);
            this.pdfDoc.addImage(img,'JPEG',this.marginLeft + 20,this.marginTop + 69.5,10,10);
        }
        if (this.obligacion6 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion6);
            this.pdfDoc.addImage(img,'JPEG',this.marginLeft + 35,this.marginTop + 69.5,10,10);
        }
        
    }

}