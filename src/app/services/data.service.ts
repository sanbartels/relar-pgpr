import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data={
    "microbioma-agrícola": {
      "conferencistas": ["kornelia-smalla", "jorge-mazza-rodrigues"],
      "coordinadores": "Coordinadores: Dra. Carolina Leoni (Uruguay) y Dr. Rodrigo Mendes (Brasil)",
      "horario": "Lunes 4 de octubre",
      "nombre": "El microbioma agrícola",
      "texto": "Próximamente más información"
    },
    "promoción-indirecta-del-crecimiento-vegetal": {
      "conferencistas": ["jeroen-wagemans", "alexandra-stoll"],
      "coordinadores": "Coordinadores: Dr. Federico Rivas (Uruguay) y Dr. Claudio Valverde (Argentina)",
      "horario": "Martes 5 de octubre",
      "nombre": "Promoción indirecta del crecimiento vegetal",
      "texto": "Una fracción sustantiva de la diversidad microbiana está íntimamente asociada a distintos órganos o compartimentos vegetales y contribuyen significativamente al crecimiento saludable de la planta por medio de mecanismos que reducen el impacto negativo de fitopatógenos. Entre estos mecanismos, se destacan la antibiosis, la inducción de la resistencia sistémica y la competencia por nutrientes y por nicho. Identificar los actores responsables y comprender las bases moleculares de estos mecanismos permite avanzar en el entendimiento de la evolución del holobionte planta, a la vez que genera herramientas para el desarrollo de estrategias biotecnológicas para el mejoramiento de la producción agronómica. En esta sesión se ilustrarán estos conceptos con contribuciones sobre la potencialidad de los bacteriófagos para el control de infecciones en repollo por parte de Xanthomonas campestris (a cargo del Dr. Jeroen Wagemans, de KU-Leuven, Bélgica), y sobre el impacto a nivel severidad de infección por parte de Botrytis sp. y la respuesta transcriptómica del tomate inoculado con microorganismos benéficos: Bacillus sp. individualmente o en combinación con Trichoderma sp. (a cargo de la Dra. Alexandra Stoll, de CEAZA, Chile)."
    },
    "promoción-directa-del-crecimiento-vegetal": {
      "conferencistas": ["euan-james", "agustin-grimoldi"],
      "coordinadores": "Coordinadoras: Dra. Fabiana Pezzani (Uruguay) y Dra. Verónica Reis (Brasil)",
      "horario": "Martes 5 de octubre",
      "nombre": "Promoción directa del crecimiento vegetal",
      "texto": "La microbiota asociada al sistema suelo-planta ha recibido gran atención surgiendo el concepto “holobionte planta”. El mismo define a la planta como un macro-ser compuesto por todos los organismos que viven sobre o en la misma, incluyendo las microbiotas. Dichas microbiotas están compuestas por complejas comunidades microbianas que juegan un rol fundamental en la protección contra estreses bióticos y abióticos, así como en la promoción del crecimiento vegetal (PCV), mediante diferentes mecanismos incluyendo la bioestimulación o la biodisponibilización de nutrientes. El objetivo de esta sesión es intercambiar sobre el estado del arte de la PCV directa desde diferentes miradas. En ese sentido el Dr Agustín Grimoldi, expondrá sobre el rol de los hongos micorrizógenos en su interacción con gramíneas y leguminosas en sistemas con diferentes disponibilidad de fósforo. Asimismo, el Dr Euan James expondrá sobre la relevancia de la fijación biológica del nitrógeno por cepas de rizobios en cultivos de leguminosas, en suelos sin historia. La comprensión del papel de la microbiota en el holobionte planta acaba de comenzar, siendo esperable y fundamental que los conocimientos sobre la diversidad y actividad de la misma contribuyan al entendimiento de la PCV y su aplicación biotecnológica."
    },
    "evolución-y-diversidad-de-mpvc": {
      "conferencistas": ["laila-pamela-martinez", "massimiliano-cardinale"],
      "coordinadores": "Coordinadores: Dra. Ana Fernandez (Uruguay) y Dr. Mariano Pistorio (Argentina)",
      "horario": "Miércoles 6 de octubre",
      "nombre": "Evolución y diversidad de MPVC",
      "texto": "Las plantas son sistemas altamente colonizados por microorganismos, cuya presencia determina el crecimiento y la sanidad de los cultivos. Debido al carácter ancestral de las asociaciones microbioma-planta se han observado distintos niveles de sofisticación en estas asociaciones, que incluyen tanto coevolución entre organismos como interacción de comunidades estructuradas complejas con el hospedero. Los cambios en la composición de la comunidad microbiana asociada pueden tener efectos positivos en la capacidad de adaptación a condiciones ambientales cambiantes o extremas y por tanto en la productividad de las plantas. Así, hospedadores y microbiomas constituyen sistemas biológicos complejos y dinámicos, en los cuales el mutualismo, por un lado, y el parasitismo y la patogenicidad por otro, están presentes como parte de un delgado equilibrio modulado fuertemente por el entorno y por las interacciones entre la comunidad microbiana asociada. La sesión Evolución y diversidad de Microorganismos Promotores del Crecimiento Vegetal (MPCV) está orientada a investigaciones relacionadas con la evolución y adaptación de los microorganismos al entorno y a su relación con las plantas. Además, se enfoca en la investigación de la interfaz microorganismo-hospedador, tanto las relaciones patógenas, parasíticas, como los mutualistas, así como también los estudios del microbioma."
    },
    "el-holobionte-planta": {
      "conferencistas": ["pablo-hardoim", "emanuel-de-souza"],
      "coordinadores": "Coordinadores: Dra. Elena Fabiano (Uruguay) y Dr. Antonio Lagares (Argentina)",
      "horario": "Miércoles 6 de octubre",
      "nombre": "El Holobionte Planta",
      "texto": "Próximamente más información"
    },
    "conservación-y-manejo-microbiano": {
      "conferencistas": ["mariana-sanchez", "alda-rodriguez"],
      "coordinadores": "Coordinadores: Dra. Natalia Bajsa (Uruguay) y Dr. Luis Wall (Argentina)",
      "horario": "Jueves 7 de octubre",
      "nombre": "Conservación y manejo microbiano en sistemas naturales y agroecosistemas",
      "texto": "Próximamente más información"
    },
    "del-laboratorio-al-campo": {
      "conferencistas": ["maria-caridad-napoles", "paula-aguilera"],
      "coordinadores": "Coordinadoras: Dra. Nora Altier (Uruguay) y Dra. Mariángela Hungría (Brasil)",
      "horario": "Jueves 7 de octubre",
      "nombre": "Del laboratorio al campo",
      "texto": "Próximamente más información"
    },
    "legislación-sobre-productos-microbianos": {
      "conferencistas": ["romina-almesia", "jerri-zilli"],
      "coordinadores": "Coordinadores: María Maryan (Uruguay) y Ing. Perticari (Argentina)",
      "horario": "Viernes 8 de octubre",
      "nombre": "Legislación sobre registro y empleo de productos microbianos",
      "texto": "Existen diferentes grados de avance en las normas sobre productos biológicos a nivel mundial. En Latinoamérica la industria de los biológicos se muestra muy activa y rica en iniciativas en casi todos los países y muchos de ellos cuentan con normativas para inoculantes formulados con bacterias del género rizobio y con otros PGPR con mecanismos de promoción directa sobre el crecimiento vegetal así como también para productos formulados con agentes de control biológico. En los últimos años han surgido nuevos productos, generalmente formulados con consorcios microbianos con diferentes funcionalidades que no se ajustan a las normas existentes. Esto ha llevado a que se utilicen una amplia variedad de términos para identificarlos (inoculantes, biofertilizantes, bioestimulantes, elicitores, bioinsumos, productos biológicos, etc.) generando confusión en su identificación. Es necesario contar con definiciones claras que nos permitan clasificar cada producto de acuerdo a su composición y efecto benéfico para poder contar con marcos normativos apropiados para su evaluación. Se deben concretar tecnologías innovadoras para la agricultura basadas en el conocimiento científico, y para ello es necesario un fuerte compromiso de las Empresas, la Academia y el Estado, acompañado de políticas de investigación, desarrollo y extensión respecto al uso de productos biológicos."
    },
  };

  conferencistas={
    "kornelia-smalla":{
      "bio": "",
      "horario": "15:00",
      "nombre": "Dra. Kornelia Smalla",
      "pais": "Alemania",
      "sid": "microbioma-agrícola",
      "texto": "",
      "titulo": "Próximamente más información"
    },
    "jorge-mazza-rodrigues":{
      "bio": "",
      "horario": "15:45",
      "nombre": "Dr. Jorge L. Mazza Rodrigues",
      "pais": "Brasil",
      "sid": "microbioma-agrícola",
      "texto": "",
      "titulo": "Próximamente más información"
    },
    "jeroen-wagemans":{
      "bio": "Dr. Jeroen Wagemans (PhD, 2014) is research manager at the Laboratory of Gene Technology (PI: Prof. Rob Lavigne) at KU Leuven (Belgium). In his research, he focuses on the application of bacteriophages, bacteria’s natural enemies, as biocontrol agents against phytopathogenic bacteria. Currently, he is working on phage biocontrol against several pathosystems such as black rot in cabbage (Xanthomonas campestris pv. campestris) and hairy roots disease in hydroponically grown tomato and cucumber (rhizogenic Agrobacterium).",
      "colaboradores": "Holtappels D., Fortuna, K., Van Vaerenbergh, J., Lavigne R. and Wagemans, J.",
      "horario": "10:00",
      "nombre": "Dr. Jeroen Wagemans",
      "pais": "Bélgica",
      "sid": "promoción-indirecta-del-crecimiento-vegetal",
      "texto": "Bacterial infections in agriculture are estimated to cause losses up to 10%. One of the culprits is Xanthomonas campestris pv. campestris (Xcc). These bacteria are known to cause black rot in cabbage (Brassica spp.). Until recently, bacterial infections were treated using copper-based chemicals and antibiotics like streptomycin. However, the use of these compounds is not sustainable since they are prone to resistance development and have a detrimental impact on the environment. A valuable alternative is the use of biocontrol agents like bacteriophages to fight bacterial infections.\n\nIn this regard, different phages were isolated to tackle Xcc infections. Our current Xcc phage collection can lyse about 85% of the strains relevant for agriculture in Belgium. These phages were investigated both genetically and microbiologically to determine their resistance potential, infection efficiency, biosafety and potential to be used in phage biocontrol using bioassays and field trials. Our promising results show that a strategy tailored to the pathosystem is key to implement phage biocontrol in integrated pest management strategies.",
      "titulo": "Phage biocontrol against Xanthomonas infections in cabbage"
    },
    "alexandra-stoll":{
      "bio": "Bióloga de formación (2001), de la Universidad Técnica de Dresden, Alemania. En la misma institución realicé mi doctorado (2005). Desde 2008 soy investigadora titular del CEAZA y desde 2012 lidero el laboratorio de Microbiología Aplicada. Este laboratorio incorpora investigación básica y aplicada enfocada en la identificación y caracterización de microorganismos y comunidades asociadas a la raíz vegetal, mecanismos involucrados en la interacción planta-bacteria y aplicaciones a la agricultura en zonas áridas.",
      "horario": "10:45",
      "nombre": "Dra. Alexandra Stoll",
      "pais": "Chile",
      "sid": "promoción-indirecta-del-crecimiento-vegetal",
      "texto": "",
      "titulo": "Próximamente más información"
    },
    "euan-james":{
      "bio": "Euan James is a researcher at the James Hutton Institute, Dundee, and has specialised in nitrogen fixation by legumes and non-legumes, particularly those from the tropics. His main techniques include high resolution microscopy (light and EM) and 15N-based methods, which in combination have been used to confirm the effectiveness of many novel nitrogen-fixing plant-bacterial interactions (leguminous and non-leguminous).",
      "colaboradores": "Euan K. James, Marta Maluk, Francesc Ferrando-Molina, Cathy Hawes, Richard S. Quilliam, Pietro P.M. Iannetta",
      "horario": "15:00",
      "nombre": "Dr. Euan James",
      "pais": "Inglaterra",
      "sid": "promoción-directa-del-crecimiento-vegetal",
      "texto": "Faba bean (Vicia faba L.) and pea (Pisum sativum L.) form nitrogen (N)-fixing symbioses with Rhizobium leguminosarum sv. viciae (Rlv), but little is known about their capacity for biological N fixation (BNF) in northern Europe, especially after prolonged periods without legume cropping, and hence with potentially low populations of effective Rlv genotypes. This was tested on faba bean over a four-year period using the 15N natural abundance method in an experimental field-scale rotation with no history of legume cropping for more than 50 years. Soil rhizobial populations before crop sowing were determined using qPCR, and the nodulating rhizobia were typed via their 16S rRNA, nodA and nodD genes. Faba bean obtained most of its N through BNF (>80%) regardless of plant genotype or year (2012–2015). Soil rhizobial populations were c. 106 R. leguminosarum cells and c. 105 Rlv nodD gene copy numbers g-1 soil dry weight regardless of field or treatment. The nodA and nodD genes of 157 strains of rhizobia grouped them into two large clades ofRlv, one consisting mainly of V. faba strains and the other of strains isolated from various hosts (V. faba, P. sativum, Lens culinaris, Vicia and Lathyrus spp.). It is concluded that faba bean (and pea) has a high reliance on BNF, but this is only possible due to the presence in the soil of sufficient numbers of effective Rlv strains; in the prolonged absence of legume cropping these may be derived from adjacent legume-cropped fields, and possibly also from native legumes in the field margins.",
      "titulo": "Rhizobial populations, diversity, nodulation, and its relevance to legume cropping"
    },
    "agustin-grimoldi":{
      "bio": "Agustín Grimoldi es Ingeniero Agrónomo (Universidad de Buenos Aires, Argentina) y Doctor en Ciencias Agrarias (Universidad Técnica de Munich, Alemania). Ahora, Profesor en la Cátedra de Forrajicultura de la Facultad de Agronomía (UBA, Argentina) e Investigador en el IFEVA-CONICET (Argentina). Su área de trabajo se enmarca en la ecofisiología de gramíneas y leguminosas forrajeras tanto en pasturas cultivadas como en pastizales naturales. En particular, efectos del pastoreo y relaciones costo-beneficio de la simbiosis entre plantas forrajeras y microorganismos en diferentes escenarios ambientales.",
      "horario": "15:45",
      "nombre": "Dr. Agustin Grimoldi",
      "pais": "Argentina",
      "sid": "promoción-directa-del-crecimiento-vegetal",
      "texto": "La simbiosis con hongos micorrícicos arbusculares (HMA) puede incrementar el estado nutritivo y el crecimiento de plantas forrajeras, especialmente debido a su efecto sobre la absorción de fósforo. Los HMA pueden consumir entre 4% y 20% de los fotoasimilados fijados diariamente por las plantas, lo cual los constituye en un importante componente en la economía de carbono. Por ende, el efecto neto de los HMA sobre la planta depende de la relación costo-beneficio en el contexto ambiental de fósforo en el suelo. Se presentarán resultados experimentales de promoción del crecimiento y del rebrote post-defoliación en plantas micorrícicas de gramíneas templadas (C3), gramíneas megatérmicas (C4) y leguminosas forrajeras en diferentes condiciones de disponibilidad de fósforo del suelo",
      "titulo": "Promoción del crecimiento de plantas forrajeras por micorrizas"
    },
    "laila-pamela-martinez":{
      "bio": "Investigadora principal del Laboratorio de Interacciones Microbianas de la Unidad Irapuato del Cinvestav en México. Mi investigación se centra en descifrar los mecanismos, y las implicaciones ecológicas y evolutivas de las interacciones entre las plantas y los microorganismos en ambientes áridos, así como en la simbiosis hongo-bacteria-virus.",
      "horario": "10:00",
      "nombre": "Dra. Laila Pamela Martínez",
      "pais": "México",
      "sid": "evolución-y-diversidad-de-mpvc",
      "texto": "En esta ponencia hablaremos de la diversidad y funciones del microbioma de los agaves y cactus y su potencial para contribuir a la agricultura sustentable en las zonas áridas.",
      "titulo": "El microbioma de los Agaves y Cactus como modelos para un planeta en calentamiento"
    },
    "massimiliano-cardinale":{
      "bio": "Massimiliano Cardinale is a microbial ecologist interested in plant-microbe interactions and applications of beneficial microbes in agriculture. His research spreads from the study of specific beneficial symbioses, such as legume-rhizobia and mycorrhiza, to the exploration and exploitation of the plant associated microbiome, with a special focus on the less investigated plant habitats, such as the plant reproductive organs.",
      "horario": "10:45",
      "nombre": "Dr. Massimiliano Cardinale",
      "pais": "Italia",
      "sid": "evolución-y-diversidad-de-mpvc",
      "texto": "Próximamente más información",
      "titulo": "The microbiome of seeds and plant reproductive organs: diversity, co-evolution with the plant, and biotechnological potential for agriculture"
    },
    "pablo-hardoim":{
      "bio": "",
      "horario": "15:00",
      "nombre": "Dr. Pablo Hardoim",
      "pais": "Brasil",
      "sid": "el-holobionte-planta",
      "texto": "",
      "titulo": "Próximamente más información"
    },
    "emanuel-de-souza":{
      "bio": "",
      "horario": "15:45",
      "nombre": "Dr. Emanuel de Souza",
      "pais": "Brasil",
      "sid": "el-holobionte-planta",
      "texto": "",
      "titulo": "Próximamente más información"
    },
    "mariana-sanchez":{
      "bio": "La profesora Mariana Sanchez es Ingeniera Agrónoma, Maestra en Administración de Empresas y en Suelos y Aguas, Doctor Ingeniero Agrónomo de la Universidad Politécnica ETSIA Madrid Área de énfasis en Tecnologías Agroambientales. Profesora Titular de Dedicación Exclusiva, Tenente de Cargo de la Universidad Nacional de Colombia-Sede Palmira, Investigadora Emérita del Departamento Administrativo de Ciencia, Tecnología e Innovación COLCIENCIAS, coordinadora grupo de investigación en Agroecología,  sus áreas de trabajo: Microbiología Agrícola, Biología y Microbiología del Suelo, Fitopatología con énfasis en hongos y bacterias, Agricultura Ecológica y en este momento integra desde su experiencia todas estas áreas en la Agroecología.",
      "horario": "10:00",
      "nombre": "Dra. Mariana Sánchez",
      "pais": "Colombia",
      "sid": "conservación-y-manejo-microbiano",
      "texto": "",
      "titulo": "Próximamente más información"
    },
    "alda-rodriguez":{
      "bio": "Oriunda de Tacuarembó Uruguay, madre de cuatro hijos, es Ingeniera Agrónoma (título otorgado por la Facultad de Agronomía de la Universidad de la República) y Doctora en Ciencias Agrarias (título otorgado por la Universidad Agraria de la Habana-Cuba). Se desempeña como Responsable Norte del Sistema Nacional de Áreas Protegidas y directora técnica científica del Batoví Instituto Orgánico. Además ha desarrollado diversas consultorías en organizaciones nacionales e internacionales tales como la Cooperación Técnica Alemana (GTZ), la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), el Programa de las Naciones Unidas para el Desarrollo (PNUD) entre otros. Ha publicado más de 20 artículos científicos y 3 libros de autoría propia. Ha capacitado y acompañado técnicamente a más de 100 productores familiares en la implementación de sistemas agroecológicos de producción.",
      "horario": "10:45",
      "nombre": "Dra. Alda Rodríguez",
      "pais": "Uruguay",
      "sid": "conservación-y-manejo-microbiano",
      "texto": "Próximamente más información",
      "titulo": "Bioinsumos: logros y desafíos en el desarrollo de la agroecología en Uruguay"
    },
    "maria-caridad-napoles":{
      "bio": "Lic. en Microbiología, Universidad de la Habana, Investigador y Profesor Titular del Instituto Nacional de Ciencias Agrícolas. Presidenta del Consejo Científico del INCA, Miembro del Consejo Técnico Asesor del Ministerio de Educación Superior y Miembro Titular de la Academia de Ciencias de Cuba. Coordinadora por Cuba de la Asociación Latinoamericana de Rizobiología.",
      "horario": "15:00",
      "nombre": "Dra. C. María Caridad Nápoles",
      "pais": "Cuba",
      "sid": "del-laboratorio-al-campo",
      "texto": "Resumen: Resulta cada vez más clara la necesidad de garantizar alimentos para una población creciente, conservando la fertilidad de los suelos y respetando el medio ambiente. Si existía alguna duda, la crisis impuesta por la pandemia que hoy vivimos, ha reforzado esta realidad. Este milenio ha reconocido de forma creciente el papel que juegan los procesos biológicos en el funcionamiento de la biosfera, pero en particular del suelo y de la producción agrícola. El uso de productos compuestos por microorganismos benéficos, ya sean fitoestimulantes, biofertilizantes o agentes de biocontrol, constituye una estrategia tecnológica cada vez más aceptada en las prácticas agrícolas sustentables, con lo cual cada vez son más los centros de investigación y grandes compañías que dedican recursos económicos y humanos a la búsqueda de nuevos bioproductos. En esta charla, trataremos de ejemplificar brevemente, utilizando la experiencia de Cuba, cuál ha sido el camino recorrido para convertir una cepa aislada de entre millones que se asocian a un cultivo, en un producto que regresa al campo para potenciar sus bondades y colaborar con el crecimiento, desarrollo y rendimiento de cultivos de interés.",
      "titulo": "Necesidad de una agricultura autosustentable, generación de productos microbianos desde el laboratorio hasta el campo. Caso Cuba."
    },
    "paula-aguilera":{
      "bio": "",
      "horario": "15:45",
      "nombre": "Dra. Paula Aguilera",
      "pais": "Chile",
      "sid": "del-laboratorio-al-campo",
      "texto": "",
      "titulo": "Próximamente más información"
    },
    "romina-almesia":{
      "bio": "Magíster Cs en área de ecología molecular microbiana e Ingeniera en Biotecnología molecular de la Universidad de Chile. Experiencia en empresas de bioinsumos agrícolas, gestionando y dirigiendo desarrollos desde el laboratorio al mercado, ejerciendo en i+D+i. Asesor de registros de productos agrícolas biológicos ante el SAG en Chile y a nivel internacional. Consultor de patentes de invención. Directora y Vicepresidenta de la Red Chilena de Bioinsumos.",
      "horario": "10:00",
      "nombre": "Mag. Bio. Romina Almesía",
      "pais": "Chile",
      "sid": "legislación-sobre-productos-microbianos",
      "texto": "",
      "titulo": "Próximamente más información"
    },
    "jerri-zilli":{
      "bio": "Doctor en Agronomía-Ciencias del Suelo por la Universidad Federal Rural de Rio de Janeiro y Postdoctorado por la Universidad de Murdoch en Australia. Investigador de Embrapa Brasileira de Pesquisa Agropecuária (Embrapa) desde 2003, en el área de Microbiología de suelos, fijación biológica de nitrógeno, fitotecnia y taxonomía microbiana. Es conservador de la colección Cultures del Centro de Recursos Biológicos Johanna Döbereiner.",
      "horario": "10:45",
      "nombre": "Dr. Jerri Zilli",
      "pais": "Brasil",
      "sid": "legislación-sobre-productos-microbianos",
      "texto": "",
      "titulo": "Próximamente más información"
    }
  }

  getSesion = ( id: string ) => this.data[id];
  getConferencista = ( cid: string ) => this.conferencistas[cid];
  getConferencistaName = ( cid: string ) => this.conferencistas[cid].nombre;
  constructor() {}

  /*
  private fromJSONtoArray( conferencistasObj : Object ){

    const conferencistasArray : Conferencista[] = [];
    if( conferencistasObj === null ) return [];

    Object.keys( conferencistasObj ).forEach(
      (key) =>{
        const conferencista: Conferencista = conferencistasObj[key];
        conferencista.id = key;
        conferencistasArray.push(conferencista);
    })

    return conferencistasArray;
  }
  */
}
