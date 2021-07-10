import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sesiones={
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
    "evolución-y-diversidad-de-mpcv": {
      "conferencistas": ["laila-pamela-martinez", "massimiliano-cardinale"],
      "coordinadores": "Coordinadores: Dra. Ana Fernandez (Uruguay) y Dr. Mariano Pistorio (Argentina)",
      "horario": "Miércoles 6 de octubre",
      "nombre": "Evolución y diversidad de microorganismos promotores de crecimiento vegetal (MPCV)",
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
      "conferencistas": ["marina-sanchez", "alda-rodriguez"],
      "coordinadores": "Coordinadores: Dra. Natalia Bajsa (Uruguay) y Dr. Luis Wall (Argentina)",
      "horario": "Jueves 7 de octubre",
      "nombre": "Conservación y manejo microbiano en sistemas naturales y agroecosistemas",
      "texto": `
      <p>El suelo es uno de los reservorios de mayor biodiversidad del planeta, en particular a nivel microbiológico. Estos microorganismos son muy numerosos y cumplen funciones clave en el suelo y en relación al ambiente, ya sea en ecosistemas naturales como en aquellos dedicados a la producción agropecuaria.</p>
      <p>En esta sesión abordaremos la importancia de la conservación de los microbiomas del suelo y los asociados a las plantas. Las prácticas  agropecuarias convencionales han tenido importantes impactos sobre la biodiversidad de los suelos. La conservación y recuperación de los mismos es fundamental para producir alimentos en forma sustentable y para preservar servicios ecosistémicos. Se han desarrollado formas alternativas de producción (agricultura orgánica, regenerativa, agroecología, entre otras) que reconocen la importancia de la microbiota y apuntan a su conservación. Prácticas de manejo del suelo y de los cultivos que favorezcan los microbiomas del sistema, así como el uso de biofertilizantes y agentes de control biológico, son herramientas fundamentales para la transición a sistemas de producción más sostenibles, que incorporen los aportes de los microorganismos en la producción de alimentos.</p>
      `
    },
    "del-laboratorio-al-campo": {
      "conferencistas": ["maria-caridad-napoles", "paula-aguilera"],
      "coordinadores": "Coordinadoras: Dra. Nora Altier (Uruguay) y Dra. Mariángela Hungría (Brasil)",
      "horario": "Jueves 7 de octubre",
      "nombre": "Del laboratorio al campo",
      "texto": `
      <p>El concepto de intensificación sostenible de los sistemas productivos requiere gestionar la biodiversidad y los servicios ecosistémicos, mediante la promoción de estrategias para el manejo sanitario y nutricional de los cultivos que mitiguen los riesgos asociados al uso de agroquímicos.</p>
      <p>El desarrollo de productos microbianos de uso agrícola se basa en el reconocimiento de la diversidad y la multifuncionalidad presente en el microbioma, estudiando los procesos biológicos y las características asociadas a la protección y nutrición vegetal. El desafío es identificar cepas con la función deseada que puedan ser utilizadas para desarrollar un producto tecnológico, a través de los procesos de bioproducción y formulación, y ser escaladas a nivel industrial con fines de comercialización y uso en los agroecosistemas.</p>
      <p>El objetivo de esta sesión es promover el intercambio de conocimiento y las perspectivas de la investigación en bioinsumos agrícolas, recorriendo un camino que comienza en el laboratorio y finaliza en el campo. La Dra. María Caridad Nápoles expondrá sobre la generación de productos microbianos como pilar de una agricultura autosustentable, describiendo el caso de Cuba. La Dra. Paula Aguilera expondrá sobre el inoculante MYCONATIVA®, desarrollado en base a hongos nativos micorrícicos arbusculares, describiendo los beneficios asociados a su uso.</p>
      `
    },
    "legislación-sobre-productos-microbianos": {
      "conferencistas": ["romina-almesia", "jerri-zilli"],
      "coordinadores": "Coordinadores: Lic. Bioq. María Maryan (Uruguay) y Ing. Perticari (Argentina)",
      "horario": "Viernes 8 de octubre",
      "nombre": "Legislación sobre registro y empleo de productos microbianos",
      "texto": "Existen diferentes grados de avance en las normas sobre productos biológicos a nivel mundial. En Latinoamérica la industria de los biológicos se muestra muy activa y rica en iniciativas en casi todos los países y muchos de ellos cuentan con normativas para inoculantes formulados con bacterias del género rizobio y con otros PGPR con mecanismos de promoción directa sobre el crecimiento vegetal así como también para productos formulados con agentes de control biológico. En los últimos años han surgido nuevos productos, generalmente formulados con consorcios microbianos con diferentes funcionalidades que no se ajustan a las normas existentes. Esto ha llevado a que se utilicen una amplia variedad de términos para identificarlos (inoculantes, biofertilizantes, bioestimulantes, elicitores, bioinsumos, productos biológicos, etc.) generando confusión en su identificación. Es necesario contar con definiciones claras que nos permitan clasificar cada producto de acuerdo a su composición y efecto benéfico para poder contar con marcos normativos apropiados para su evaluación. Se deben concretar tecnologías innovadoras para la agricultura basadas en el conocimiento científico, y para ello es necesario un fuerte compromiso de las Empresas, la Academia y el Estado, acompañado de políticas de investigación, desarrollo y extensión respecto al uso de productos biológicos."
    },
  };

  conferencistas={
    "kornelia-smalla":{
      "bio": "Professor Dr. Dr. h.c. Kornelia Smalla is the head of the microbial ecology group in the Institute for Epidemiology and Pathogen Diagnostics at the Julius Kühn-Institut (JKI), Federal Research Centre for Cultivated Plants, in Braunschweig. She studied chemistry and did her PhD in biochemistry at the Martin-Luther-University in Halle. The venia legendi for microbiology was obtained at the Technical University Braunschweig where she is an adjunct Professor for Microbiology. From the beginning of the 1990’s Kornelia Smalla contributed to the field of molecular microbial ecology and microbiome research. Cultivation-independent methods were developed to study the microbiome of soils or of plants and how the composition and functions of complex microbiomes are affected by agricultural management practice. The group is interested in developing methods to manage and stimulate the soil microbiome by reduced tillage, organic amendments or inoculants. Another research interest of the group are the factors that shape the transferable resistome and plasmid-mediated bacterial adaptation to changing environments.",
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
      "bio": "La Dra. Alexandra Stoll obtuvo su título en Biología (2001) en la Universidad Técnica de Dresden, Alemania, donde también realizó su doctorado (2005). Desde 2008 se desempeña como investigadora titular del Centro de Estudios Avanzados en Zonas Áridas (CEAZA, Chile) y desde 2012 lidera el Laboratorio de Microbiología Aplicada. Sus líneas principales de investigación se centran en la identificación y caracterización de microorganismos y comunidades asociadas a la raíz vegetal, los mecanismos involucrados en la interacción planta-bacteria, y aplicaciones para la agricultura en zonas áridas. En esta línea emplean un enfoque holístico de ecología vegetal y microbiana, incluida su interacción, en ecosistemas naturales y agrícolas de zonas áridas. Además, promueve la divulgación a la sociedad y socios empresariales (transferencia tecnológica), y realiza capacitaciones para agricultores regionales.",
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
      "sid": "evolución-y-diversidad-de-mpcv",
      "texto": "En esta ponencia hablaremos de la diversidad y funciones del microbioma de los agaves y cactus y su potencial para contribuir a la agricultura sustentable en las zonas áridas.",
      "titulo": "El microbioma de los Agaves y Cactus como modelos para un planeta en calentamiento"
    },
    "massimiliano-cardinale":{
      "bio": "Massimiliano Cardinale is a microbial ecologist interested in plant-microbe interactions and applications of beneficial microbes in agriculture. His research spreads from the study of specific beneficial symbioses, such as legume-rhizobia and mycorrhiza, to the exploration and exploitation of the plant associated microbiome, with a special focus on the less investigated plant habitats, such as the plant reproductive organs.",
      "horario": "10:45",
      "nombre": "Dr. Massimiliano Cardinale",
      "pais": "Italia",
      "sid": "evolución-y-diversidad-de-mpcv",
      "texto": "Próximamente más información",
      "titulo": "The microbiome of seeds and plant reproductive organs: diversity, co-evolution with the plant, and biotechnological potential for agriculture"
    },
    "pablo-hardoim":{
      "bio": "Agronomist from the Federal University of Lavras (UFLA), with M.Sc. in soil fertility and plant nutrition from the Luiz de Queiroz College of Agriculture, University of São Paulo (ESALQ-USP) and Ph.D. in microbial ecology from the University of Groningen (RUG), The Netherlands. He has nearly twenty years of experience in the studies of interaction between plants and microbial mutualisms with emphasis on endophytes. Today, he works as a consultant on the implementation of crop management for the development of sustainable agriculture.",
      "horario": "15:00",
      "nombre": "Dr. Pablo Hardoim",
      "pais": "Brasil",
      "sid": "el-holobionte-planta",
      "texto": "Próximamente más información",
      "titulo": "Structural and functional plasticity in plants through microbial partners: a holistic approach"
    },
    "emanuel-de-souza":{
      "bio": "Possui graduação em Farmacia e Bioquimica pela Universidade Federal do Paraná (1984) e doutorado em Ciências (Bioquímica) pela Universidade Federal do Paraná (1990). Atualmente é Professor Titular da Universidade Federal do Paraná. Tem experiência na área de Bioquímica, com ênfase em Biologia Molecular. Atua principalmente nos seguintes temas: fixação biológica de nitrogênio, regulação da expressão gênica em Azospirillum brasilense e Herbaspirillium seropedicae, expressão e purificação de proteínas em Escherichia coli e mecanismos moleculares da interacao planta-bactéria.",
      "horario": "15:45",
      "nombre": "Dr. Emanuel de Souza",
      "pais": "Brasil",
      "sid": "el-holobionte-planta",
      "texto": "",
      "titulo": "Próximamente más información"
    },
    "marina-sanchez":{
      "bio": "La profesora Marina Sanchez es Ingeniera Agrónoma, Maestra en Administración de Empresas y en Suelos y Aguas, Doctor Ingeniero Agrónomo de la Universidad Politécnica ETSIA Madrid Área de énfasis en Tecnologías Agroambientales. Profesora Titular de Dedicación Exclusiva, Tenente de Cargo de la Universidad Nacional de Colombia-Sede Palmira, Investigadora Emérita del Departamento Administrativo de Ciencia, Tecnología e Innovación COLCIENCIAS, coordinadora grupo de investigación en Agroecología,  sus áreas de trabajo: Microbiología Agrícola, Biología y Microbiología del Suelo, Fitopatología con énfasis en hongos y bacterias, Agricultura Ecológica y en este momento integra desde su experiencia todas estas áreas en la Agroecología.",
      "horario": "10:00",
      "nombre": "Dra. Marina Sánchez",
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
      "texto": "Resulta cada vez más clara la necesidad de garantizar alimentos para una población creciente, conservando la fertilidad de los suelos y respetando el medio ambiente. Si existía alguna duda, la crisis impuesta por la pandemia que hoy vivimos, ha reforzado esta realidad. Este milenio ha reconocido de forma creciente el papel que juegan los procesos biológicos en el funcionamiento de la biosfera, pero en particular del suelo y de la producción agrícola. El uso de productos compuestos por microorganismos benéficos, ya sean fitoestimulantes, biofertilizantes o agentes de biocontrol, constituye una estrategia tecnológica cada vez más aceptada en las prácticas agrícolas sustentables, con lo cual cada vez son más los centros de investigación y grandes compañías que dedican recursos económicos y humanos a la búsqueda de nuevos bioproductos. En esta charla, trataremos de ejemplificar brevemente, utilizando la experiencia de Cuba, cuál ha sido el camino recorrido para convertir una cepa aislada de entre millones que se asocian a un cultivo, en un producto que regresa al campo para potenciar sus bondades y colaborar con el crecimiento, desarrollo y rendimiento de cultivos de interés.",
      "titulo": "Necesidad de una agricultura autosustentable, generación de productos microbianos desde el laboratorio hasta el campo: Caso Cuba."
    },
    "paula-aguilera":{
      "bio": "Académico, Investigador, Encargada de Transferencia Tecnológica en Núcleo Científico Tecnológico (BIOREN-UFRO), Universidad de la Frontera. Ing. Agrónomo, Magíster y Doctorado en Ciencias de Recursos Naturales. Co-fundadora de la Red Sudamericana de Micorrizas “South American Mycorrhizal Network” y Fundadora de la Empresa de Base Científico Tecnológica (EBCT) Myconativa Ltda.",
      "horario": "15:45",
      "nombre": "Dra. Paula Aguilera",
      "pais": "Chile",
      "sid": "del-laboratorio-al-campo",
      "texto": "La StartUp Myconativa es una empresa impulsada desde la academia que genera bioproductos a partir de la investigación y a la vez entrega servicios tecnológicos e instrucción. Los resultados de una tesis de doctorado permitieron transformar el know how en tecnología, esto fue posible debido al cofinanciamiento de instrumentos nacionales, al patrocinio de la Universidad de la Frontera y al campo experimental de la empresa. Como empresa buscamos incorporar tecnologías que otorguen un manejo productivo sustentable a la agricultura, con énfasis en el valor nutricional y funcional de productos que proporciona la fruticultura, horticultura, enología. Al mismo tiempo, favorecer la conservación de los ecosistemas mediante la restauración ecológica y la biorremediación. Los bioproductos corresponden a biofertilizantes, enraizantes, fortificantes, bioestimulantes que se pueden aplicar en plantas de hortalizas, frutales, ornamentales en diferentes etapas del cultivo, así como en la biorremediación y conservación de ecosistemas. La base de los bioproductos generados hasta ahora por nuestra empresa, está constituida por hongos benéficos nativos extraídos desde suelos chilenos que al colonizar la raíz se denominan micorrizas. Los hongos formadores de micorrizas aportan a la fertilización bioquímica. MYCONATIVA® es el primer bioproducto inoculante desarrollado en nuestra empresa y ha sido diseñado en base a hongos nativos micorrícicos arbusculares aislados desde la región de La Araucanía para su uso como vigorizador de plantas agrícolas producidas en vivero o almácigo. Es un biofortificante con micorrizas que favorece la conducción de agua, nutrientes, estimula la germinación, emergencia, enraizamiento, floración, producción de biomasa y producto final. Pantas inoculadas con MYCONATIVA® toleran mayor estrés ambiental y resistencia al déficit hídrico. Las micorrizas corresponden a una simbiosis entre hongos benéficos y las raíces de las plantas, el hongo incrementa la capacidad de absorción de agua, macro y micronutrientes, aumenta la resistencia de las plantas hacia las enfermedades, científicamente se ha evidenciado que beneficia a plantas que viven en estrés hídrico, salinidad, presencia de contaminantes, a cambio la planta le entrega al hongo los productos carbonados de la fotosíntesis para que ellos puedan vivir. Se presentarán casos de Estudio de Campo.",
      "titulo": "Experiencia Myconativa: Desde la Ciencia hacia la Innovación"
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
    },
    "mariangela-hungria":{
      "nombre": "Dra. Mariangela Hungría",
      "pais": "Brasil"
    },
    "esperanza-martinez":{
      "nombre": "Dra. Esperanza Martinez",
      "pais": "México"
    },
    "pedro-lage":{
      "nombre": "Ing. Pedro Lage",
      "institucion": "Empresa LAge y Cía - Lallemand",
      "pais": "Uruguay",
      "url": "https://www.lallemand.com/"
    },
    "tomas-krostch":{
      "nombre": "Sr. Tomás Krostch",
      "institucion": "Instituto Interamericano de Cooperación para la Agricultura - IICA",
      "pais": "Argentina",
      "url": "https://iica.int/es"
    },
    "jose-roberto-pereira":{
      "nombre": "Sr. Jose Roberto Pereira",
      "institucion": "Asociación Nacional de Productores e Importadores de Inoculantes - ANPII",
      "pais": "Brasil",
      "url": "http://www.anpii.org.br/"
    },
    "maribel-parada":{
      "nombre": "Dra. Maribel Parada",
      "institucion": "Red Chilena de Bioinsumos",
      "pais": "Chile",
      "url": "https://bioinsumos.cl/"
    },
    "roberto-rapella":{
      "nombre": "Sr. Roberto Rapella",
      "institucion": "Cámara Argentina de Bioinsumos - CABIO",
      "pais": "Argentina",
      "url": "http://www.cabio.com.ar/"
    }
  }

  mesas={
    "mujeres-en-la-ciencia": {
      "conferencistas": ["mariangela-hungria", "esperanza-martinez"],
      "coordinadores": "Coordinadora: Dra. Silvia Batista (Uruguay)",
      "horario": "Lunes 4 de octubre",
      "nombre": "Mujeres en la ciencia",
      "texto": "La Mesa redonda propone presentar la participación de las mujeres en la ciencia en algunos países de la región, incorporando los datos generados a partir de distintas instituciones y comisiones de género que se encuentran trabajando en el tema. Asimismo, se debatirá sobre las medidas que podrían adoptarse para incentivar que las mujeres opten por estas carreras y en particular, formarse como líderes referentes."
    },
    "bioinsumos": {
      "conferencistas": ["pedro-lage", "tomas-krostch", "jose-roberto-pereira", "maribel-parada", "roberto-rapella"],
      "coordinadores": "Coordinadores: Dr. Federico Battistoni (Uruguay) y Dr. Fabricio Cassan (Brasil)",
      "horario": "Lunes 4 de octubre",
      "nombre": "Actores involucrados en el desarrollo y aplicación de bioinsumos: ¿Es posible un modelo alternativo de producción?",
      "texto": "Uno de los principales desafíos del siglo XXI es cubrir la alta demanda alimenticia de la población mundial. En ese sentido, los sistemas productivos actuales basados en prácticas agrícolas focalizadas en el uso de agroquímicos, han llegado a su límite de sustentabilidad ambiental y económica. Para lograr un cambio significativo, nuevas prácticas agrícolas sustentables son necesarias de investigar y desarrollar. En este contexto, los microorganismos naturalmente asociados al sistema suelo-planta juegan un rol fundamental, debido a su ampliamente demostrada capacidad de promover el crecimiento vegetal directa o indirectamente. Este cambio de paradigma implica el esfuerzo de diferentes actores en la cadena productiva, en un camino no exento de adversidades. La finalidad de esta actividad, es fomentar el intercambio de experiencias entre diferentes actores internacionales involucrados en el desarrollo, producción y aplicación de bioinsumos basados en microorganismos promotores del crecimiento vegetal. Para esto, la mesa redonda cuenta con una diversidad de panelistas provenientes de Argentina, Brasil, Chile y Uruguay, así como de un organismo interamericano; que expondrán sobre las ventajas y limitaciones de la aplicación de bioinsumos en los sistemas productivos. Se propone el intercambio de opiniones en base a la necesidad y posibilidad de desarrollar modelos alternativos de producción más sustentables basadas en bioinsumos."
    }
  }



  getSesion = ( id: string ) => this.sesiones[id];
  getMesa = ( id: string ) => this.mesas[id];
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
