import jsPDF from "jspdf";
import { datosIniciales } from "./datosIniciales";

export class EtqRecipMenor500ml extends datosIniciales {
    marginLeft=20
    marginTop=20
    marginRight=15
    fondo='../../assets/Imagen1logo.jpg'
    pdfDoc = new jsPDF('l', 'px', 'letter');
    public imprimir() {
        this.pdfDoc.addImage(this.fondo,'JPEG',this.marginLeft,this.marginTop,300,100);
        
        



        this.pdfDoc.save('img1.pdf');
    }

}