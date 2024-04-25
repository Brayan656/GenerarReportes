
import { datosIniciales } from "./datosIniciales";

export class alto62_ancho84 extends datosIniciales {
    marginLeft = 20
    marginTop = 20
    marginRight = 20
    fondo = '../../assets/Imagen1logo.png'
    public imprimir() {
        this.pdfDoc.addImage(this.fondo, 'PNG', this.marginLeft, this.marginTop, 84, 62);

        this.pdfDoc.setFontSize(7);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.setTextColor(255, 255, 255)
        this.pdfDoc.text(this.tipoQuimico, this.marginLeft + 42, this.marginTop + 2, { baseline: 'top', align: 'center' });
        this.pdfDoc.text(this.riesgo, this.marginLeft + 9, this.marginTop + 6.5, { baseline: 'top', align: 'center' });

        this.pdfDoc.setFontSize(4);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.setTextColor(0, 0, 0)
        this.pdfDoc.text(this.indicaciones, this.marginLeft + 40, this.marginTop + 6, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFontSize(3);
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.indicaciones1, this.marginLeft + 40, this.marginTop + 8, { baseline: 'top', align: 'left', maxWidth: 33, lineHeightFactor: 0.9 });


        this.pdfDoc.setFontSize(4);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.text(this.consejos, this.marginLeft + 40, this.marginTop + 25.5, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFontSize(3);
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.consejos1, this.marginLeft + 40, this.marginTop + 27, { baseline: 'top', align: 'left', maxWidth: 42, lineHeightFactor: 0.9 });

        this.pdfDoc.text(this.norma, this.marginLeft + 40, this.marginTop + 47, { baseline: 'top', align: 'left', maxWidth: 42, lineHeightFactor: 1});


        this.pdfDoc.addImage(this.lavarseManos, 'JPEG', this.marginLeft + 46.5, this.marginTop + 53, 5, 5);
        this.pdfDoc.addImage(this.manipularConCuidado, 'JPEG', this.marginLeft + 55.75, this.marginTop + 53, 5, 5);
        this.pdfDoc.addImage(this.protegerDelSol, 'JPEG', this.marginLeft + 63.75, this.marginTop + 53, 5, 5);
        this.pdfDoc.addImage(this.NoFumar, 'JPEG', this.marginLeft + 70.75, this.marginTop + 53, 5, 5);
        this.pdfDoc.addImage(this.noComer, 'JPEG', this.marginLeft + 76.75, this.marginTop + 53, 5, 5);


        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.setFontSize(3);
        this.pdfDoc.text(this.lavar, this.marginLeft + 49, this.marginTop + 58, { baseline: 'top', align: 'center', maxWidth: 8, lineHeightFactor: 0.7 });
        this.pdfDoc.text(this.manipular, this.marginLeft + 58, this.marginTop + 58, { baseline: 'top', align: 'center', maxWidth: 8, lineHeightFactor: 0.7 });
        this.pdfDoc.text(this.proteger, this.marginLeft + 66, this.marginTop + 58, { baseline: 'top', align: 'center', maxWidth: 8, lineHeightFactor: 0.7 });
        this.pdfDoc.text(this.fumar, this.marginLeft + 73, this.marginTop + 58, { baseline: 'top', align: 'center', maxWidth: 5, lineHeightFactor: 0.7 });
        this.pdfDoc.text(this.comer, this.marginLeft + 79, this.marginTop + 58, { baseline: 'top', align: 'center', maxWidth: 5, lineHeightFactor: 0.7 });

        this.pictogramas()
        this.oblicagiones();

        this.pdfDoc.setFontSize(3);
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.text(this.codigo, this.marginLeft + 2, this.marginTop + 60.5, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.codigo1, this.marginLeft + 12, this.marginTop + 60.5, { baseline: 'top', align: 'left' });
        this.pdfDoc.setFont('helvetica', 'bold')
        this.pdfDoc.text(this.version, this.marginLeft + 82, this.marginTop + 60.5, { baseline: 'top', align: 'right' });
        this.pdfDoc.setFont('helvetica', 'normal')
        this.pdfDoc.text(this.version1.toString(), this.marginLeft + 75, this.marginTop + 60.5, { baseline: 'top', align: 'right' });

        this.pdfDoc.save(this.codigo1+'_84mm X 62mm.pdf');
    }
    pictogramas() {
        if (this.pictograma1 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma1);
            this.pdfDoc.addImage(img,'PNG',32,32.5,13,13)
        }
        if (this.pictograma2 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma2);
            this.pdfDoc.addImage(img,'PNG',40,40.1,13,13)
        }
        if (this.pictograma3 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma3);
            this.pdfDoc.addImage(img,'PNG',32,48.2,13,13)
        }
        if (this.pictograma4 != 'NOAPLICA') {
            let img = this.traerUrlImagen(this.pictograma4);
            this.pdfDoc.addImage(img,'PNG',24.2,40.2,13,13)
        }
        
    }

    oblicagiones() {
        if (this.obligacion1 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion1);
            this.pdfDoc.addImage(img,'JPEG',this.marginLeft + 5,this.marginTop + 53.5,5,5);
        }
        
        if (this.obligacion2 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion2);
            this.pdfDoc.addImage(img,'JPEG',this.marginLeft + 10,this.marginTop + 53.5,5,5);
        }
        if (this.obligacion3 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion3);
            this.pdfDoc.addImage(img,'JPEG',this.marginLeft + 15,this.marginTop + 53.5,5,5);
        }
        if (this.obligacion4 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion4);
            this.pdfDoc.addImage(img,'JPEG',this.marginLeft + 20,this.marginTop + 53.5,5,5);
        }
        if (this.obligacion5 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion5);
            this.pdfDoc.addImage(img,'JPEG',this.marginLeft + 25,this.marginTop + 53.5,5,5);
        }
        if (this.obligacion6 != 'NoDisponible') {
            let img = this.traerUrlImagen(this.obligacion6);
            this.pdfDoc.addImage(img,'JPEG',this.marginLeft + 30,this.marginTop + 53.5,5,5);
        }
        
    }

}