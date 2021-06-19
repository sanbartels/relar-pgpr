export class UserDB{
    uid: string;
    displayName: string;
    name: string;
    lastname: string;
    photoURL: string;
    email: string;
    emailVerified: boolean;
    telefono: string;
    sexo: string;
    formacion: string;
    categoria: string;
    institucion: string;
    seccion: string;
    pais: string;
    ciudad: string;
    dni: number;
    fechaDeNacimiento: string;
    postulaTrabajo: boolean;
    trabajos: string[];
    pago: boolean;
    inscripcion: number;
    brou?: { number:string, text:string };
    metodo?: string;

    getFullName = () => this.name + ' ' + this.lastname;

    constructor(){
        this.pago = false;
        this.postulaTrabajo = false;
        this.trabajos = [];
        this.inscripcion = 2;
    }
}

export class Trabajo{
    uid: string;
    date: Date;
    tema: string;
    titulo: string;
    autores: string;
    institucion: string;
    expone: string;
    resumen: string;
    postertalk: boolean;
    dialogos: boolean;
    certificacion: boolean;
    beca: boolean;
    tipoBeca?: string;
    file?: string;

    constructor(){
        this.beca = false;
    }
}