export interface Data {
    panelistas: Panelista[];
    conferencistas: Conferencista[];
    mesas: MesaRedonda[];
    sesiones: Sesion[];
}  

export interface Panelista {
    institucion?: string;
    nombre: string;
    pais: string;
    url?: string;
}

export interface Conferencista{
    colaboradores?: string;
    institucion?: string;
    horario: string;
    nombre: string;
    pais: string;
    sid: string;
    _en: {
        titulo: string,
        texto: string;
        bio: string,
    }
    _es: {
        titulo: string,
        texto: string;
        bio: string,
    }
    _pg: {
        titulo: string,
        texto: string;
        bio: string,
    }
}

export interface Sesion {
    conferencistas: string[];
    coordinadores: string;
    horario: string;
    nombre_es: string;
    nombre_en: string;
    nombre_pg: string;
    texto_es: string;
    texto_en: string;
    texto_pg: string;
}

export interface MesaRedonda {
    conferencistas: string[];
    coordinadores: string;
    horario: string;
    nombre_es: string;
    nombre_en: string;
    nombre_pg: string;
    texto_es: string;
    texto_en: string;
    texto_pg: string;
}