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

    pdfDoc = new jsPDF('p', 'mm', 'letter');
    pictograma1 = ''
    pictograma2 = ''
    pictograma3 = ''
    pictograma4 = ''

    obligacion1 = ''
    obligacion2 = ''
    obligacion3 = ''
    obligacion4 = ''
    obligacion5 = ''
    obligacion6 = ''

    gas = '../../assets/Pictogramas/GAS.png'
    corrosivo = '../../assets/Pictogramas/CORROSIVO.png'
    explosivo = '../../assets/Pictogramas/EXPLO.png'
    combustible = '../../assets/Pictogramas/COMBURENTE.png'
    inflamable = '../../assets/Pictogramas/INFLAMABLE.png'
    salud = '../../assets/Pictogramas/SALUD.png'
    toxicidad = '../../assets/Pictogramas/TOXICO.png'
    grave = '../../assets/Pictogramas/ORGANOS.png'
    ambiente = '../../assets/Pictogramas/AMBIENTE.png'


    cara = '../../assets/Recomendaciones/CARA.jpg'
    cuerpo = '../../assets/Recomendaciones/CUERPO.jpg'
    guantes = '../../assets/Recomendaciones/GUANTES.jpg'
    oidos = '../../assets/Recomendaciones/OIDOS.jpg'
    pies = '../../assets/Recomendaciones/PIES.jpg'
    respiratoria = '../../assets/Recomendaciones/MASCARA.jpg'
    vista = '../../assets/Recomendaciones/VISTA.jpg'


    protegerDelSol = '../../assets/Recomendaciones/PROTEGERSE DEL SOL.png'
    lavarseManos = '../../assets/Recomendaciones/LAVARSE LAS MANOS.jpg'
    manipularConCuidado = '../../assets/Recomendaciones/MANIPULAR CON CUIDADO.jpg'

    noComer = '../../assets/Prohibiciones/NO COMER.jpg'
    NoFumar = '../../assets/Prohibiciones/NO FURMAS.jpg'

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
        this.indicaciones1 = indicaciones.replaceAll('.', '.\n');
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

    traerUrlImagen(palabra: string) {
        let localizacion = '';
        switch (palabra) {
            case 'Gas':
                localizacion = this.gas;
                break;
            case 'Explosivo':
                localizacion = this.explosivo;
                break;
            case 'Comburente':
                localizacion = this.combustible;
                break;
            case 'Inflamable':
                localizacion = this.inflamable;
                break;
            case 'Corrosivo':
                localizacion = this.corrosivo;
                break;
            case 'Salud':
                localizacion = this.salud;
                break;
            case 'Toxicidad':
                localizacion = this.toxicidad;
                break;
            case 'Grave':
                localizacion = this.grave;
                break;
            case 'Ambiente':
                localizacion = this.ambiente;
                break;



            case 'Cara':
                localizacion = this.cara;
                break;
            case 'Cuerpo':
                localizacion = this.cuerpo;
                break;
            case 'Guantes':
                localizacion = this.guantes;
                break;
            case 'Oidos':
                localizacion = this.oidos;
                break;
            case 'Pies':
                localizacion = this.pies;
                break;
            case 'Respiratoria':
                localizacion = this.respiratoria;
                break;
            case 'Vista':
                localizacion = this.vista;
                break;

            default:
                break;
        }

        return localizacion;
    }
}