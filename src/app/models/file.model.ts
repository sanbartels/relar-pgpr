export class FileItem{
    public archivo: File;
    public name: string;
    public url: string;
    public subiendo: boolean;
    public progreso: number;
    public tid: string;
    public uid: string;
    public tidname: string;

    constructor( archivo: File, tid: string, tidname: string, uid: string ){
        this.archivo = archivo;
        this.name = archivo.name;
        this.subiendo = false;
        this.progreso = 0;
        this.tid = tid;
        this.uid = uid;
        this.tidname = tidname;
    }
}