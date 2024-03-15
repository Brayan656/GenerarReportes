import jsPDF from "jspdf";

export class datosIniciales {


    tipoQuimico = ''
    riesgo = ''

    indicaciones = 'INDICACIONES DE PELIGRO';
    indicaciones1 = '';


    consejos = 'CONSEJOS DE PRUDENCIA';
    consejos1 = '';


    norma = 'Recuerde revisar la Hoja de datos de seguridad HDS, ésta debe permanecer en el puesto de trabajo. Consulte los datos del proveedor en la HDS. Teléfono en caso de emergencia: Línea 123';


    lavar = 'LAVARSE LAS MANOS';
    manipular = 'MANIPULAR CON CUIDADO';
    proteger = 'PROTEGER DEL CALOR';
    fumar = 'NO FUMAR';
    comer = 'NO COMER';

    codigo = 'CODIGO:';
    codigo1 = '';

    version = 'VERSION';
    version1 = '';

    //pdfDoc = new jsPDF('p', 'px', 'letter');
    pictograma1 = ''
    pictograma1_img = ''
    pictograma2 = ''
    pictograma2_img = ''
    pictograma3 = ''
    pictograma3_img = ''
    pictograma4 = ''
    pictograma4_img = ''
    obligacion1 = ''
    obligacion1_img = ''
    obligacion2 = ''
    obligacion2_img = ''
    obligacion3 = ''
    obligacion3_img = ''
    obligacion4 = ''
    obligacion4_img = ''
    obligacion5 = ''
    obligacion5_img = ''
    obligacion6 = ''
    obligacion6_img = ''

    constructor(
        quimico: string,
        riesgo: string,
        indicaciones: string,
        consejos: string,
        codigo: string,
        version: string,
        pictograma1: string,
        pictograma2: string,
        pictograma3: string,
        pictograma4: string,
        obligacion1: string,
        obligacion2: string,
        obligacion3: string,
        obligacion4: string,
        obligacion5: string,
        obligacion6: string,
    ) {
        this.tipoQuimico = quimico;
        this.riesgo = riesgo;
        this.indicaciones1 = indicaciones;
        this.consejos1 = consejos;
        this.codigo1 = codigo;
        this.version1 = version;

        this.pictograma1 = pictograma1;
        this.pictograma2 = pictograma2;
        this.pictograma3 = pictograma3;
        this.pictograma4 = pictograma4;

        this.obligacion1 = obligacion1;
        this.obligacion2 = obligacion2;
        this.obligacion3 = obligacion3;
        this.obligacion4 = obligacion4;
        this.obligacion5 = obligacion5;
        this.obligacion6 = obligacion6;

    }


}