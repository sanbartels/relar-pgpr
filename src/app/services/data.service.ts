import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LangService } from './lang.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../components/dialogs/pop-up-home.component';
import { Conferencista } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "https://relar-pgpr-default-rtdb.firebaseio.com/data";
  public paises = [
    "AD","AE","AF","AG","AL","AM","AO","AR","AT","AU","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BN","BO","BR","BS","BT","BW","BY","BZ","CA","CD","CF","CG","CH","CI","CL","CM","CN","CO","CR","CU","CV","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","ER","ES","ET","FI","FJ","FM","FR","GA","GB","GD","GE","GH","GM","GN","GQ","GR","GT","GW","GY","HN","HR","HT","HU","ID","IE","IL","IN","IQ","IR","IS","IT","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MG","MH","MK","ML","MM","MN","MR","MT","MU","MV","MW","MX","MY","MZ","NA","NE","NG","NI","NL","NO","NP","NR","NZ","OM","PA","PE","PG","PH","PK","PL","PT","PW","PY","QA","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SI","SK","SL","SM","SN","SO","SR","SS","ST","SV","SY","SZ","TD","TG","TH","TJ","TL","TM","TN","TO","TR","TT","TV","TZ","UA","UG","US","UY","UZ","VC","VE","VN","VU","WS","YE","ZA","ZM","ZW"
  ];
  public data = {
    "conferencistas" : {
      "agustin-grimoldi" : {
        "_en" : {
          "bio" : "Agustín Grimoldi es Ingeniero Agrónomo (Universidad de Buenos Aires, Argentina) y Doctor en Ciencias Agrarias (Universidad Técnica de Munich, Alemania). Ahora, Profesor en la Cátedra de Forrajicultura de la Facultad de Agronomía (UBA, Argentina) e Investigador en el IFEVA-CONICET (Argentina). Su área de trabajo se enmarca en la ecofisiología de gramíneas y leguminosas forrajeras tanto en pasturas cultivadas como en pastizales naturales. En particular, efectos del pastoreo y relaciones costo-beneficio de la simbiosis entre plantas forrajeras y microorganismos en diferentes escenarios ambientales.",
          "texto" : "La simbiosis con hongos micorrícicos arbusculares (HMA) puede incrementar el estado nutritivo y el crecimiento de plantas forrajeras, especialmente debido a su efecto sobre la absorción de fósforo. Los HMA pueden consumir entre 4% y 20% de los fotoasimilados fijados diariamente por las plantas, lo cual los constituye en un importante componente en la economía de carbono. Por ende, el efecto neto de los HMA sobre la planta depende de la relación costo-beneficio en el contexto ambiental de fósforo en el suelo. Se presentarán resultados experimentales de promoción del crecimiento y del rebrote post-defoliación en plantas micorrícicas de gramíneas templadas (C3), gramíneas megatérmicas (C4) y leguminosas forrajeras en diferentes condiciones de disponibilidad de fósforo del suelo",
          "titulo" : "Promoción del crecimiento de plantas forrajeras por micorrizas"
        },
        "_es" : {
          "bio" : "Agustín Grimoldi es Ingeniero Agrónomo (Universidad de Buenos Aires, Argentina) y Doctor en Ciencias Agrarias (Universidad Técnica de Munich, Alemania). Ahora, Profesor en la Cátedra de Forrajicultura de la Facultad de Agronomía (UBA, Argentina) e Investigador en el IFEVA-CONICET (Argentina). Su área de trabajo se enmarca en ecofisiología de gramíneas y leguminosas forrajeras tanto en pasturas cultivadas como en pastizales naturales. En particular, efectos del pastoreo y relaciones costo-beneficio de la simbiosis entre plantas forrajeras y microorganismos en diferentes escenarios ambientales.",
          "texto" : "La simbiosis con hongos micorrícicos arbusculares (HMA) puede incrementar el estado nutritivo y el crecimiento de plantas forrajeras, especialmente debido a su efecto sobre la absorción de fósforo. Los HMA pueden consumir entre 4% y 20% de los fotoasimilados fijados diariamente por las plantas, lo cual los constituye en un importante componente en la economía de carbono. Por ende, el efecto neto de los HMA sobre la planta depende de la relación costo-beneficio en el contexto ambiental de fósforo en el suelo. Se presentarán resultados experimentales de promoción del crecimiento y del rebrote post-defoliación en plantas micorrícicas de gramíneas templadas (C3), gramíneas megatérmicas (C4) y leguminosas forrajeras en diferentes condiciones de disponibilidad de fósforo del suelo.",
          "titulo" : "Promoción del crecimiento de plantas forrajeras por micorrizas"
        },
        "_pt" : {
          "bio" : "Agustín Grimoldi es Ingeniero Agrónomo (Universidad de Buenos Aires, Argentina) y Doctor en Ciencias Agrarias (Universidad Técnica de Munich, Alemania). Ahora, Profesor en la Cátedra de Forrajicultura de la Facultad de Agronomía (UBA, Argentina) e Investigador en el IFEVA-CONICET (Argentina). Su área de trabajo se enmarca en la ecofisiología de gramíneas y leguminosas forrajeras tanto en pasturas cultivadas como en pastizales naturales. En particular, efectos del pastoreo y relaciones costo-beneficio de la simbiosis entre plantas forrajeras y microorganismos en diferentes escenarios ambientales.",
          "texto" : "La simbiosis con hongos micorrícicos arbusculares (HMA) puede incrementar el estado nutritivo y el crecimiento de plantas forrajeras, especialmente debido a su efecto sobre la absorción de fósforo. Los HMA pueden consumir entre 4% y 20% de los fotoasimilados fijados diariamente por las plantas, lo cual los constituye en un importante componente en la economía de carbono. Por ende, el efecto neto de los HMA sobre la planta depende de la relación costo-beneficio en el contexto ambiental de fósforo en el suelo. Se presentarán resultados experimentales de promoción del crecimiento y del rebrote post-defoliación en plantas micorrícicas de gramíneas templadas (C3), gramíneas megatérmicas (C4) y leguminosas forrajeras en diferentes condiciones de disponibilidad de fósforo del suelo",
          "titulo" : "Promoción del crecimiento de plantas forrajeras por micorrizas"
        },
        "horario" : "15:45",
        "nombre" : "Dr. Agustin Grimoldi",
        "pais" : "AR",
        "sid" : "promoción-directa-del-crecimiento-vegetal"
      },
      "alda-rodriguez" : {
        "_en" : {
          "bio" : "Oriunda de Tacuarembó Uruguay, madre de cuatro hijos, es Ingeniera Agrónoma (título otorgado por la Facultad de Agronomía de la Universidad de la República) y Doctora en Ciencias Agrarias (título otorgado por la Universidad Agraria de la Habana-Cuba). Se desempeña como Responsable Norte del Sistema Nacional de Áreas Protegidas y directora técnica científica del Batoví Instituto Orgánico. Además ha desarrollado diversas consultorías en organizaciones nacionales e internacionales tales como la Cooperación Técnica Alemana (GTZ), la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), el Programa de las Naciones Unidas para el Desarrollo (PNUD) entre otros. Ha publicado más de 20 artículos científicos y 3 libros de autoría propia. Ha capacitado y acompañado técnicamente a más de 100 productores familiares en la implementación de sistemas agroecológicos de producción.",
          "texto" : "Próximamente más información",
          "titulo" : "Bioinsumos: logros y desafíos en el desarrollo de la agroecología en Uruguay"
        },
        "_es" : {
          "bio" : "Oriunda de Tacuarembó Uruguay, madre de cuatro hijos, es Ingeniera Agrónoma   (título otorgado por la Facultad de Agronomía de la Universidad de la República) y Doctora en Ciencias Agrarias (título otorgado por la Universidad Agraria de la Habana-Cuba). Se desempeña como directora técnica científica del Batoví Instituto Orgánico. Además ha desarrollado diversas consultorías en organizaciones nacionales e internacionales tales como la Cooperación Técnica  Alemana (GTZ), la Organización de las Naciones Unidas  para la Alimentación  y la Agricultura (FAO), el Programa de las Naciones Unidas para el Desarrollo (PNUD) entre otros. Ha publicado mas de 20 artículos científicos y 3 libros de autoría propia. Ha capacitado y acompañado técnicamente a  productores familiares en la implementación de sistemas agroecológicos de producción.",
          "texto" : "A través de un proceso de co-innovación para la obtención de soluciones biológicas, llevadas adelante por \ndiferentes organizaciones de productores familiares y BIO-Uruguay (Batoví Instituto Orgánico) se han generado bioinsumos  a partir del reconocimiento y uso de hongos patogénicos nativos para controlar plagas de importancia económica. Estos bioinsumos vienen contribuyendo en la restitución de los equilibrios biológicos y en las transiciones agroecológicas de diferentes sistemas productivos.  Estos aprendizajes contribuyen al desarrollo de las capacidades individuales e institucionales necesarias para “fabricar la agroecología” en Uruguay.\n",
          "titulo" : "Bioinsumos: Logros y desafíos en el desarrollo de la Agroecología en Uruguay. "
        },
        "_pt" : {
          "bio" : "Oriunda de Tacuarembó Uruguay, madre de cuatro hijos, es Ingeniera Agrónoma (título otorgado por la Facultad de Agronomía de la Universidad de la República) y Doctora en Ciencias Agrarias (título otorgado por la Universidad Agraria de la Habana-Cuba). Se desempeña como Responsable Norte del Sistema Nacional de Áreas Protegidas y directora técnica científica del Batoví Instituto Orgánico. Además ha desarrollado diversas consultorías en organizaciones nacionales e internacionales tales como la Cooperación Técnica Alemana (GTZ), la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), el Programa de las Naciones Unidas para el Desarrollo (PNUD) entre otros. Ha publicado más de 20 artículos científicos y 3 libros de autoría propia. Ha capacitado y acompañado técnicamente a más de 100 productores familiares en la implementación de sistemas agroecológicos de producción.",
          "texto" : "Próximamente más información",
          "titulo" : "Bioinsumos: logros y desafíos en el desarrollo de la agroecología en Uruguay"
        },
        "horario" : "10:45",
        "nombre" : "Dra. Alda Rodríguez",
        "pais" : "UY",
        "sid" : "conservación-y-manejo-microbiano"
      },
      "alexandra-stoll" : {
        "_en" : {
          "bio" : "La Dra. Alexandra Stoll obtuvo su título en Biología (2001) en la Universidad Técnica de Dresden, Alemania, donde también realizó su doctorado (2005). Desde 2008 se desempeña como investigadora titular del Centro de Estudios Avanzados en Zonas Áridas (CEAZA, Chile) y desde 2012 lidera el Laboratorio de Microbiología Aplicada. Sus líneas principales de investigación se centran en la identificación y caracterización de microorganismos y comunidades asociadas a la raíz vegetal, los mecanismos involucrados en la interacción planta-bacteria, y aplicaciones para la agricultura en zonas áridas. En esta línea emplean un enfoque holístico de ecología vegetal y microbiana, incluida su interacción, en ecosistemas naturales y agrícolas de zonas áridas. Además, promueve la divulgación a la sociedad y socios empresariales (transferencia tecnológica), y realiza capacitaciones para agricultores regionales.",
          "texto" : "",
          "titulo" : "Próximamente más información"
        },
        "_es" : {
          "bio" : "La Dra. Alexandra Stoll obtuvo su título en Biología (2001) en la Universidad Técnica de Dresden, Alemania, donde también realizó su doctorado (2005). Desde 2008 se desempeña como investigadora titular del Centro de Estudios Avanzados en Zonas Áridas (CEAZA, Chile) y desde 2012 lidera el Laboratorio de Microbiología Aplicada. Sus líneas principales de investigación se centran en la identificación y caracterización de microorganismos y comunidades asociadas a la raíz vegetal, los mecanismos involucrados en la interacción planta-bacteria, y aplicaciones para la agricultura en zonas áridas. En esta línea emplean un enfoque holístico de ecología vegetal y microbiana, incluida su interacción, en ecosistemas naturales y agrícolas de zonas áridas. Además, promueve la divulgación a la sociedad y socios empresariales (transferencia tecnológica), y realiza capacitaciones para agricultores regionales.",
          "texto" : "En las últimas décadas, los mecanismos de elicitación de resistencia sistémica inducida (ISR) y de inhibición de infecciones fúngicas como p.ej. del hongo necrotrófico Botrytis cinerea, han sido estudiados desde distintas aproximaciones y aun así quedan diferentes aspectos por comprender. En nuestro trabajo comparamos los perfiles transcriptómicos de plantas de tomate tratadas con microorganismos benéficos, evaluando por un lado aplicaciones pre y post infección con B. cinerea, así también la influencia del tipo de microorganismo benéfico (Bacillus, Trichodermas) en la elicitación del ISR. Plantas que no fueron tratadas preinfección mostraron una marcada expresión de genes relacionados con las respuestas de las vías del SA. Según el enriquecimiento en los GO term en estas plantas más del 70% de los transcritos se pueden relacionar con respuestas inespecíficas a estímulos o patógenos. En plantas tratadas con Bacillus sp. preinfección se reconocieron respuestas ISR relacionadas con las vías del JA además una serie de transcritos relacionados con el reconocimiento de PAMPS/MAMPs y efectores ETS (PRRs y NBS-LRR) y un importante enriquecimiento en vías que favorecen sistemas de detoxificación y reparación celular. La inoculación combinada Bacillus-Trichodermas también activa una respuesta ISR, pero reflejando señales mixtas de reconocimiento de ambos microorganismos benéficos.",
          "titulo" : "Modulación microbiana de la respuesta vegetal ante la infección con Botrytis cinerea"
        },
        "_pt" : {
          "bio" : "La Dra. Alexandra Stoll obtuvo su título en Biología (2001) en la Universidad Técnica de Dresden, Alemania, donde también realizó su doctorado (2005). Desde 2008 se desempeña como investigadora titular del Centro de Estudios Avanzados en Zonas Áridas (CEAZA, Chile) y desde 2012 lidera el Laboratorio de Microbiología Aplicada. Sus líneas principales de investigación se centran en la identificación y caracterización de microorganismos y comunidades asociadas a la raíz vegetal, los mecanismos involucrados en la interacción planta-bacteria, y aplicaciones para la agricultura en zonas áridas. En esta línea emplean un enfoque holístico de ecología vegetal y microbiana, incluida su interacción, en ecosistemas naturales y agrícolas de zonas áridas. Además, promueve la divulgación a la sociedad y socios empresariales (transferencia tecnológica), y realiza capacitaciones para agricultores regionales.",
          "texto" : "",
          "titulo" : "Próximamente más información"
        },
        "horario" : "10:45",
        "nombre" : "Dra. Alexandra Stoll",
        "pais" : "CL",
        "sid" : "promoción-indirecta-del-crecimiento-vegetal"
      },
      "emanuel-de-souza" : {
        "_en" : {
          "bio" : "Possui graduação em Farmacia e Bioquimica pela Universidade Federal do Paraná (1984) e doutorado em Ciências (Bioquímica) pela Universidade Federal do Paraná (1990). Atualmente é Professor Titular da Universidade Federal do Paraná. Tem experiência na área de Bioquímica, com ênfase em Biologia Molecular. Atua principalmente nos seguintes temas: fixação biológica de nitrogênio, regulação da expressão gênica em Azospirillum brasilense e Herbaspirillium seropedicae, expressão e purificação de proteínas em Escherichia coli e mecanismos moleculares da interacao planta-bactéria.",
          "texto" : "",
          "titulo" : "Próximamente más información"
        },
        "_es" : {
          "bio" : "Possui graduação em Farmacia e Bioquimica pela Universidade Federal do Paraná (1984) e doutorado em Ciências (Bioquímica) pela Universidade Federal do Paraná (1990). Atualmente é Professor Titular da Universidade Federal do Paraná. Tem experiência na área de Bioquímica, com ênfase em Biologia Molecular. Atua principalmente nos seguintes temas: fixação biológica de nitrogênio, regulação da expressão gênica em Azospirillum brasilense e Herbaspirillium seropedicae, expressão e purificação de proteínas em Escherichia coli e mecanismos moleculares da interacao planta-bactéria.",
          "texto" : "Cereals are the main energy source for humans and animals, and grain production is ever-increasing to\nfeed larger populations. The increase in production, however, is heavily based on the use of nitrogenous\nfertilization which is both costly and damaging to the environment. By colonizing the roots of rice, maize\nand other cereals, diazotrophic rhizobacteria such as Herbaspirillum seropedicae stimulate plant growth\nand productivity, however, the mechanisms by which these bacteria benefit the plant are largely unknown.\nTranscription profiles of rice roots inoculated with Herbaspirillum seropedicae by RNA-seq were used to\nobtain insights of this interaction. Out of over13,000 transcripts, >1,000 were differentially regulated.\nGenes for plant disease resistance and secondary metabolite biosynthesis were repressed, while genes\nrelated to the synthesis and efflux of phytosiderophores (PS) and transport of PS-iron complexes were\ninduced by the bacteria, suggesting that the H. seropedicae modulates rice defense system in order to\ncolonize the inner root tissues. Up-regulation of metal uptake indicate a possible route for increase the\nplant mineral nutrient content.",
          "titulo" : "Herbaspirillum seropedicae-rice interaction. What we learned, what we would like to know "
        },
        "_pt" : {
          "bio" : "Possui graduação em Farmacia e Bioquimica pela Universidade Federal do Paraná (1984) e doutorado em Ciências (Bioquímica) pela Universidade Federal do Paraná (1990). Atualmente é Professor Titular da Universidade Federal do Paraná. Tem experiência na área de Bioquímica, com ênfase em Biologia Molecular. Atua principalmente nos seguintes temas: fixação biológica de nitrogênio, regulação da expressão gênica em Azospirillum brasilense e Herbaspirillium seropedicae, expressão e purificação de proteínas em Escherichia coli e mecanismos moleculares da interacao planta-bactéria.",
          "texto" : "",
          "titulo" : "Próximamente más información"
        },
        "horario" : "15:45",
        "nombre" : "Dr. Emanuel de Souza",
        "pais" : "BR",
        "sid" : "el-holobionte-planta"
      },
      "euan-james" : {
        "_en" : {
          "bio" : "Euan James is a researcher at the James Hutton Institute, Dundee, and has specialised in nitrogen fixation by legumes and non-legumes, particularly those from the tropics. His main techniques include high resolution microscopy (light and EM) and 15N-based methods, which in combination have been used to confirm the effectiveness of many novel nitrogen-fixing plant-bacterial interactions (leguminous and non-leguminous).",
          "texto" : "Faba bean (Vicia faba L.) and pea (Pisum sativum L.) form nitrogen (N)-fixing symbioses with Rhizobium leguminosarum sv. viciae (Rlv), but little is known about their capacity for biological N fixation (BNF) in northern Europe, especially after prolonged periods without legume cropping, and hence with potentially low populations of effective Rlv genotypes. This was tested on faba bean over a four-year period using the 15N natural abundance method in an experimental field-scale rotation with no history of legume cropping for more than 50 years. Soil rhizobial populations before crop sowing were determined using qPCR, and the nodulating rhizobia were typed via their 16S rRNA, nodA and nodD genes. Faba bean obtained most of its N through BNF (>80%) regardless of plant genotype or year (2012–2015). Soil rhizobial populations were c. 106 R. leguminosarum cells and c. 105 Rlv nodD gene copy numbers g-1 soil dry weight regardless of field or treatment. The nodA and nodD genes of 157 strains of rhizobia grouped them into two large clades ofRlv, one consisting mainly of V. faba strains and the other of strains isolated from various hosts (V. faba, P. sativum, Lens culinaris, Vicia and Lathyrus spp.). It is concluded that faba bean (and pea) has a high reliance on BNF, but this is only possible due to the presence in the soil of sufficient numbers of effective Rlv strains; in the prolonged absence of legume cropping these may be derived from adjacent legume-cropped fields, and possibly also from native legumes in the field margins.",
          "titulo" : "Rhizobial populations, diversity, nodulation, and its relevance to legume cropping"
        },
        "_es" : {
          "bio" : "Euan James is a researcher at the James Hutton Institute, Dundee, and has specialised in nitrogen fixation by legumes and non-legumes, particularly those from the tropics. His main techniques include high resolution microscopy (light and EM) and 15N-based methods, which in combination have been used to confirm the effectiveness of many novel nitrogen-fixing plant-bacterial interactions (leguminous and non-leguminous).",
          "texto" : "Faba bean (Vicia faba L.) and pea (Pisum sativum L.) form nitrogen (N)-fixing symbioses with Rhizobium leguminosarum sv. viciae (Rlv), but little is known about their capacity for biological N fixation (BNF) in northern Europe, especially after prolonged periods without legume cropping, and hence with potentially low populations of effective Rlv genotypes. This was tested on faba bean over a four-year period using the 15N natural abundance method in an experimental field-scale rotation with no history of legume cropping for more than 50 years. Soil rhizobial populations before crop sowing were determined using qPCR, and the nodulating rhizobia were typed via their 16S rRNA, nodA and nodD genes. Faba bean obtained most of its N through BNF (>80%) regardless of plant genotype or year (2012–2015). Soil rhizobial populations were c. 106 R. leguminosarum cells and c. 105 Rlv nodD gene copy numbers g-1 soil dry weight regardless of field or treatment. The nodA and nodD genes of 157 strains of rhizobia grouped them into two large clades ofRlv, one consisting mainly of V. faba strains and the other of strains isolated from various hosts (V. faba, P. sativum, Lens culinaris, Vicia and Lathyrus spp.). It is concluded that faba bean (and pea) has a high reliance on BNF, but this is only possible due to the presence in the soil of sufficient numbers of effective Rlv strains; in the prolonged absence of legume cropping these may be derived from adjacent legume-cropped fields, and possibly also from native legumes in the field margins.",
          "titulo" : "Rhizobial populations, diversity, nodulation, and its relevance to legume cropping"
        },
        "_pt" : {
          "bio" : "Euan James is a researcher at the James Hutton Institute, Dundee, and has specialised in nitrogen fixation by legumes and non-legumes, particularly those from the tropics. His main techniques include high resolution microscopy (light and EM) and 15N-based methods, which in combination have been used to confirm the effectiveness of many novel nitrogen-fixing plant-bacterial interactions (leguminous and non-leguminous).",
          "texto" : "Faba bean (Vicia faba L.) and pea (Pisum sativum L.) form nitrogen (N)-fixing symbioses with Rhizobium leguminosarum sv. viciae (Rlv), but little is known about their capacity for biological N fixation (BNF) in northern Europe, especially after prolonged periods without legume cropping, and hence with potentially low populations of effective Rlv genotypes. This was tested on faba bean over a four-year period using the 15N natural abundance method in an experimental field-scale rotation with no history of legume cropping for more than 50 years. Soil rhizobial populations before crop sowing were determined using qPCR, and the nodulating rhizobia were typed via their 16S rRNA, nodA and nodD genes. Faba bean obtained most of its N through BNF (>80%) regardless of plant genotype or year (2012–2015). Soil rhizobial populations were c. 106 R. leguminosarum cells and c. 105 Rlv nodD gene copy numbers g-1 soil dry weight regardless of field or treatment. The nodA and nodD genes of 157 strains of rhizobia grouped them into two large clades ofRlv, one consisting mainly of V. faba strains and the other of strains isolated from various hosts (V. faba, P. sativum, Lens culinaris, Vicia and Lathyrus spp.). It is concluded that faba bean (and pea) has a high reliance on BNF, but this is only possible due to the presence in the soil of sufficient numbers of effective Rlv strains; in the prolonged absence of legume cropping these may be derived from adjacent legume-cropped fields, and possibly also from native legumes in the field margins.",
          "titulo" : "Rhizobial populations, diversity, nodulation, and its relevance to legume cropping"
        },
        "colaboradores" : "Euan K. James, Marta Maluk, Francesc Ferrando-Molina, Cathy Hawes, Richard S. Quilliam, Pietro P.M. Iannetta",
        "horario" : "15:00",
        "nombre" : "Dr. Euan James",
        "pais" : "GB",
        "sid" : "promoción-directa-del-crecimiento-vegetal"
      },
      "jeroen-wagemans" : {
        "_en" : {
          "bio" : "Dr. Jeroen Wagemans (PhD, 2014) is research manager at the Laboratory of Gene Technology (PI: Prof. Rob Lavigne) at KU Leuven (Belgium). In his research, he focuses on the application of bacteriophages, bacteria’s natural enemies, as biocontrol agents against phytopathogenic bacteria. Currently, he is working on phage biocontrol against several pathosystems such as black rot in cabbage (Xanthomonas campestris pv. campestris) and hairy roots disease in hydroponically grown tomato and cucumber (rhizogenic Agrobacterium).",
          "texto" : "Bacterial infections in agriculture are estimated to cause losses up to 10%. One of the culprits is Xanthomonas campestris pv. campestris (Xcc). These bacteria are known to cause black rot in cabbage (Brassica spp.). Until recently, bacterial infections were treated using copper-based chemicals and antibiotics like streptomycin. However, the use of these compounds is not sustainable since they are prone to resistance development and have a detrimental impact on the environment. A valuable alternative is the use of biocontrol agents like bacteriophages to fight bacterial infections. \n\nIn this regard, different phages were isolated to tackle Xcc infections. Our current Xcc phage collection can lyse about 85% of the strains relevant for agriculture in Belgium. These phages were investigated both genetically and microbiologically to determine their resistance potential, infection efficiency, biosafety and potential to be used in phage biocontrol using bioassays and field trials. Our promising results show that a strategy tailored to the pathosystem is key to implement phage biocontrol in integrated pest management strategies. ",
          "titulo" : "Phage biocontrol against Xanthomonas infections in cabbage"
        },
        "_es" : {
          "bio" : "Dr. Jeroen Wagemans (PhD, 2014) is research manager at the Laboratory of Gene Technology (PI: Prof. Rob Lavigne) at KU Leuven (Belgium). In his research, he focuses on the application of bacteriophages, bacteria’s natural enemies, as biocontrol agents against phytopathogenic bacteria. Currently, he is working on phage biocontrol against several pathosystems such as black rot in cabbage (Xanthomonas campestris pv. campestris) and hairy roots disease in hydroponically grown tomato and cucumber (rhizogenic Agrobacterium).",
          "texto" : "Bacterial infections in agriculture are estimated to cause losses up to 10%. One of the culprits is Xanthomonas campestris pv. campestris (Xcc). These bacteria are known to cause black rot in cabbage (Brassica spp.). Until recently, bacterial infections were treated using copper-based chemicals and antibiotics like streptomycin. However, the use of these compounds is not sustainable since they are prone to resistance development and have a detrimental impact on the environment. A valuable alternative is the use of biocontrol agents like bacteriophages to fight bacterial infections.\n\nIn this regard, different phages were isolated to tackle Xcc infections. Our current Xcc phage collection can lyse about 85% of the strains relevant for agriculture in Belgium. These phages were investigated both genetically and microbiologically to determine their resistance potential, infection efficiency, biosafety and potential to be used in phage biocontrol using bioassays and field trials. Our promising results show that a strategy tailored to the pathosystem is key to implement phage biocontrol in integrated pest management strategies.",
          "titulo" : "Phage biocontrol against Xanthomonas infections in cabbage"
        },
        "_pt" : {
          "bio" : "Dr. Jeroen Wagemans (PhD, 2014) is research manager at the Laboratory of Gene Technology (PI: Prof. Rob Lavigne) at KU Leuven (Belgium). In his research, he focuses on the application of bacteriophages, bacteria’s natural enemies, as biocontrol agents against phytopathogenic bacteria. Currently, he is working on phage biocontrol against several pathosystems such as black rot in cabbage (Xanthomonas campestris pv. campestris) and hairy roots disease in hydroponically grown tomato and cucumber (rhizogenic Agrobacterium).",
          "texto" : "Bacterial infections in agriculture are estimated to cause losses up to 10%. One of the culprits is Xanthomonas campestris pv. campestris (Xcc). These bacteria are known to cause black rot in cabbage (Brassica spp.). Until recently, bacterial infections were treated using copper-based chemicals and antibiotics like streptomycin. However, the use of these compounds is not sustainable since they are prone to resistance development and have a detrimental impact on the environment. A valuable alternative is the use of biocontrol agents like bacteriophages to fight bacterial infections.\n\nIn this regard, different phages were isolated to tackle Xcc infections. Our current Xcc phage collection can lyse about 85% of the strains relevant for agriculture in Belgium. These phages were investigated both genetically and microbiologically to determine their resistance potential, infection efficiency, biosafety and potential to be used in phage biocontrol using bioassays and field trials. Our promising results show that a strategy tailored to the pathosystem is key to implement phage biocontrol in integrated pest management strategies.",
          "titulo" : "Phage biocontrol against Xanthomonas infections in cabbage"
        },
        "colaboradores" : "Holtappels D., Fortuna, K., Van Vaerenbergh, J., Lavigne R. and Wagemans, J.",
        "horario" : "10:00",
        "nombre" : "Dr. Jeroen Wagemans",
        "pais" : "BE",
        "sid" : "promoción-indirecta-del-crecimiento-vegetal"
      },
      "jerri-zilli" : {
        "_en" : {
          "bio" : "Doctor en Agronomía-Ciencias del Suelo por la Universidad Federal Rural de Rio de Janeiro y Postdoctorado por la Universidad de Murdoch en Australia. Investigador de Embrapa Brasileira de Pesquisa Agropecuária (Embrapa) desde 2003, en el área de Microbiología de suelos, fijación biológica de nitrógeno, fitotecnia y taxonomía microbiana. Es conservador de la colección Cultures del Centro de Recursos Biológicos Johanna Döbereiner.",
          "texto" : "",
          "titulo" : "Próximamente más información"
        },
        "_es" : {
          "bio" : "Doctor en Agronomía-Ciencias del Suelo por la Universidad Federal Rural de Rio de Janeiro y Postdoctorado por la Universidad de Murdoch en Australia. Investigador de Embrapa Brasileira de Pesquisa Agropecuária (Embrapa) desde 2003, en el área de Microbiología de suelos, fijación biológica de nitrógeno, fitotecnia y taxonomía microbiana. Es conservador de la colección Cultures del Centro de Recursos Biológicos Johanna Döbereiner.",
          "texto" : "América Latina se ha destacado como una región del mundo con una clara expansión en el desarrollo y uso de bioinsumos en la agricultura. En Brasil, hay más de 150 empresas que desarrollan productos biológicos microbianos para la agricultura. Cada\npaís tiene sus propias reglas para el desarrollo y registro de productos microbianos destinados a la agricultura. En general, cuando los productos están destinados al control biológico, se registran siguiendo las reglas de registro de plaguicidas. Por otro lado, cuando son rizobios u otros promotores del crecimiento, es necesario seguir las reglas de registro de fertilizantes. En otros países de América Latina, las reglas son similares, aunque las peculiaridades inherentes a cada producto son comunes. Países como Brasil y Argentina tienen políticas / programas nacionales diseñados para fomentar el registro de nuevos bioinsumos.",
          "titulo" : "Legislación para el desarrollo de productos microbiológicos que contengan microorganismos promotores del crecimiento vegetal, con énfasis en Brasil"
        },
        "_pt" : {
          "bio" : "Doctor en Agronomía-Ciencias del Suelo por la Universidad Federal Rural de Rio de Janeiro y Postdoctorado por la Universidad de Murdoch en Australia. Investigador de Embrapa Brasileira de Pesquisa Agropecuária (Embrapa) desde 2003, en el área de Microbiología de suelos, fijación biológica de nitrógeno, fitotecnia y taxonomía microbiana. Es conservador de la colección Cultures del Centro de Recursos Biológicos Johanna Döbereiner.",
          "texto" : "",
          "titulo" : "Próximamente más información"
        },
        "horario" : "10:45",
        "nombre" : "Dr. Jerri Zilli",
        "pais" : "BR",
        "sid" : "legislación-sobre-productos-microbianos"
      },
      "jorge-mazza-rodrigues" : {
        "_en" : {
          "bio" : "",
          "texto" : "",
          "titulo" : "Próximamente más información"
        },
        "_es" : {
          "bio" : "Jorge L. Mazza Rodrigues is currently a Professor in the Department of Land, Air and Water\nResources at University of California – Davis. He has an Agronomical Engineering degree from\nthe University of Sao Paulo, Brazil, and a dual PhD from Michigan State University, USA. His\nlaboratory research focuses on the ecology of soil microorganisms and their importance as\nbiological regulators of biogeochemical cycles in natural and agricultural ecosystems.",
          "texto" : "A critical component of any self-sustainable ecosystem is its microbiome, the collection of all\nmicroorganisms and the genomic make-up that they carry to mediate important environmental\nservices and biogeochemical processes. This is not different in agricultural systems, where\nmicroorganisms mediate the cycling of carbon and nutrients, protection against pathogens, and\nother beneficial interactions with plants. Significant efforts for soil conservation and sustainable\nmanagement practices have led to the concept of soil health, which is directly linked to the\noverall health of cultivated plants through their rhizosphere microbiomes. In this presentation, I\nwill provide data on how losses in microbial community diversity (taxa abundance and structure)\nin soils have a direct effect on plants. Using a combination of high-throughput omics\ntechnologies and soil physico-chemical properties, our group has observed that forest-to-pasture\nconversion resulted in genomic losses that were translated into ecosystem processes related to\nthe C and N cycles. The metabolite profiles of soils were also altered with easier-to-degrade\ncompounds such as beta-gentiobiose and glutamic acid being detected in grasses, while aromatic\ncompounds, like 4-hydroxybenzoic acid, were detected in pristine environments. At the\nmicrobiome level, stress-related functions controlled by transcriptional regulator genes that act as\nmaster switches of cell metabolism were also altered. Functions associated with heat stress,\ncarbon starvation and microbial motility were altered under different soil management practices.\nTaken together, our results show the potential for transcriptional regulators to be used as\nbiological indicators of soil -plant-ecosystem health.",
          "titulo" : "The Soil-Plant-Ecosystem Health Connection"
        },
        "_pt" : {
          "bio" : "",
          "texto" : "",
          "titulo" : "Próximamente más información"
        },
        "horario" : "15:45",
        "nombre" : "Dr. Jorge L. Mazza Rodrigues",
        "pais" : "BR",
        "sid" : "microbioma-agrícola"
      },
      "kornelia-smalla" : {
        "_en" : {
          "bio" : "Professor Dr. Dr. h.c. Kornelia Smalla is the head of the microbial ecology group in the Institute for Epidemiology and Pathogen Diagnostics at the Julius Kühn-Institut (JKI), Federal Research Centre for Cultivated Plants, in Braunschweig. She studied chemistry and did her PhD in biochemistry at the Martin-Luther-University in Halle. The venia legendi for microbiology was obtained at the Technical University Braunschweig where she is an adjunct Professor for Microbiology. From the beginning of the 1990’s Kornelia Smalla contributed to the field of molecular microbial ecology and microbiome research. Cultivation-independent methods were developed to study the microbiome of soils or of plants and how the composition and functions of complex microbiomes are affected by agricultural management practice. The group is interested in developing methods to manage and stimulate the soil microbiome by reduced tillage, organic amendments or inoculants. Another research interest of the group are the factors that shape the transferable resistome and plasmid-mediated bacterial adaptation to changing environments.",
          "texto" : "",
          "titulo" : "Próximamente más información"
        },
        "_es" : {
          "bio" : "Professor Dr. Dr. h.c. Kornelia Smalla is the head of the microbial ecology group in the Institute for Epidemiology and Pathogen Diagnostics at the Julius Kühn-Institut (JKI), Federal Research Centre for Cultivated Plants, in Braunschweig. She studied chemistry and did her PhD in biochemistry at the Martin-Luther-University in Halle. The venia legendi for microbiology was obtained at the Technical University Braunschweig where she is an adjunct Professor for Microbiology. From the beginning of the 1990’s Kornelia Smalla contributed to the field of molecular microbial ecology and microbiome research. Cultivation-independent methods were developed to study the microbiome of soils or of plants and how the composition and functions of complex microbiomes are affected by agricultural management practice. The group is interested in developing methods to manage and stimulate the soil microbiome by reduced tillage, organic amendments or inoculants. Another research interest of the group are the factors that shape the transferable resistome and plasmid-mediated bacterial adaptation to changing environments.",
          "texto" : "Sustainable agricultural production aims to meet future food, feed and fibre demands with the given natural resources and without adverse environmental impact or greater land consumption. Modern conventional agricultural practices with the ultimate aim of higher yields widely ignored environmental consequences – in particular with respect to soils. This resulted over the last decades in reduced soil fertility and biodiversity, accumulation of plant pathogens, environmental contamination with agrochemicals and soil erosion jeopardizing soil health. In view of the limited arable land, soil microbiome modulation through changes in farming practices but also the use of beneficial microorganisms (BMs) might be important strategies to ensure agricultural productivity for future generations.\n\nIn my talk, I will present research insights from different collaboration projects performed under greenhouse and field conditions. Long-term farming practices can result in a soil biotic legacy modulating the rhizosphere microbiome and affecting the performance of subsequent crops via altered plant-microbe interactions in the rhizosphere. We provided evidence in another greenhouse experiment for the effect of the soil microbiome on the plant defense response towards Blumeria graminis when comparing differently managed agricultural to potting soils. BMs present an alternative measure to improve plant health and performance. We observed under field conditions that the inoculation with BMs resulted in a modulation of the rhizosphere microbiome but also of plant hormones and stress protection and most importantly in an increased maize growth in presence of a natural abiotic stressor (drought). In another experiment, bacterial inoculants were also shown to be effective in controlling bacterial wilt disease of tomato plants caused by Ralstonia solanacearum and microbiome modulation seemed to be important.\n\nSoil microorganisms are critical for soil-related ecosystem services. Harnessing their huge untapped and largely unexplored taxonomic and functional diversity and gaining a better mechanistic understanding of plant-microbe interactions under various agricultural management practices can open up new ways to support an economically and environmentally benign plant production.\nMicrobiome modulations achieved by management-dependent support of the indigenous microbiome, or by inoculation of soils or plants with beneficial microbial strains or multi-species consortia hold great promise for a more sustainable agriculture.",
          "titulo" : "Soil microbiome modulation for improved plant growth and health"
        },
        "_pt" : {
          "bio" : "Professor Dr. Dr. h.c. Kornelia Smalla is the head of the microbial ecology group in the Institute for Epidemiology and Pathogen Diagnostics at the Julius Kühn-Institut (JKI), Federal Research Centre for Cultivated Plants, in Braunschweig. She studied chemistry and did her PhD in biochemistry at the Martin-Luther-University in Halle. The venia legendi for microbiology was obtained at the Technical University Braunschweig where she is an adjunct Professor for Microbiology. From the beginning of the 1990’s Kornelia Smalla contributed to the field of molecular microbial ecology and microbiome research. Cultivation-independent methods were developed to study the microbiome of soils or of plants and how the composition and functions of complex microbiomes are affected by agricultural management practice. The group is interested in developing methods to manage and stimulate the soil microbiome by reduced tillage, organic amendments or inoculants. Another research interest of the group are the factors that shape the transferable resistome and plasmid-mediated bacterial adaptation to changing environments.",
          "texto" : "",
          "titulo" : "Mais informações em breve"
        },
        "horario" : "15:00",
        "nombre" : "Dra. Kornelia Smalla",
        "pais" : "DE",
        "sid" : "microbioma-agrícola"
      },
      "laila-pamela-martinez" : {
        "_en" : {
          "bio" : "Investigadora principal del Laboratorio de Interacciones Microbianas de la Unidad Irapuato del Cinvestav en México. Mi investigación se centra en descifrar los mecanismos, y las implicaciones ecológicas y evolutivas de las interacciones entre las plantas y los microorganismos en ambientes áridos, así como en la simbiosis hongo-bacteria-virus.",
          "texto" : "En esta ponencia hablaremos de la diversidad y funciones del microbioma de los agaves y cactus y su potencial para contribuir a la agricultura sustentable en las zonas áridas.",
          "titulo" : "El microbioma de los Agaves y Cactus como modelos para un planeta en calentamiento"
        },
        "_es" : {
          "bio" : "Soy la investigadora principal del Laboratorio de Interacciones Microbianas de la Unidad Irapuato del Cinvestav.\n\nEstudie Ingeniería Química y Bioquímica en México (Tec de Monterrey) y en el Reino Unido (Universidadde Birmingham). Duante mis estudios de doctorado en el Instituto Leibniz para la Investigación de Productos Naturales y la Biología de la Infección (HKI) en Jena, Alemania, descubri mi pasión por la ecología microbiana y la simbiosis.\n\nMi investigación se centra en descifrar los mecanismos, y las implicaciones ecológicas y evolutivas de las interacciones entre las plantas y\nlos microorganismos en ambientes áridos, así como en la simbiosis hongo-bacteria-virus.\n\nSoy una profesora y maestra entusiasta. Amo las artes (practico el ballet y el piano), y pasar tiempo en la naturaleza (montañismo).",
          "texto" : "Los agaves y las cactáceas representan especies vegetales clave en los ambientes áridos. Estos linajes de plantas se originaron en el continente Americano y comparten el metabolismo ácido de las crasuláceas (CAM, por sus siglas en inglés). Estas plantas, como la mayoría de los organismos eucariotas, dependen de asociaciones con microorganismos para lidiar con la sequía, una alta radiación solar, suelos bajos en materia orgánica, y temperaturas extremas comúnes en sus hábitats.\nNuestros estudios de perfiles taxonómicos revelaron que las comunidades procariontes asociadas con agaves y cactus están principalmente influenciadas por el compartimento/nicho de la planta, mientras que las comunidades fúngicas estuvieron mayormente determinadas por la biogeografía de sus plantas huésped y luego por el compartimento. De forma notable, la diversidad alfa de las comunidades bacterianas epífitas, esto es de la rizósfera y la filósfera, tuvieron una alta y semejante diversidad en los agaves y cactus silvestres, pero una muy baja en la especie cultivada de Agave tequilana.\nAnálisis metagenómicos comparando los suelos, las rizósferas y las filósferas asociadas a estas plantas confirmaron que A. tequilana alberga una menor diversidad funcional, especialmente en procesos microbianos relacionados con el metabolismo del carbono y la degradación de xenobióticos. Estos resultados sugieren que las prácticas agronómicas y el cultivo clonal de este Agave tienen efectos directos sobre la diversidad microbiana, con riesgos potenciales para su adaptación y productividad.\nA pesar de las diferencias en biogeografía, manejo agronómico y diversidad microbiana, las cinco especies de agaves y cactus estudiadas comparten un microbioma núcleo. Nuestras investigaciones, empleando miembros bacterianos y fúnficos de este microbioma núcleo, mostraron que estos microorganismos emiten una gran diversidad de compuestos orgánicos volátiles (+ 120 mVOCs, 10 clases químicas). A través de ensayos con compuestos puros, solos o en mezclas, identificamos ocho mVOCs que promueven el crecimiento y desarrollo de plantas modelo y de las plantas huésped, incluyendo la especie económicamente importante A. tequilana.\nEn suma, el microbioma de los agaves y catus y sus metabolitos representan potentes herramientas biotecnológicas que apoyan el desarrollo de una agricultura sustentable en las zonas áridas. Estas zonas se encuentren actualmente en expansión a causa del cambio climático.",
          "titulo" : "El microbioma de Agaves y Cactus como modelos para un planeta en calentamiento"
        },
        "_pt" : {
          "bio" : "Investigadora principal del Laboratorio de Interacciones Microbianas de la Unidad Irapuato del Cinvestav en México. Mi investigación se centra en descifrar los mecanismos, y las implicaciones ecológicas y evolutivas de las interacciones entre las plantas y los microorganismos en ambientes áridos, así como en la simbiosis hongo-bacteria-virus.",
          "texto" : "En esta ponencia hablaremos de la diversidad y funciones del microbioma de los agaves y cactus y su potencial para contribuir a la agricultura sustentable en las zonas áridas.",
          "titulo" : "El microbioma de los Agaves y Cactus como modelos para un planeta en calentamiento"
        },
        "horario" : "10:45",
        "nombre" : "Dra. Laila Pamela Partida-Martínez",
        "pais" : "MX",
        "sid" : "evolución-y-diversidad-de-mpcv"
      },
      "maria-caridad-napoles" : {
        "_en" : {
          "bio" : "Lic. en Microbiología, Universidad de la Habana, Investigador y Profesor Titular del Instituto Nacional de Ciencias Agrícolas. Presidenta del Consejo Científico del INCA, Miembro del Consejo Técnico Asesor del Ministerio de Educación Superior y Miembro Titular de la Academia de Ciencias de Cuba. Coordinadora por Cuba de la Asociación Latinoamericana de Rizobiología.",
          "texto" : "Resulta cada vez más clara la necesidad de garantizar alimentos para una población creciente, conservando la fertilidad de los suelos y respetando el medio ambiente. Si existía alguna duda, la crisis impuesta por la pandemia que hoy vivimos, ha reforzado esta realidad. Este milenio ha reconocido de forma creciente el papel que juegan los procesos biológicos en el funcionamiento de la biosfera, pero en particular del suelo y de la producción agrícola. El uso de productos compuestos por microorganismos benéficos, ya sean fitoestimulantes, biofertilizantes o agentes de biocontrol, constituye una estrategia tecnológica cada vez más aceptada en las prácticas agrícolas sustentables, con lo cual cada vez son más los centros de investigación y grandes compañías que dedican recursos económicos y humanos a la búsqueda de nuevos bioproductos. En esta charla, trataremos de ejemplificar brevemente, utilizando la experiencia de Cuba, cuál ha sido el camino recorrido para convertir una cepa aislada de entre millones que se asocian a un cultivo, en un producto que regresa al campo para potenciar sus bondades y colaborar con el crecimiento, desarrollo y rendimiento de cultivos de interés.",
          "titulo" : "Necesidad de una agricultura autosustentable, generación de productos microbianos desde el laboratorio hasta el campo: Caso Cuba."
        },
        "_es" : {
          "bio" : "Lic. en Microbiología, Universidad de la Habana, Investigador y Profesor Titular del Instituto Nacional de Ciencias Agrícolas. Presidenta del Consejo Científico del INCA, Miembro del Consejo Técnico Asesor del Ministerio de Educación Superior y Miembro Titular de la Academia de Ciencias de Cuba. Coordinadora por Cuba de la Asociación Latinoamericana de Rizobiología.",
          "texto" : "Resulta cada vez más clara la necesidad de garantizar alimentos para una población creciente, conservando la fertilidad de los suelos y respetando el medio ambiente. Si existía alguna duda, la crisis impuesta por la pandemia que hoy vivimos, ha reforzado esta realidad. Este milenio ha reconocido de forma creciente el papel que juegan los procesos biológicos en el funcionamiento de la biosfera, pero en particular del suelo y de la producción agrícola. El uso de productos compuestos por microorganismos benéficos, ya sean fitoestimulantes, biofertilizantes o agentes de biocontrol, constituye una estrategia tecnológica cada vez más aceptada en las prácticas agrícolas sustentables, con lo cual cada vez son más los centros de investigación y grandes compañías que dedican recursos económicos y humanos a la búsqueda de nuevos bioproductos. En esta charla, trataremos de ejemplificar brevemente, utilizando la experiencia de Cuba, cuál ha sido el camino recorrido para convertir una cepa aislada de entre millones que se asocian a un cultivo, en un producto que regresa al campo para potenciar sus bondades y colaborar con el crecimiento, desarrollo y rendimiento de cultivos de interés.",
          "titulo" : "Necesidad de una agricultura autosustentable, generación de productos microbianos desde el laboratorio hasta el campo: Caso Cuba."
        },
        "_pt" : {
          "bio" : "Lic. en Microbiología, Universidad de la Habana, Investigador y Profesor Titular del Instituto Nacional de Ciencias Agrícolas. Presidenta del Consejo Científico del INCA, Miembro del Consejo Técnico Asesor del Ministerio de Educación Superior y Miembro Titular de la Academia de Ciencias de Cuba. Coordinadora por Cuba de la Asociación Latinoamericana de Rizobiología.",
          "texto" : "Resulta cada vez más clara la necesidad de garantizar alimentos para una población creciente, conservando la fertilidad de los suelos y respetando el medio ambiente. Si existía alguna duda, la crisis impuesta por la pandemia que hoy vivimos, ha reforzado esta realidad. Este milenio ha reconocido de forma creciente el papel que juegan los procesos biológicos en el funcionamiento de la biosfera, pero en particular del suelo y de la producción agrícola. El uso de productos compuestos por microorganismos benéficos, ya sean fitoestimulantes, biofertilizantes o agentes de biocontrol, constituye una estrategia tecnológica cada vez más aceptada en las prácticas agrícolas sustentables, con lo cual cada vez son más los centros de investigación y grandes compañías que dedican recursos económicos y humanos a la búsqueda de nuevos bioproductos. En esta charla, trataremos de ejemplificar brevemente, utilizando la experiencia de Cuba, cuál ha sido el camino recorrido para convertir una cepa aislada de entre millones que se asocian a un cultivo, en un producto que regresa al campo para potenciar sus bondades y colaborar con el crecimiento, desarrollo y rendimiento de cultivos de interés.",
          "titulo" : "Necesidad de una agricultura autosustentable, generación de productos microbianos desde el laboratorio hasta el campo: Caso Cuba."
        },
        "horario" : "15:00",
        "nombre" : "Dra. C. María Caridad Nápoles",
        "pais" : "CU",
        "sid" : "del-laboratorio-al-campo"
      },
      "marina-sanchez" : {
        "_en" : {
          "bio" : "La profesora Marina Sanchez es Ingeniera Agrónoma, Maestra en Administración de Empresas y en Suelos y Aguas, Doctor Ingeniero Agrónomo de la Universidad Politécnica ETSIA Madrid Área de énfasis en Tecnologías Agroambientales. Profesora Titular de Dedicación Exclusiva, Tenente de Cargo de la Universidad Nacional de Colombia-Sede Palmira, Investigadora Emérita del Departamento Administrativo de Ciencia, Tecnología e Innovación COLCIENCIAS, coordinadora grupo de investigación en Agroecología,  sus áreas de trabajo: Microbiología Agrícola, Biología y Microbiología del Suelo, Fitopatología con énfasis en hongos y bacterias, Agricultura Ecológica y en este momento integra desde su experiencia todas estas áreas en la Agroecología.",
          "texto" : "",
          "titulo" : "Próximamente más información"
        },
        "_es" : {
          "bio" : "La profesora Marina Sanchez es Ingeniera Agrónoma, Maestra en Administración de Empresas y en Suelos y Aguas, Doctor Ingeniero Agrónomo de la Universidad Politécnica ETSIA Madrid Área de énfasis en Tecnologías Agroambientales. Profesora Titular de Dedicación Exclusiva, Tenente de Cargo de la Universidad Nacional de Colombia-Sede Palmira, Investigadora Emérita del Departamento Administrativo de Ciencia, Tecnología e Innovación COLCIENCIAS, coordinadora grupo de investigación en Agroecología,  sus áreas de trabajo: Microbiología Agrícola, Biología y Microbiología del Suelo, Fitopatología con énfasis en hongos y bacterias, Agricultura Ecológica y en este momento integra desde su experiencia todas estas áreas en la Agroecología.",
          "texto" : "Estamos acostumbrados a visibilizar los microorganismos como componentes clave en la nutrición de las plantas mediante la mineralización de la materia orgánica y como colaboradores en la solubilización del material parental y secundario. Sin embargo, éstos para ser absorbidos con eficiencia en los eco y agroecosistemas requieren de alianzas que faciliten su llegada a las plantas, continuidad en las actividades metabólicas, escape a la adsorción órgano-mineral, señales de comunicación e información efectiva, redes de movilidad y absorción, economía en los procesos,  diálogos interespecies e interespaciales abajo-arriba-abajo que conectan y regulan los sistemas radicales, partes aéreas y se expresan en productividad pero también sanidad y sostenibilidad.  Para comprender el papel de aliados estratégicos de los microorganismos en la sostenibilidad de los eco y agroecosistemas, es necesario reconocer su organización comunitaria donde prima la biodiversidad, hasta el punto que podemos visualizar el suelo como caldo de cultivo multifuncional, complejo enzimático procedente de múltiples ADN interactuando, semáforos que regulan acciones y actividades, diálogos y acuerdos colectivos, los cuales al romperse generan disturbios tan graves como enfermedades, toxicidades, competencias, ataque de plagas, disminución de productividad, entre otros.  \nLa evolución de la vida en la tierra y la colonización de la superficie terrestre -  otrora inerte - a  suelo,  atmósfera  y tierra viva da cuenta de procesos metabólicos y organizativos claves para la existencia de los ecosistemas y posteriormente de los agroecosistemas. En la naturaleza ningún organismo está solo: llámese microorganismo, meso o macroorganismo. Siempre están en comunidades que garantizan diferentes tipos de relaciones: asociaciones complementarias y/o antagónicas, sociedades, simbiosis mutualistas, entre otros, ligadas tanto a nutrición como sanidad y sostenibilidad.  Los microorganismos entre ellos los denominados PGPR están presentes en la mayoría de estas relaciones dándonos múltiples enseñanzas ecosistémicas y sociales.\n",
          "titulo" : "LOS MICROORGANISMOS DEL SUELO ALIADOS ESTRATÉGICOS EN LOS PROCESOS DE NUTRICIÓN, SANIDAD Y SOSTENIBILIDAD EN LOS ECO Y AGROECOSISTEMAS"
        },
        "_pt" : {
          "bio" : "La profesora Marina Sanchez es Ingeniera Agrónoma, Maestra en Administración de Empresas y en Suelos y Aguas, Doctor Ingeniero Agrónomo de la Universidad Politécnica ETSIA Madrid Área de énfasis en Tecnologías Agroambientales. Profesora Titular de Dedicación Exclusiva, Tenente de Cargo de la Universidad Nacional de Colombia-Sede Palmira, Investigadora Emérita del Departamento Administrativo de Ciencia, Tecnología e Innovación COLCIENCIAS, coordinadora grupo de investigación en Agroecología,  sus áreas de trabajo: Microbiología Agrícola, Biología y Microbiología del Suelo, Fitopatología con énfasis en hongos y bacterias, Agricultura Ecológica y en este momento integra desde su experiencia todas estas áreas en la Agroecología.",
          "texto" : "",
          "titulo" : "Próximamente más información"
        },
        "horario" : "10:00",
        "nombre" : "Dra. Marina Sánchez",
        "pais" : "CO",
        "sid" : "conservación-y-manejo-microbiano"
      },
      "massimiliano-cardinale" : {
        "_en" : {
          "bio" : "- MSc. in \"Natural Sciences\", University of Palermo, Italy (2000)\n- PhD. in \"Environmental Remediation\", University of Palermo, Italy  (2005)\n- Assistant professor, Graz University of Technology, Austria (2008-2013)\n- Research Associate, Justus Liebig University Giessen, Germany (2013-2018)\n- Senior Researcher, University of Salento, Italy (2019-current)\nMassimiliano Cardinale is a microbial ecologist interested in plant-microbe interactions and applications of beneficial microbes in agriculture. His research spreads from the study of specific beneficial symbioses, such as legume-rhizobia and mycorrhiza, to the exploration and exploitation of the plant associated microbiome, with a special focus on the less investigated plant habitats, such as the plant reproductive organs.",
          "texto" : "The seed microbiome has received great attention in the last years, due to the intimate relationship with the plant and the possibility to be vertically transmitted to the next plant generation. Barley seeds are covered with abundant microbes on their surface and contain also an endophytic community showing stable members across genotypes, sites of collection and harvesting years (in particular, the genera Pantoea, Paenibacillus and Pseudomonas). These stable partners promoted barley growth in greenhouse experiments, inducing an increase in both chlorophyll content and concentration of K and Mg; moreover, they showed biocontrol activity against the phytopathogenic fungus Blumeria graminis. Such close and beneficial association suggested a co-evolution between barley and its core seed endophytes. To confirm this hypothesis, we studied the seed endophytes of four cereals and their respective ancestors. Genetic differences between plants, assessed by RAPD, were compared with the differences between the respective seed microbiomes, and a co-evolution test showed significant coherence between them, thus indicating clues of the co-evolution. This study also demonstrated that domestication affected the cereal seed microbiome in a common way, by increasing the diversity in the modern crops but reducing the interaction network with respect to the wild ancestors. Vertical transmission studies in greenhouse trials showed that only a few OTUs were transmitted to the second-generation seeds in barley; however, they represented the larger fraction of the seed microbiome in terms of number of sequences. In field trials, the number of seed-originated rhizosphere members of four cereal species varied significantly depending on the site, the cereal species, and their interaction.\nPlant reproductive organs are the most suitable habitats to study the co-evolution between plants and microbes, and to understand the nature of the plant holobiont. Moreover, they are a source of candidate strains with relevant potential in sustainable, ecosystem-based agricultural biotechnology applications.",
          "titulo" : "The microbiome of seeds and plant reproductive organs: diversity, co-evolution with the plant, and biotechnological potential for agriculture"
        },
        "_es" : {
          "bio" : "- MSc. in \"Natural Sciences\", University of Palermo, Italy (2000)\n- PhD. in \"Environmental Remediation\", University of Palermo, Italy  (2005)\n- Assistant professor, Graz University of Technology, Austria (2008-2013)\n- Research Associate, Justus Liebig University Giessen, Germany (2013-2018)\n- Senior Researcher, University of Salento, Italy (2019-current)\nMassimiliano Cardinale is a microbial ecologist interested in plant-microbe interactions and applications of beneficial microbes in agriculture. His research spreads from the study of specific beneficial symbioses, such as legume-rhizobia and mycorrhiza, to the exploration and exploitation of the plant associated microbiome, with a special focus on the less investigated plant habitats, such as the plant reproductive organs.",
          "texto" : "The seed microbiome has received great attention in the last years, due to the intimate relationship with the plant and the possibility to be vertically transmitted to the next plant generation. Barley seeds are covered with abundant microbes on their surface and contain also an endophytic community showing stable members across genotypes, sites of collection and harvesting years (in particular, the genera Pantoea, Paenibacillus and Pseudomonas). These stable partners promoted barley growth in greenhouse experiments, inducing an increase in both chlorophyll content and concentration of K and Mg; moreover, they showed biocontrol activity against the phytopathogenic fungus Blumeria graminis. Such close and beneficial association suggested a co-evolution between barley and its core seed endophytes. To confirm this hypothesis, we studied the seed endophytes of four cereals and their respective ancestors. Genetic differences between plants, assessed by RAPD, were compared with the differences between the respective seed microbiomes, and a co-evolution test showed significant coherence between them, thus indicating clues of the co-evolution. This study also demonstrated that domestication affected the cereal seed microbiome in a common way, by increasing the diversity in the modern crops but reducing the interaction network with respect to the wild ancestors. Vertical transmission studies in greenhouse trials showed that only a few OTUs were transmitted to the second-generation seeds in barley; however, they represented the larger fraction of the seed microbiome in terms of number of sequences. In field trials, the number of seed-originated rhizosphere members of four cereal species varied significantly depending on the site, the cereal species, and their interaction.\nPlant reproductive organs are the most suitable habitats to study the co-evolution between plants and microbes, and to understand the nature of the plant holobiont. Moreover, they are a source of candidate strains with relevant potential in sustainable, ecosystem-based agricultural biotechnology applications.",
          "titulo" : "The microbiome of seeds and plant reproductive organs: diversity, co-evolution with the plant, and biotechnological potential for agriculture"
        },
        "_pt" : {
          "bio" : "Massimiliano Cardinale is a microbial ecologist interested in plant-microbe interactions and applications of beneficial microbes in agriculture. His research spreads from the study of specific beneficial symbioses, such as legume-rhizobia and mycorrhiza, to the exploration and exploitation of the plant associated microbiome, with a special focus on the less investigated plant habitats, such as the plant reproductive organs.",
          "texto" : "Próximamente más información",
          "titulo" : "The microbiome of seeds and plant reproductive organs: diversity, co-evolution with the plant, and biotechnological potential for agriculture"
        },
        "horario" : "10:00",
        "nombre" : "Dr. Massimiliano Cardinale",
        "pais" : "IT",
        "sid" : "evolución-y-diversidad-de-mpcv"
      },
      "pablo-hardoim" : {
        "_en" : {
          "bio" : "Agronomist from the Federal University of Lavras (UFLA), with M.Sc. in soil fertility and plant nutrition from the Luiz de Queiroz College of Agriculture, University of São Paulo (ESALQ-USP) and Ph.D. in microbial ecology from the University of Groningen (RUG), The Netherlands. He has nearly twenty years of experience in the studies of interaction between plants and microbial mutualisms with emphasis on endophytes. Today, he works as a consultant on the implementation of crop management for the development of sustainable agriculture.",
          "texto" : "Próximamente más información",
          "titulo" : "Structural and functional plasticity in plants through microbial partners: a holistic approach"
        },
        "_es" : {
          "bio" : "Agronomist from the Federal University of Lavras (UFLA), with M.Sc. in soil fertility and plant nutrition from the Luiz de Queiroz College of Agriculture, University of São Paulo (ESALQ-USP) and Ph.D. in microbial ecology from the University of Groningen (RUG), The Netherlands. He has nearly twenty years of experience in the studies of the interaction between plants and microbial mutualisms with an emphasis on endophytes. Today, he works as a consultant on the implementation of crop management for the development of sustainable agriculture.",
          "texto" : "Plants evolve by interacting with prokaryotic and eukaryotic microorganisms. The association between algae and filamentous fungus allows the former to successfully recruit nutrients and water resources in the substrate, while the\nlatter receives photoassimilates for its services. This mutualistic interaction between algal and mycorrhizal fungus, most likely, allowed ancestor Embryophyta (land plants) to colonize terrestrial ecosystems and diversify into\nmore than 308 thousand vascular plant species currently known. This type of successful partnership is also occasionally observed in commercially cultivated plants. Latin-American soybean plants establish mutualistic interactions with rhizobia allowing the plant to directly assimilate ammonia (NH 3 ) fixed by bacteroid cells inside root nodules. In addition to these well-known symbioses, many other beneficial functions provided by microbial partners are being used in crop plants, especially now with challenges of food security under climate\nchange and the pressure of consumers to obtain high-quality food and feed from sustainable/regenerative systems. To improve agricultural efficiency under this framework, scientists and farmers have the advantage to rely on microbiological partners to perform key functions in the production system.",
          "titulo" : "Structural and functional plasticity in plants through microbial partners: a holistic approach"
        },
        "_pt" : {
          "bio" : "Agronomist from the Federal University of Lavras (UFLA), with M.Sc. in soil fertility and plant nutrition from the Luiz de Queiroz College of Agriculture, University of São Paulo (ESALQ-USP) and Ph.D. in microbial ecology from the University of Groningen (RUG), The Netherlands. He has nearly twenty years of experience in the studies of interaction between plants and microbial mutualisms with emphasis on endophytes. Today, he works as a consultant on the implementation of crop management for the development of sustainable agriculture.",
          "texto" : "Próximamente más información",
          "titulo" : "Structural and functional plasticity in plants through microbial partners: a holistic approach"
        },
        "horario" : "15:00",
        "nombre" : "Dr. Pablo Hardoim",
        "pais" : "BR",
        "sid" : "el-holobionte-planta"
      },
      "paula-aguilera" : {
        "_en" : {
          "bio" : "Académico, Investigador, Encargada de Transferencia Tecnológica en Núcleo Científico Tecnológico (BIOREN-UFRO), Universidad de la Frontera. Ing. Agrónomo, Magíster y Doctorado en Ciencias de Recursos Naturales. Co-fundadora de la Red Sudamericana de Micorrizas “South American Mycorrhizal Network” y Fundadora de la Empresa de Base Científico Tecnológica (EBCT) Myconativa Ltda.",
          "texto" : "La StartUp Myconativa es una empresa impulsada desde la academia que genera bioproductos a partir de la investigación y a la vez entrega servicios tecnológicos e instrucción. Los resultados de una tesis de doctorado permitieron transformar el know how en tecnología, esto fue posible debido al cofinanciamiento de instrumentos nacionales, al patrocinio de la Universidad de la Frontera y al campo experimental de la empresa. Como empresa buscamos incorporar tecnologías que otorguen un manejo productivo sustentable a la agricultura, con énfasis en el valor nutricional y funcional de productos que proporciona la fruticultura, horticultura, enología. Al mismo tiempo, favorecer la conservación de los ecosistemas mediante la restauración ecológica y la biorremediación. Los bioproductos corresponden a biofertilizantes, enraizantes, fortificantes, bioestimulantes que se pueden aplicar en plantas de hortalizas, frutales, ornamentales en diferentes etapas del cultivo, así como en la biorremediación y conservación de ecosistemas. La base de los bioproductos generados hasta ahora por nuestra empresa, está constituida por hongos benéficos nativos extraídos desde suelos chilenos que al colonizar la raíz se denominan micorrizas. Los hongos formadores de micorrizas aportan a la fertilización bioquímica. MYCONATIVA® es el primer bioproducto inoculante desarrollado en nuestra empresa y ha sido diseñado en base a hongos nativos micorrícicos arbusculares aislados desde la región de La Araucanía para su uso como vigorizador de plantas agrícolas producidas en vivero o almácigo. Es un biofortificante con micorrizas que favorece la conducción de agua, nutrientes, estimula la germinación, emergencia, enraizamiento, floración, producción de biomasa y producto final. Pantas inoculadas con MYCONATIVA® toleran mayor estrés ambiental y resistencia al déficit hídrico. Las micorrizas corresponden a una simbiosis entre hongos benéficos y las raíces de las plantas, el hongo incrementa la capacidad de absorción de agua, macro y micronutrientes, aumenta la resistencia de las plantas hacia las enfermedades, científicamente se ha evidenciado que beneficia a plantas que viven en estrés hídrico, salinidad, presencia de contaminantes, a cambio la planta le entrega al hongo los productos carbonados de la fotosíntesis para que ellos puedan vivir. Se presentarán casos de Estudio de Campo.",
          "titulo" : "Experiencia Myconativa: Desde la Ciencia hacia la Innovación"
        },
        "_es" : {
          "bio" : "Académico, Investigador, Encargada de Transferencia Tecnológica en Núcleo Científico Tecnológico (BIOREN-UFRO), Universidad de la Frontera. Ing. Agrónomo, Magíster y Doctorado en Ciencias de Recursos Naturales. Co-fundadora de la Red Sudamericana de Micorrizas “South American Mycorrhizal Network” y Fundadora de la Empresa de Base Científico Tecnológica (EBCT) Myconativa Ltda.",
          "texto" : "La StartUp Myconativa es una empresa impulsada desde la academia que genera bioproductos a partir de la investigación y a la vez entrega servicios tecnológicos e instrucción. Los resultados de una tesis de doctorado permitieron transformar el know how en tecnología, esto fue posible debido al cofinanciamiento de instrumentos nacionales, al patrocinio de la Universidad de la Frontera y al campo experimental de la empresa. Como empresa buscamos incorporar tecnologías que otorguen un manejo productivo sustentable a la agricultura, con énfasis en el valor nutricional y funcional de productos que proporciona la fruticultura, horticultura, enología. Al mismo tiempo, favorecer la conservación de los ecosistemas mediante la restauración ecológica y la biorremediación. Los bioproductos corresponden a biofertilizantes, enraizantes, fortificantes, bioestimulantes que se pueden aplicar en plantas de hortalizas, frutales, ornamentales en diferentes etapas del cultivo, así como en la biorremediación y conservación de ecosistemas. La base de los bioproductos generados hasta ahora por nuestra empresa, está constituida por hongos benéficos nativos extraídos desde suelos chilenos que al colonizar la raíz se denominan micorrizas. Los hongos formadores de micorrizas aportan a la fertilización bioquímica. MYCONATIVA® es el primer bioproducto inoculante desarrollado en nuestra empresa y ha sido diseñado en base a hongos nativos micorrícicos arbusculares aislados desde la región de La Araucanía para su uso como vigorizador de plantas agrícolas producidas en vivero o almácigo. Es un biofortificante con micorrizas que favorece la conducción de agua, nutrientes, estimula la germinación, emergencia, enraizamiento, floración, producción de biomasa y producto final. Pantas inoculadas con MYCONATIVA® toleran mayor estrés ambiental y resistencia al déficit hídrico. Las micorrizas corresponden a una simbiosis entre hongos benéficos y las raíces de las plantas, el hongo incrementa la capacidad de absorción de agua, macro y micronutrientes, aumenta la resistencia de las plantas hacia las enfermedades, científicamente se ha evidenciado que beneficia a plantas que viven en estrés hídrico, salinidad, presencia de contaminantes, a cambio la planta le entrega al hongo los productos carbonados de la fotosíntesis para que ellos puedan vivir. Se presentarán casos de Estudio de Campo.",
          "titulo" : "Experiencia Myconativa: Desde la Ciencia hacia la Innovación"
        },
        "_pt" : {
          "bio" : "Académico, Investigador, Encargada de Transferencia Tecnológica en Núcleo Científico Tecnológico (BIOREN-UFRO), Universidad de la Frontera. Ing. Agrónomo, Magíster y Doctorado en Ciencias de Recursos Naturales. Co-fundadora de la Red Sudamericana de Micorrizas “South American Mycorrhizal Network” y Fundadora de la Empresa de Base Científico Tecnológica (EBCT) Myconativa Ltda.",
          "texto" : "La StartUp Myconativa es una empresa impulsada desde la academia que genera bioproductos a partir de la investigación y a la vez entrega servicios tecnológicos e instrucción. Los resultados de una tesis de doctorado permitieron transformar el know how en tecnología, esto fue posible debido al cofinanciamiento de instrumentos nacionales, al patrocinio de la Universidad de la Frontera y al campo experimental de la empresa. Como empresa buscamos incorporar tecnologías que otorguen un manejo productivo sustentable a la agricultura, con énfasis en el valor nutricional y funcional de productos que proporciona la fruticultura, horticultura, enología. Al mismo tiempo, favorecer la conservación de los ecosistemas mediante la restauración ecológica y la biorremediación. Los bioproductos corresponden a biofertilizantes, enraizantes, fortificantes, bioestimulantes que se pueden aplicar en plantas de hortalizas, frutales, ornamentales en diferentes etapas del cultivo, así como en la biorremediación y conservación de ecosistemas. La base de los bioproductos generados hasta ahora por nuestra empresa, está constituida por hongos benéficos nativos extraídos desde suelos chilenos que al colonizar la raíz se denominan micorrizas. Los hongos formadores de micorrizas aportan a la fertilización bioquímica. MYCONATIVA® es el primer bioproducto inoculante desarrollado en nuestra empresa y ha sido diseñado en base a hongos nativos micorrícicos arbusculares aislados desde la región de La Araucanía para su uso como vigorizador de plantas agrícolas producidas en vivero o almácigo. Es un biofortificante con micorrizas que favorece la conducción de agua, nutrientes, estimula la germinación, emergencia, enraizamiento, floración, producción de biomasa y producto final. Pantas inoculadas con MYCONATIVA® toleran mayor estrés ambiental y resistencia al déficit hídrico. Las micorrizas corresponden a una simbiosis entre hongos benéficos y las raíces de las plantas, el hongo incrementa la capacidad de absorción de agua, macro y micronutrientes, aumenta la resistencia de las plantas hacia las enfermedades, científicamente se ha evidenciado que beneficia a plantas que viven en estrés hídrico, salinidad, presencia de contaminantes, a cambio la planta le entrega al hongo los productos carbonados de la fotosíntesis para que ellos puedan vivir. Se presentarán casos de Estudio de Campo.",
          "titulo" : "Experiencia Myconativa: Desde la Ciencia hacia la Innovación"
        },
        "horario" : "15:45",
        "nombre" : "Dra. Paula Aguilera",
        "pais" : "CL",
        "sid" : "del-laboratorio-al-campo"
      },
      "romina-almesia" : {
        "_en" : {
          "bio" : "Magíster Cs en área de ecología molecular microbiana e Ingeniera en Biotecnología molecular de la Universidad de Chile. Experiencia en empresas de bioinsumos agrícolas, gestionando y dirigiendo desarrollos desde el laboratorio al mercado, ejerciendo en i+D+i. Asesor de registros de productos agrícolas biológicos ante el SAG en Chile y a nivel internacional. Consultor de patentes de invención. Directora y Vicepresidenta de la Red Chilena de Bioinsumos.",
          "texto" : "",
          "titulo" : "Próximamente más información"
        },
        "_es" : {
          "bio" : "Magíster en ciencias en área de ecología molecular microbiana e Ingeniera en Biotecnología molecular de la Universidad de Chile. Experiencia en empresas de bioinsumos agrícolas, gestionando y dirigiendo desarrollos desde el laboratorio al mercado, ejerciendo en i+D+i. Asesor de registros de productos agrícolas biológicos ante el SAG en Chile y a nivel internacional. Consultor de patentes de invención en el área Biológica. Directora y Vicepresidenta de la Red Chilena de Bioinsumos. ",
          "texto" : "En respuesta al explosivo crecimiento que han tenido los productos agrícolas de origen biológico, es que los distintos países han ido abordando la regulación en torno a este tipo de insumos, que hoy se han vuelto un elemento importante dentro de los planes de manejo. Sin embargo, no existen armonización de conceptos ni de requisitos, sino que por el contrario cada país ha fijado estándares y ha avanzado en la regulación de plaguicidas o fertilizantes/estimulantes biológicos. En Chile existe un marco normativo con requisitos definidos en el área de los plaguicidas químicos, en el que desde el año 2014 se incluyo el concepto de plaguicida natural que considera a los productos formulado en base a microorganismos, macrooganismos y extractos naturales. Luego, en el 2018 se generó un apartado o sección especial de requisitos específicos para el registro de productos plaguicidas en base a microorganismos. Por otro lado, este año 2021, se dicto una ley que establece normas sobre composición, etiquetado y comercialización de los fertilizantes y bioestimulantes, en la que se incluye el concepto de bioestimulante como tal. Esta nueva ley entregara mayores herramientas al ente regulador para fijar estándares sobre parámetros de calidad, composición, clasificación, envasado, declaración, etiquetado y trazabilidad aplicables a la fabricación, formulación, producción, comercialización, tenencia, importación y exportación de fertilizantes y bioestimulantes. Así como también permitirá la creación de un Registro Único Nacional que hasta la fecha no existía. ",
          "titulo" : "Normativa de productos agrícolas biológicos en Chile "
        },
        "_pt" : {
          "bio" : "Magíster Cs en área de ecología molecular microbiana e Ingeniera en Biotecnología molecular de la Universidad de Chile. Experiencia en empresas de bioinsumos agrícolas, gestionando y dirigiendo desarrollos desde el laboratorio al mercado, ejerciendo en i+D+i. Asesor de registros de productos agrícolas biológicos ante el SAG en Chile y a nivel internacional. Consultor de patentes de invención. Directora y Vicepresidenta de la Red Chilena de Bioinsumos.",
          "texto" : "",
          "titulo" : "Próximamente más información"
        },
        "horario" : "10:00",
        "nombre" : "Mag. Bio. Romina Almasia",
        "pais" : "CL",
        "sid" : "legislación-sobre-productos-microbianos"
      }
    },
    "mesas" : {
      "bioinsumos" : {
        "_en" : {
          "texto" : "Uno de los principales desafíos del siglo XXI es cubrir la alta demanda alimenticia de la población mundial. En ese sentido, los sistemas productivos actuales basados en prácticas agrícolas focalizadas en el uso de agroquímicos, han llegado a su límite de sustentabilidad ambiental y económica. Para lograr un cambio significativo, nuevas prácticas agrícolas sustentables son necesarias de investigar y desarrollar. En este contexto, los microorganismos naturalmente asociados al sistema suelo-planta juegan un rol fundamental, debido a su ampliamente demostrada capacidad de promover el crecimiento vegetal directa o indirectamente. Este cambio de paradigma implica el esfuerzo de diferentes actores en la cadena productiva, en un camino no exento de adversidades. La finalidad de esta actividad, es fomentar el intercambio de experiencias entre diferentes actores internacionales involucrados en el desarrollo, producción y aplicación de bioinsumos basados en microorganismos promotores del crecimiento vegetal. Para esto, la mesa redonda cuenta con una diversidad de panelistas provenientes de Argentina, Brasil, Chile y Uruguay, así como de un organismo interamericano; que expondrán sobre las ventajas y limitaciones de la aplicación de bioinsumos en los sistemas productivos. Se propone el intercambio de opiniones en base a la necesidad y posibilidad de desarrollar modelos alternativos de producción más sustentables basadas en bioinsumos.",
          "titulo" : "Actores involucrados en el desarrollo y aplicación de bioinsumos: ¿Es posible un modelo alternativo de producción?"
        },
        "_es" : {
          "texto" : "Uno de los principales desafíos del siglo XXI es cubrir la alta demanda alimenticia de la población mundial. En ese sentido, los sistemas productivos actuales basados en prácticas agrícolas focalizadas en el uso de agroquímicos, han llegado a su límite de sustentabilidad ambiental y económica. Para lograr un cambio significativo, nuevas prácticas agrícolas sustentables son necesarias de investigar y desarrollar. En este contexto, los microorganismos naturalmente asociados al sistema suelo-planta juegan un rol fundamental, debido a su ampliamente demostrada capacidad de promover el crecimiento vegetal directa o indirectamente. Este cambio de paradigma implica el esfuerzo de diferentes actores en la cadena productiva, en un camino no exento de adversidades. La finalidad de esta actividad, es fomentar el intercambio de experiencias entre diferentes actores internacionales involucrados en el desarrollo, producción y aplicación de bioinsumos basados en microorganismos promotores del crecimiento vegetal. Para esto, la mesa redonda cuenta con una diversidad de panelistas provenientes de Argentina, Brasil, Chile y Uruguay, así como de un organismo interamericano; que expondrán sobre las ventajas y limitaciones de la aplicación de bioinsumos en los sistemas productivos. Se propone el intercambio de opiniones en base a la necesidad y posibilidad de desarrollar modelos alternativos de producción más sustentables basadas en bioinsumos.",
          "titulo" : "Actores involucrados en el desarrollo y aplicación de bioinsumos: ¿Es posible un modelo alternativo de producción?"
        },
        "_pt" : {
          "texto" : "Uno de los principales desafíos del siglo XXI es cubrir la alta demanda alimenticia de la población mundial. En ese sentido, los sistemas productivos actuales basados en prácticas agrícolas focalizadas en el uso de agroquímicos, han llegado a su límite de sustentabilidad ambiental y económica. Para lograr un cambio significativo, nuevas prácticas agrícolas sustentables son necesarias de investigar y desarrollar. En este contexto, los microorganismos naturalmente asociados al sistema suelo-planta juegan un rol fundamental, debido a su ampliamente demostrada capacidad de promover el crecimiento vegetal directa o indirectamente. Este cambio de paradigma implica el esfuerzo de diferentes actores en la cadena productiva, en un camino no exento de adversidades. La finalidad de esta actividad, es fomentar el intercambio de experiencias entre diferentes actores internacionales involucrados en el desarrollo, producción y aplicación de bioinsumos basados en microorganismos promotores del crecimiento vegetal. Para esto, la mesa redonda cuenta con una diversidad de panelistas provenientes de Argentina, Brasil, Chile y Uruguay, así como de un organismo interamericano; que expondrán sobre las ventajas y limitaciones de la aplicación de bioinsumos en los sistemas productivos. Se propone el intercambio de opiniones en base a la necesidad y posibilidad de desarrollar modelos alternativos de producción más sustentables basadas en bioinsumos.",
          "titulo" : "Actores involucrados en el desarrollo y aplicación de bioinsumos: ¿Es posible un modelo alternativo de producción?"
        },
        "conferencistas" : [ "pedro-lage", "tomas-pedro-krotsch", "solon-cordeiro-de-araujo", "maribel-parada", "roberto-rapela" ],
        "coordinadores" : "Coordinadores: Dr. Federico Battistoni (Uruguay) y Dr. Fabricio Cassan (Argentina)",
        "horario" : "Viernes 8 de octubre"
      },
      "mujeres-en-la-ciencia" : {
        "_en" : {
          "texto" : "La Mesa redonda propone presentar la participación de las mujeres en la ciencia en algunos países de la región, incorporando los datos generados a partir de distintas instituciones y comisiones de género que se encuentran trabajando en el tema. Asimismo, se debatirá sobre las medidas que podrían adoptarse para incentivar que las mujeres opten por estas carreras y en particular, formarse como líderes referentes.",
          "titulo" : "Mujeres en la ciencia"
        },
        "_es" : {
          "texto" : "La Mesa redonda propone presentar la participación de las mujeres en la ciencia en algunos países de la región, incorporando los datos generados a partir de distintas instituciones y comisiones de género que se encuentran trabajando en el tema. Asimismo, se debatirá sobre las medidas que podrían adoptarse para incentivar que las mujeres opten por estas carreras y en particular, formarse como líderes referentes.",
          "titulo" : "Mujeres en la ciencia"
        },
        "_pt" : {
          "texto" : "La Mesa redonda propone presentar la participación de las mujeres en la ciencia en algunos países de la región, incorporando los datos generados a partir de distintas instituciones y comisiones de género que se encuentran trabajando en el tema. Asimismo, se debatirá sobre las medidas que podrían adoptarse para incentivar que las mujeres opten por estas carreras y en particular, formarse como líderes referentes.",
          "titulo" : "Mujeres en la ciencia"
        },
        "conferencistas" : [ "estela-castillo", "mariangela-hungria", "esperanza-martinez" ],
        "coordinadores" : "Coordinadora: Dra. Silvia Batista (Uruguay)",
        "horario" : "Lunes 4 de octubre"
      }
    },
    "panelistas" : {
      "esperanza-martinez" : {
        "_en" : {
          "bio" : "More information soon"
        },
        "_es" : {
          "bio" : "Es investigadora Titular C del Centro de Ciencias Genómicas de la Universidad Nacional Autónoma de México (UNAM) en Cuernavaca, México. Investiga la convivencia pacífica entre especies: simbiosis mutualistas de bacterias con plantas y animales nativos de México con enfoques metagenómicos y de genómica funcional."
        },
        "_pt" : {
          "bio" : "Mais informações em breve"
        },
        "nombre" : "Dra. Esperanza Martinez",
        "pais" : "MX"
      },
      "estela-castillo" : {
        "_en" : {
          "bio" : ""
        },
        "_es" : {
          "bio" : "Nacida en Tacuarembó, 1966 es Licenciada en Ciencias Biológicas, FHC UdelaR (1989). Obtuvo la Maestría en Ciencias Biológicas, PEDECIBA (1994) y completó la formación de posgrado en la Universidad de Barcelona donde obtuvo el Doctorado en 1997. Madre de 4 hijos. Subdirectora del PEDECIBA. Profesora Agregada de la Facultad de Ciencias. Ha tenido una activa y prolífica actividad de investigación relacionada a la Biología Celular y Molecular de parásitos, responsable de numerosos proyectos financiados, numerosas comunicaciones a congresos nacionales e Internacionales, decenas de artículos publicados en revistas arbitradas internacionales, y varios capítulos de libro. Contribuyo a la formación de recursos humanos dirigiendo tesis de grado y de posgrado. Llevo a cabo muy diversas actividades de cogobierno y de extensión. Ha participado activamente en actividades de divulgación y actualización para enseñanza primaria y secundaria en programas diversos."
        },
        "_pt" : {
          "bio" : ""
        },
        "nombre" : "Dra. Estela Castillo",
        "pais" : "UY"
      },
      "mariangela-hungria" : {
        "_en" : {
          "bio" : ""
        },
        "_es" : {
          "bio" : "<p>Agrónoma, microbióloga, investigadora de Embrapa Soja y profesora de posgrado de la Universidade Estadual de Londrina, Paraná, Brasil. Especialista en fijación biológica de nitrógeno y otros procesos microbianos relacionados con bacterias promotoras del crecimiento vegetal. Tiene más de 700 tipos de publicación y ha lanzado más de 30 cepas tecnológicas y de inoculantes.</p><p><a href=\"http://lattes.cnpq.br/7355162785040506\" target=\"_blank\">Link CV</a></p>"
        },
        "_pt" : {
          "bio" : ""
        },
        "nombre" : "Dra. Mariangela Hungría",
        "pais" : "BR"
      },
      "maribel-parada" : {
        "_en" : {
          "bio" : ""
        },
        "_es" : {
          "bio" : "Nacida en la ciudad de Linares, realizó sus estudios universitarios en la UFRO, Temuco. Profesora de estado en Biología y Ciencias Naturales, por lo que luchó por hacer de la docencia su profesión. Inicia su actividad profesional trabajando en Fitopatología en la Estación Experimental Carillanca, INIA. En agosto de 1990 ingresa a la Facultad de Ciencias Agropecuarias y Forestales de la UFRO. Su actividad docente y de investigación ha estado centrada en el área de la fitopatología y la microbiología. Es Magíster en Ciencias mención Protección Vegetal, por la UACH y Doctora en Biología Molecular y Celular por la Universidad de Sevilla, España. Directora del Centro Biotecnológico de Estudios Microbianos (CEBEM), Vicepresidenta y Coordinadora Nacional de la Asociación Latinoamericana de Rizobiología y Presidenta de la Red Chilena de Bioinsumos A.G."
        },
        "_pt" : {
          "bio" : ""
        },
        "institucion" : "Red Chilena de Bioinsumos",
        "nombre" : "Dra. Maribel Parada",
        "pais" : "CL",
        "url" : "https://bioinsumos.cl/"
      },
      "pedro-lage" : {
        "_en" : {
          "bio" : ""
        },
        "_es" : {
          "bio" : "2019-2021:Lallemand Plant Care. Gerente Comercial Argentina, Chile y Uruguay.<br>1996-2019: Lage y Cía. S.A., Uruguay, Gerente Comercial<br>2000-2010: Nitrasoil Argentina S.A., Argentina, Directo<br>1996-2000: Universidad ORT, Uruguay. Coordinador de Graduados y Postgrados, Facultad de Ingeniería<br>1991-1992: Ministerio de Transportes y Obras Públicas, Uruguay. Dirección Nacional de Vialidad, Departamento de Estructuras. Ayudante de Ingeniero.<br>1993-1994: MBA, IAE, Universidad Austral, Argentina.<br>1982-1992: Ingeniero Civil, opción Estructural. Facultad de Ingeniería, Universidad de la República Oriental del Uruguay--"
        },
        "_pt" : {
          "bio" : ""
        },
        "institucion" : "Empresa Lage y Cía - Lallemand",
        "nombre" : "Ing. Pedro Lage",
        "pais" : "UY",
        "url" : "https://www.lallemand.com/"
      },
      "roberto-rapela" : {
        "_en" : {
          "bio" : ""
        },
        "_es" : {
          "bio" : "Médico Cirujano, Facultad de Medicina UBA, Argentina. Ex Presidente y Miembro Fundador de CACER (Cámara de Certificadoras de Alimentos, Productos Orgánicos y Afines). Ex Vicepresidente de CALIBA (Cámara Argentina de Laboratorios Independientes Bromatológicos y Afines). Ex Presidente de FOOD SAFETY S.A., Empresa de Servicios de Certificación. Apoderado de Laboratorio Biomédico Dr. Rapela. Presidente de ALEPAR S.A. (Empresa Productora de Ganadería Sustentable). Presidente de la Fundación sin fines de lucro CECEX (Centro de Estudios de Comercio Exterior). Miembro Adherente Alianza del Pastizal -iniciativa para la Conservación de la biodiversidad de los Pastizales del Sur de Sur América. Representante de Mapo en CABUA, (Comité Asesor en Bioinsumos de Uso Agropecuario). Miembro fundador y presidente de CABIO (Cámara Argentina de Bioinsumos). Presidente de HMA4 S.A. (Empresa Nacional productora de Bioinsumos para uso Agropecuario)"
        },
        "_pt" : {
          "bio" : ""
        },
        "institucion" : "Cámara Argentina de Bioinsumos - CABIO",
        "nombre" : "Sr. Roberto Rapela",
        "pais" : "AR",
        "url" : "http://www.cabio.com.ar/"
      },
      "solon-cordeiro-de-araujo" : {
        "_en" : {
          "bio" : ""
        },
        "_es" : {
          "bio" : "Ingeniero agrónomo, graduado en la Escuela de Agronomía Eliseu Maciel, de Pelotas, RS. Empezó como Investigador en el IBPT de Paraná, instalando el Sector de Inoculantes. Posteriormente fue Director Técnico y de I&D en cuatro empresas de inoculantes. Actualmente es socio director de SCA Consultoria y Consultor de la Associação Nacional dos Productores e Importadores de Inoculantes -ANPII"
        },
        "_pt" : {
          "bio" : ""
        },
        "institucion" : "Asociación Nacional de Productores e Importadores de Inoculantes - ANPII",
        "nombre" : "Sr. Solon Cordeiro de Araujo",
        "pais" : "BR",
        "url" : "http://www.anpii.org.br/"
      },
      "tomas-pedro-krotsch" : {
        "_en" : {
          "bio" : ""
        },
        "_es" : {
          "bio" : "Desde 2004 es Especialista en Sanidad Agropecuaria,  Inocuidad y Calidad de los Alimentos (SAIA) en el Instituto Interamericano de Cooperación para la Agricultura – IICA, desempeñó ese cargo en el IICA en Brasil y, desde 2009 en Argentina.  Veterinario, formado en el año 2000 con Especialización en Producción Animal en la Universidad de Buenos Aires – UBA. Colabora desde 2013 en el fortalecimiento de la institucionalidad para la promoción del uso y desarrollo del sector de los Bioinsumos en la Argentina, fomentando el diálogo y el intercambio  entre los sectores público,  privado y entre los diferentes países.  Es miembro observador por parte del IICA en el Comité Asesor de Bioinsumos de uso Agropecuario (CABUA) que funciona en el ámbito de la Coordinación de Innovación y Biotecnología de la Dirección Nacional de Bioeconomía de la Secretaría de Alimentos, Bioeconomía y Desarrollo regional del Ministerio de Agricultura, Ganadería y Pesca."
        },
        "_pt" : {
          "bio" : ""
        },
        "institucion" : "Instituto Interamericano de Cooperación para la Agricultura - IICA",
        "nombre" : "Sr. Tomás Pedro Krotsch",
        "pais" : "AR",
        "url" : "https://iica.int/es"
      }
    },
    "sesiones" : {
      "conservación-y-manejo-microbiano" : {
        "_en" : {
          "texto" : "<p>El suelo es uno de los reservorios de mayor biodiversidad del planeta, en particular a nivel microbiológico. Estos microorganismos son muy numerosos y cumplen funciones clave en el suelo y en relación al ambiente, ya sea en ecosistemas naturales como en aquellos dedicados a la producción agropecuaria.</p><p>En esta sesión abordaremos la importancia de la conservación de los microbiomas del suelo y los asociados a las plantas. Las prácticas  agropecuarias convencionales han tenido importantes impactos sobre la biodiversidad de los suelos. La conservación y recuperación de los mismos es fundamental para producir alimentos en forma sustentable y para preservar servicios ecosistémicos. Se han desarrollado formas alternativas de producción (agricultura orgánica, regenerativa, agroecología, entre otras) que reconocen la importancia de la microbiota y apuntan a su conservación. Prácticas de manejo del suelo y de los cultivos que favorezcan los microbiomas del sistema, así como el uso de biofertilizantes y agentes de control biológico, son herramientas fundamentales para la transición a sistemas de producción más sostenibles, que incorporen los aportes de los microorganismos en la producción de alimentos.</p>",
          "titulo" : "Conservación y manejo microbiano en sistemas naturales y agroecosistemas"
        },
        "_es" : {
          "texto" : "<p>El suelo es uno de los reservorios de mayor biodiversidad del planeta, en particular a nivel microbiológico. Estos microorganismos son muy numerosos y cumplen funciones clave en el suelo y en relación al ambiente, ya sea en ecosistemas naturales como en aquellos dedicados a la producción agropecuaria.</p><p>En esta sesión abordaremos la importancia de la conservación de los microbiomas del suelo y los asociados a las plantas. Las prácticas  agropecuarias convencionales han tenido importantes impactos sobre la biodiversidad de los suelos. La conservación y recuperación de los mismos es fundamental para producir alimentos en forma sustentable y para preservar servicios ecosistémicos. Se han desarrollado formas alternativas de producción (agricultura orgánica, regenerativa, agroecología, entre otras) que reconocen la importancia de la microbiota y apuntan a su conservación. Prácticas de manejo del suelo y de los cultivos que favorezcan los microbiomas del sistema, así como el uso de biofertilizantes y agentes de control biológico, son herramientas fundamentales para la transición a sistemas de producción más sostenibles, que incorporen los aportes de los microorganismos en la producción de alimentos.</p>",
          "titulo" : "Conservación y manejo microbiano en sistemas naturales y agroecosistemas"
        },
        "_pt" : {
          "texto" : "<p>El suelo es uno de los reservorios de mayor biodiversidad del planeta, en particular a nivel microbiológico. Estos microorganismos son muy numerosos y cumplen funciones clave en el suelo y en relación al ambiente, ya sea en ecosistemas naturales como en aquellos dedicados a la producción agropecuaria.</p><p>En esta sesión abordaremos la importancia de la conservación de los microbiomas del suelo y los asociados a las plantas. Las prácticas  agropecuarias convencionales han tenido importantes impactos sobre la biodiversidad de los suelos. La conservación y recuperación de los mismos es fundamental para producir alimentos en forma sustentable y para preservar servicios ecosistémicos. Se han desarrollado formas alternativas de producción (agricultura orgánica, regenerativa, agroecología, entre otras) que reconocen la importancia de la microbiota y apuntan a su conservación. Prácticas de manejo del suelo y de los cultivos que favorezcan los microbiomas del sistema, así como el uso de biofertilizantes y agentes de control biológico, son herramientas fundamentales para la transición a sistemas de producción más sostenibles, que incorporen los aportes de los microorganismos en la producción de alimentos.</p>",
          "titulo" : "Conservación y manejo microbiano en sistemas naturales y agroecosistemas"
        },
        "conferencistas" : [ "marina-sanchez", "alda-rodriguez" ],
        "coordinadores" : "Coordinadores: Dra. Natalia Bajsa (Uruguay) y Dr. Luis Wall (Argentina)",
        "dialogos" : [ "-MeVzLc1sHpXjbhPFTPh", "-Mf5XdDzx7DzINZKl3PB", "-MgM6SJ9kBhggxwCMNhY" ],
        "horario" : "Jueves 7 de octubre",
        "tema" : 6
      },
      "del-laboratorio-al-campo" : {
        "_en" : {
          "texto" : "<p>El concepto de intensificación sostenible de los sistemas productivos requiere gestionar la biodiversidad y los servicios ecosistémicos, mediante la promoción de estrategias para el manejo sanitario y nutricional de los cultivos que mitiguen los riesgos asociados al uso de agroquímicos.</p><p>El desarrollo de productos microbianos de uso agrícola se basa en el reconocimiento de la diversidad y la multifuncionalidad presente en el microbioma, estudiando los procesos biológicos y las características asociadas a la protección y nutrición vegetal. El desafío es identificar cepas con la función deseada que puedan ser utilizadas para desarrollar un producto tecnológico, a través de los procesos de bioproducción y formulación, y ser escaladas a nivel industrial con fines de comercialización y uso en los agroecosistemas.</p><p>El objetivo de esta sesión es promover el intercambio de conocimiento y las perspectivas de la investigación en bioinsumos agrícolas, recorriendo un camino que comienza en el laboratorio y finaliza en el campo. La Dra. María Caridad Nápoles expondrá sobre la generación de productos microbianos como pilar de una agricultura autosustentable, describiendo el caso de Cuba. La Dra. Paula Aguilera expondrá sobre el inoculante MYCONATIVA®, desarrollado en base a hongos nativos micorrícicos arbusculares, describiendo los beneficios asociados a su uso.</p>",
          "titulo" : "Del laboratorio al campo"
        },
        "_es" : {
          "texto" : "<p>El concepto de intensificación sostenible de los sistemas productivos requiere gestionar la biodiversidad y los servicios ecosistémicos, mediante la promoción de estrategias para el manejo sanitario y nutricional de los cultivos que mitiguen los riesgos asociados al uso de agroquímicos.</p><p>El desarrollo de productos microbianos de uso agrícola se basa en el reconocimiento de la diversidad y la multifuncionalidad presente en el microbioma, estudiando los procesos biológicos y las características asociadas a la protección y nutrición vegetal. El desafío es identificar cepas con la función deseada que puedan ser utilizadas para desarrollar un producto tecnológico, a través de los procesos de bioproducción y formulación, y ser escaladas a nivel industrial con fines de comercialización y uso en los agroecosistemas.</p><p>El objetivo de esta sesión es promover el intercambio de conocimiento y las perspectivas de la investigación en bioinsumos agrícolas, recorriendo un camino que comienza en el laboratorio y finaliza en el campo. La Dra. María Caridad Nápoles expondrá sobre la generación de productos microbianos como pilar de una agricultura autosustentable, describiendo el caso de Cuba. La Dra. Paula Aguilera expondrá sobre el inoculante MYCONATIVA®, desarrollado en base a hongos nativos micorrícicos arbusculares, describiendo los beneficios asociados a su uso.</p>",
          "titulo" : "Del laboratorio al campo"
        },
        "_pt" : {
          "texto" : "<p>El concepto de intensificación sostenible de los sistemas productivos requiere gestionar la biodiversidad y los servicios ecosistémicos, mediante la promoción de estrategias para el manejo sanitario y nutricional de los cultivos que mitiguen los riesgos asociados al uso de agroquímicos.</p><p>El desarrollo de productos microbianos de uso agrícola se basa en el reconocimiento de la diversidad y la multifuncionalidad presente en el microbioma, estudiando los procesos biológicos y las características asociadas a la protección y nutrición vegetal. El desafío es identificar cepas con la función deseada que puedan ser utilizadas para desarrollar un producto tecnológico, a través de los procesos de bioproducción y formulación, y ser escaladas a nivel industrial con fines de comercialización y uso en los agroecosistemas.</p><p>El objetivo de esta sesión es promover el intercambio de conocimiento y las perspectivas de la investigación en bioinsumos agrícolas, recorriendo un camino que comienza en el laboratorio y finaliza en el campo. La Dra. María Caridad Nápoles expondrá sobre la generación de productos microbianos como pilar de una agricultura autosustentable, describiendo el caso de Cuba. La Dra. Paula Aguilera expondrá sobre el inoculante MYCONATIVA®, desarrollado en base a hongos nativos micorrícicos arbusculares, describiendo los beneficios asociados a su uso.</p>",
          "titulo" : "Del laboratorio al campo"
        },
        "conferencistas" : [ "maria-caridad-napoles", "paula-aguilera" ],
        "coordinadores" : "Coordinadoras: Dra. Nora Altier (Uruguay) y Dra. Mariangela Hungría (Brasil)",
        "dialogos" : [ "-Mh000TrGcrztJAsgKYi", "-MhBpsBBOJDzEo-eXzzY", "-MhBTv_21f080I1ZDcn5" ],
        "horario" : "Jueves 7 de octubre",
        "tema" : 7
      },
      "el-holobionte-planta" : {
        "_en" : {
          "texto" : "<p>«Todos somos comunidades de microbios. Cada planta y cada animal en la Tierra es hoy producto de la simbiosis» Lynn Margulis.</p><p>Justamente el concepto de “holobionte” hace referencia a esa estrecha asociación entre individuos de diferentes reinos, generando una unidad en sí misma con desarrollo y evolución propios, con características anatómicas y fisiológicas únicas.</p><p>En esta mesa nos vamos a centrar en el “holobionte planta”. Las presentaciones de Emanuel de Souza y Pablo Hardoim nos van a mostrar una visión holística, integral, sobre la unidad planta-microbiota. ¿Las plantas tendrían el mismo aroma, producirían los mismos compuestos, se alimentarán por igual sin su microbiota? ¿Podrían defenderse de las enfermedades, enfrentar a los patógenos estando solas? ¿Habrían tenido el mismo proceso evolutivo y desarrollo si no hubiesen estado estrechamente asociadas a su microbiota?</p>",
          "titulo" : "El Holobionte Planta"
        },
        "_es" : {
          "texto" : "<p>«Todos somos comunidades de microbios. Cada planta y cada animal en la Tierra es hoy producto de la simbiosis» Lynn Margulis.</p><p>Justamente el concepto de “holobionte” hace referencia a esa estrecha asociación entre individuos de diferentes reinos, generando una unidad en sí misma con desarrollo y evolución propios, con características anatómicas y fisiológicas únicas.</p><p>En esta mesa nos vamos a centrar en el “holobionte planta”. Las presentaciones de Emanuel de Souza y Pablo Hardoim nos van a mostrar una visión holística, integral, sobre la unidad planta-microbiota. ¿Las plantas tendrían el mismo aroma, producirían los mismos compuestos, se alimentarán por igual sin su microbiota? ¿Podrían defenderse de las enfermedades, enfrentar a los patógenos estando solas? ¿Habrían tenido el mismo proceso evolutivo y desarrollo si no hubiesen estado estrechamente asociadas a su microbiota?</p>",
          "titulo" : "El Holobionte Planta"
        },
        "_pt" : {
          "texto" : "<p>«Todos somos comunidades de microbios. Cada planta y cada animal en la Tierra es hoy producto de la simbiosis» Lynn Margulis.</p><p>Justamente el concepto de “holobionte” hace referencia a esa estrecha asociación entre individuos de diferentes reinos, generando una unidad en sí misma con desarrollo y evolución propios, con características anatómicas y fisiológicas únicas.</p><p>En esta mesa nos vamos a centrar en el “holobionte planta”. Las presentaciones de Emanuel de Souza y Pablo Hardoim nos van a mostrar una visión holística, integral, sobre la unidad planta-microbiota. ¿Las plantas tendrían el mismo aroma, producirían los mismos compuestos, se alimentarán por igual sin su microbiota? ¿Podrían defenderse de las enfermedades, enfrentar a los patógenos estando solas? ¿Habrían tenido el mismo proceso evolutivo y desarrollo si no hubiesen estado estrechamente asociadas a su microbiota?</p>",
          "titulo" : "El Holobionte Planta"
        },
        "conferencistas" : [ "pablo-hardoim", "emanuel-de-souza" ],
        "coordinadores" : "Coordinadores: Dra. Elena Fabiano (Uruguay) y Dr. Antonio Lagares (Argentina)",
        "dialogos" : [ "-MfIXSS5YW6SE_YYEPji", "-Mh01rL761qHoW246jgW", "-Mg8SjUrTRjRvkjN6yoe" ],
        "horario" : "Miércoles 6 de octubre",
        "tema" : 5
      },
      "evolución-y-diversidad-de-mpcv" : {
        "_en" : {
          "texto" : "Las plantas son sistemas altamente colonizados por microorganismos, cuya presencia determina el crecimiento y la sanidad de los cultivos. Debido al carácter ancestral de las asociaciones microbioma-planta se han observado distintos niveles de sofisticación en estas asociaciones, que incluyen tanto coevolución entre organismos como interacción de comunidades estructuradas complejas con el hospedero. Los cambios en la composición de la comunidad microbiana asociada pueden tener efectos positivos en la capacidad de adaptación a condiciones ambientales cambiantes o extremas y por tanto en la productividad de las plantas. Así, hospedadores y microbiomas constituyen sistemas biológicos complejos y dinámicos, en los cuales el mutualismo, por un lado, y el parasitismo y la patogenicidad por otro, están presentes como parte de un delgado equilibrio modulado fuertemente por el entorno y por las interacciones entre la comunidad microbiana asociada. La sesión Evolución y diversidad de Microorganismos Promotores del Crecimiento Vegetal (MPCV) está orientada a investigaciones relacionadas con la evolución y adaptación de los microorganismos al entorno y a su relación con las plantas. Además, se enfoca en la investigación de la interfaz microorganismo-hospedador, tanto las relaciones patógenas, parasíticas, como los mutualistas, así como también los estudios del microbioma.",
          "titulo" : "Evolución y diversidad de microorganismos promotores de crecimiento vegetal (MPCV)"
        },
        "_es" : {
          "texto" : "Las plantas son sistemas altamente colonizados por microorganismos, cuya presencia determina el crecimiento y la sanidad de los cultivos. Debido al carácter ancestral de las asociaciones microbioma-planta se han observado distintos niveles de sofisticación en estas asociaciones, que incluyen tanto coevolución entre organismos como interacción de comunidades estructuradas complejas con el hospedero. Los cambios en la composición de la comunidad microbiana asociada pueden tener efectos positivos en la capacidad de adaptación a condiciones ambientales cambiantes o extremas y por tanto en la productividad de las plantas. Así, hospedadores y microbiomas constituyen sistemas biológicos complejos y dinámicos, en los cuales el mutualismo, por un lado, y el parasitismo y la patogenicidad por otro, están presentes como parte de un delgado equilibrio modulado fuertemente por el entorno y por las interacciones entre la comunidad microbiana asociada. La sesión Evolución y diversidad de Microorganismos Promotores del Crecimiento Vegetal (MPCV) está orientada a investigaciones relacionadas con la evolución y adaptación de los microorganismos al entorno y a su relación con las plantas. Además, se enfoca en la investigación de la interfaz microorganismo-hospedador, tanto las relaciones patógenas, parasíticas, como los mutualistas, así como también los estudios del microbioma.",
          "titulo" : "Evolución y diversidad de microorganismos promotores de crecimiento vegetal (MPCV)"
        },
        "_pt" : {
          "texto" : "Las plantas son sistemas altamente colonizados por microorganismos, cuya presencia determina el crecimiento y la sanidad de los cultivos. Debido al carácter ancestral de las asociaciones microbioma-planta se han observado distintos niveles de sofisticación en estas asociaciones, que incluyen tanto coevolución entre organismos como interacción de comunidades estructuradas complejas con el hospedero. Los cambios en la composición de la comunidad microbiana asociada pueden tener efectos positivos en la capacidad de adaptación a condiciones ambientales cambiantes o extremas y por tanto en la productividad de las plantas. Así, hospedadores y microbiomas constituyen sistemas biológicos complejos y dinámicos, en los cuales el mutualismo, por un lado, y el parasitismo y la patogenicidad por otro, están presentes como parte de un delgado equilibrio modulado fuertemente por el entorno y por las interacciones entre la comunidad microbiana asociada. La sesión Evolución y diversidad de Microorganismos Promotores del Crecimiento Vegetal (MPCV) está orientada a investigaciones relacionadas con la evolución y adaptación de los microorganismos al entorno y a su relación con las plantas. Además, se enfoca en la investigación de la interfaz microorganismo-hospedador, tanto las relaciones patógenas, parasíticas, como los mutualistas, así como también los estudios del microbioma.",
          "titulo" : "Evolución y diversidad de microorganismos promotores de crecimiento vegetal (MPCV)"
        },
        "conferencistas" : [ "massimiliano-cardinale", "laila-pamela-martinez" ],
        "coordinadores" : "Coordinadores: Dra. Ana Fernandez (Uruguay) y Dr. Mariano Pistorio (Argentina)",
        "dialogos" : [ "-Mgr9RPoFIC6XDn0yA4s", "-MjkDMAN8FCAFBmplMmH", "-MhAr78Ad2tJa2DLI2X9" ],
        "horario" : "Miércoles 6 de octubre",
        "tema" : 1
      },
      "legislación-sobre-productos-microbianos" : {
        "_en" : {
          "texto" : "Existen diferentes grados de avance en las normas sobre productos biológicos a nivel mundial. En Latinoamérica la industria de los biológicos se muestra muy activa y rica en iniciativas en casi todos los países y muchos de ellos cuentan con normativas para inoculantes formulados con bacterias del género rizobio y con otros PGPR con mecanismos de promoción directa sobre el crecimiento vegetal así como también para productos formulados con agentes de control biológico. En los últimos años han surgido nuevos productos, generalmente formulados con consorcios microbianos con diferentes funcionalidades que no se ajustan a las normas existentes. Esto ha llevado a que se utilicen una amplia variedad de términos para identificarlos (inoculantes, biofertilizantes, bioestimulantes, elicitores, bioinsumos, productos biológicos, etc.) generando confusión en su identificación. Es necesario contar con definiciones claras que nos permitan clasificar cada producto de acuerdo a su composición y efecto benéfico para poder contar con marcos normativos apropiados para su evaluación. Se deben concretar tecnologías innovadoras para la agricultura basadas en el conocimiento científico, y para ello es necesario un fuerte compromiso de las Empresas, la Academia y el Estado, acompañado de políticas de investigación, desarrollo y extensión respecto al uso de productos biológicos.",
          "titulo" : "Legislación sobre registro y empleo de productos microbianos"
        },
        "_es" : {
          "texto" : "Existen diferentes grados de avance en las normas sobre productos biológicos a nivel mundial. En Latinoamérica la industria de los biológicos se muestra muy activa y rica en iniciativas en casi todos los países y muchos de ellos cuentan con normativas para inoculantes formulados con bacterias del género rizobio y con otros PGPR con mecanismos de promoción directa sobre el crecimiento vegetal así como también para productos formulados con agentes de control biológico. En los últimos años han surgido nuevos productos, generalmente formulados con consorcios microbianos con diferentes funcionalidades que no se ajustan a las normas existentes. Esto ha llevado a que se utilicen una amplia variedad de términos para identificarlos (inoculantes, biofertilizantes, bioestimulantes, elicitores, bioinsumos, productos biológicos, etc.) generando confusión en su identificación. Es necesario contar con definiciones claras que nos permitan clasificar cada producto de acuerdo a su composición y efecto benéfico para poder contar con marcos normativos apropiados para su evaluación. Se deben concretar tecnologías innovadoras para la agricultura basadas en el conocimiento científico, y para ello es necesario un fuerte compromiso de las Empresas, la Academia y el Estado, acompañado de políticas de investigación, desarrollo y extensión respecto al uso de productos biológicos.",
          "titulo" : "Legislación sobre registro y empleo de productos microbianos"
        },
        "_pt" : {
          "texto" : "Existen diferentes grados de avance en las normas sobre productos biológicos a nivel mundial. En Latinoamérica la industria de los biológicos se muestra muy activa y rica en iniciativas en casi todos los países y muchos de ellos cuentan con normativas para inoculantes formulados con bacterias del género rizobio y con otros PGPR con mecanismos de promoción directa sobre el crecimiento vegetal así como también para productos formulados con agentes de control biológico. En los últimos años han surgido nuevos productos, generalmente formulados con consorcios microbianos con diferentes funcionalidades que no se ajustan a las normas existentes. Esto ha llevado a que se utilicen una amplia variedad de términos para identificarlos (inoculantes, biofertilizantes, bioestimulantes, elicitores, bioinsumos, productos biológicos, etc.) generando confusión en su identificación. Es necesario contar con definiciones claras que nos permitan clasificar cada producto de acuerdo a su composición y efecto benéfico para poder contar con marcos normativos apropiados para su evaluación. Se deben concretar tecnologías innovadoras para la agricultura basadas en el conocimiento científico, y para ello es necesario un fuerte compromiso de las Empresas, la Academia y el Estado, acompañado de políticas de investigación, desarrollo y extensión respecto al uso de productos biológicos.",
          "titulo" : "Legislación sobre registro y empleo de productos microbianos"
        },
        "conferencistas" : [ "romina-almesia", "jerri-zilli" ],
        "coordinadores" : "Coordinadores: Lic. Bioq. María Mayans (Uruguay) y Ing. Alejandro Perticari (Argentina)",
        "horario" : "Viernes 8 de octubre",
        "tema" : 8
      },
      "microbioma-agrícola" : {
        "_en" : {
          "texto" : "La agricultura moderna convencional ha experimentado procesos de intensificación y especialización asociados a un aumento del uso de energía fósil por el incremento en el uso de agroquímicos, mecanización y riego. Como consecuencia, se constatan importantes pérdidas en la salud del suelo y los agroecosistemas, con sistemas de producción no sustentables. Por ello es necesario transitar hacia sistemas de producción alternativos, que aseguren la productividad en el mediano y largo plazo mediante el fortalecimiento de los ciclos ecológicos, la reducción de la dependencia de insumos externos no renovables y la optimización del uso del agua y la energía. El microbioma agrícola es clave en la transición hacia sistemas agrícolas sostenibles. Es necesario explorar y conocer la gran diversidad taxonómica y funcional de los microorganismos del suelo, así como las interacciones planta-microorganismo en la multiplicidad de ambientes agrícolas y manejos agronómicos existentes, de forma de abrir nuevos caminos para una producción sostenible desde una perspectiva ambiental, económica y social. En esta sección se presentarán algunos avances de la comunidad científica en el estudio y comprensión del microbioma agrícola.",
          "titulo" : "El microbioma agrícola"
        },
        "_es" : {
          "texto" : "La agricultura moderna convencional ha experimentado procesos de intensificación y especialización asociados a un aumento del uso de energía fósil por el incremento en el uso de agroquímicos, mecanización y riego. Como consecuencia, se constatan importantes pérdidas en la salud del suelo y los agroecosistemas, con sistemas de producción no sustentables. Por ello es necesario transitar hacia sistemas de producción alternativos, que aseguren la productividad en el mediano y largo plazo mediante el fortalecimiento de los ciclos ecológicos, la reducción de la dependencia de insumos externos no renovables y la optimización del uso del agua y la energía. El microbioma agrícola es clave en la transición hacia sistemas agrícolas sostenibles. Es necesario explorar y conocer la gran diversidad taxonómica y funcional de los microorganismos del suelo, así como las interacciones planta-microorganismo en la multiplicidad de ambientes agrícolas y manejos agronómicos existentes, de forma de abrir nuevos caminos para una producción sostenible desde una perspectiva ambiental, económica y social. En esta sección se presentarán algunos avances de la comunidad científica en el estudio y comprensión del microbioma agrícola.",
          "titulo" : "El microbioma agrícola"
        },
        "_pt" : {
          "texto" : "La agricultura moderna convencional ha experimentado procesos de intensificación y especialización asociados a un aumento del uso de energía fósil por el incremento en el uso de agroquímicos, mecanización y riego. Como consecuencia, se constatan importantes pérdidas en la salud del suelo y los agroecosistemas, con sistemas de producción no sustentables. Por ello es necesario transitar hacia sistemas de producción alternativos, que aseguren la productividad en el mediano y largo plazo mediante el fortalecimiento de los ciclos ecológicos, la reducción de la dependencia de insumos externos no renovables y la optimización del uso del agua y la energía. El microbioma agrícola es clave en la transición hacia sistemas agrícolas sostenibles. Es necesario explorar y conocer la gran diversidad taxonómica y funcional de los microorganismos del suelo, así como las interacciones planta-microorganismo en la multiplicidad de ambientes agrícolas y manejos agronómicos existentes, de forma de abrir nuevos caminos para una producción sostenible desde una perspectiva ambiental, económica y social. En esta sección se presentarán algunos avances de la comunidad científica en el estudio y comprensión del microbioma agrícola.",
          "titulo" : "El microbioma agrícola"
        },
        "conferencistas" : [ "kornelia-smalla", "jorge-mazza-rodrigues" ],
        "coordinadores" : "Coordinadores: Dra. Carolina Leoni (Uruguay) y Dr. Rodrigo Mendes (Brasil)",
        "dialogos" : [ "-Mh-x6xEaxf4guzJ0aGv", "-Mh9kpbHy0U_OsQt8Uxm", "-MfhgUP7kZSIQoRvTGK8" ],
        "horario" : "Lunes 4 de octubre",
        "tema" : 4
      },
      "promoción-directa-del-crecimiento-vegetal" : {
        "_en" : {
          "texto" : "La microbiota asociada al sistema suelo-planta ha recibido gran atención surgiendo el concepto “holobionte planta”. El mismo define a la planta como un macro-ser compuesto por todos los organismos que viven sobre o en la misma, incluyendo las microbiotas. Dichas microbiotas están compuestas por complejas comunidades microbianas que juegan un rol fundamental en la protección contra estreses bióticos y abióticos, así como en la promoción del crecimiento vegetal (PCV), mediante diferentes mecanismos incluyendo la bioestimulación o la biodisponibilización de nutrientes. El objetivo de esta sesión es intercambiar sobre el estado del arte de la PCV directa desde diferentes miradas. En ese sentido el Dr Agustín Grimoldi, expondrá sobre el rol de los hongos micorrizógenos en su interacción con gramíneas y leguminosas en sistemas con diferentes disponibilidad de fósforo. Asimismo, el Dr Euan James expondrá sobre la relevancia de la fijación biológica del nitrógeno por cepas de rizobios en cultivos de leguminosas, en suelos sin historia. La comprensión del papel de la microbiota en el holobionte planta acaba de comenzar, siendo esperable y fundamental que los conocimientos sobre la diversidad y actividad de la misma contribuyan al entendimiento de la PCV y su aplicación biotecnológica.",
          "titulo" : "Promoción directa del crecimiento vegetal"
        },
        "_es" : {
          "texto" : "La microbiota asociada al sistema suelo-planta ha recibido gran atención surgiendo el concepto “holobionte planta”. El mismo define a la planta como un macro-ser compuesto por todos los organismos que viven sobre o en la misma, incluyendo las microbiotas. Dichas microbiotas están compuestas por complejas comunidades microbianas que juegan un rol fundamental en la protección contra estreses bióticos y abióticos, así como en la promoción del crecimiento vegetal (PCV), mediante diferentes mecanismos incluyendo la bioestimulación o la biodisponibilización de nutrientes. El objetivo de esta sesión es intercambiar sobre el estado del arte de la PCV directa desde diferentes miradas. En ese sentido el Dr Agustín Grimoldi, expondrá sobre el rol de los hongos micorrizógenos en su interacción con gramíneas y leguminosas en sistemas con diferentes disponibilidad de fósforo. Asimismo, el Dr Euan James expondrá sobre la relevancia de la fijación biológica del nitrógeno por cepas de rizobios en cultivos de leguminosas, en suelos sin historia. La comprensión del papel de la microbiota en el holobionte planta acaba de comenzar, siendo esperable y fundamental que los conocimientos sobre la diversidad y actividad de la misma contribuyan al entendimiento de la PCV y su aplicación biotecnológica.",
          "titulo" : "Promoción directa del crecimiento vegetal"
        },
        "_pt" : {
          "texto" : "La microbiota asociada al sistema suelo-planta ha recibido gran atención surgiendo el concepto “holobionte planta”. El mismo define a la planta como un macro-ser compuesto por todos los organismos que viven sobre o en la misma, incluyendo las microbiotas. Dichas microbiotas están compuestas por complejas comunidades microbianas que juegan un rol fundamental en la protección contra estreses bióticos y abióticos, así como en la promoción del crecimiento vegetal (PCV), mediante diferentes mecanismos incluyendo la bioestimulación o la biodisponibilización de nutrientes. El objetivo de esta sesión es intercambiar sobre el estado del arte de la PCV directa desde diferentes miradas. En ese sentido el Dr Agustín Grimoldi, expondrá sobre el rol de los hongos micorrizógenos en su interacción con gramíneas y leguminosas en sistemas con diferentes disponibilidad de fósforo. Asimismo, el Dr Euan James expondrá sobre la relevancia de la fijación biológica del nitrógeno por cepas de rizobios en cultivos de leguminosas, en suelos sin historia. La comprensión del papel de la microbiota en el holobionte planta acaba de comenzar, siendo esperable y fundamental que los conocimientos sobre la diversidad y actividad de la misma contribuyan al entendimiento de la PCV y su aplicación biotecnológica.",
          "titulo" : "Promoción directa del crecimiento vegetal"
        },
        "conferencistas" : [ "euan-james", "agustin-grimoldi" ],
        "coordinadores" : "Coordinadoras: Dra. Fabiana Pezzani (Uruguay) y Dra. Verónica Reis (Brasil)",
        "dialogos" : [ "-MhHX7JLhduId_G5rgSZ", "-MhAKjqvL7pIMXrn6nY4", "-Md-1IMLDvfFoyRffXkD" ],
        "horario" : "Martes 5 de octubre",
        "tema" : 3
      },
      "promoción-indirecta-del-crecimiento-vegetal" : {
        "_en" : {
          "texto" : "Una fracción sustantiva de la diversidad microbiana está íntimamente asociada a distintos órganos o compartimentos vegetales y contribuyen significativamente al crecimiento saludable de la planta por medio de mecanismos que reducen el impacto negativo de fitopatógenos. Entre estos mecanismos, se destacan la antibiosis, la inducción de la resistencia sistémica y la competencia por nutrientes y por nicho. Identificar los actores responsables y comprender las bases moleculares de estos mecanismos permite avanzar en el entendimiento de la evolución del holobionte planta, a la vez que genera herramientas para el desarrollo de estrategias biotecnológicas para el mejoramiento de la producción agronómica. En esta sesión se ilustrarán estos conceptos con contribuciones sobre la potencialidad de los bacteriófagos para el control de infecciones en repollo por parte de Xanthomonas campestris (a cargo del Dr. Jeroen Wagemans, de KU-Leuven, Bélgica), y sobre el impacto a nivel severidad de infección por parte de Botrytis sp. y la respuesta transcriptómica del tomate inoculado con microorganismos benéficos: Bacillus sp. individualmente o en combinación con Trichoderma sp. (a cargo de la Dra. Alexandra Stoll, de CEAZA, Chile).",
          "titulo" : "Promoción indirecta del crecimiento vegetal"
        },
        "_es" : {
          "texto" : "Una fracción sustantiva de la diversidad microbiana está íntimamente asociada a distintos órganos o compartimentos vegetales y contribuyen significativamente al crecimiento saludable de la planta por medio de mecanismos que reducen el impacto negativo de fitopatógenos. Entre estos mecanismos, se destacan la antibiosis, la inducción de la resistencia sistémica y la competencia por nutrientes y por nicho. Identificar los actores responsables y comprender las bases moleculares de estos mecanismos permite avanzar en el entendimiento de la evolución del holobionte planta, a la vez que genera herramientas para el desarrollo de estrategias biotecnológicas para el mejoramiento de la producción agronómica. En esta sesión se ilustrarán estos conceptos con contribuciones sobre la potencialidad de los bacteriófagos para el control de infecciones en repollo por parte de Xanthomonas campestris (a cargo del Dr. Jeroen Wagemans, de KU-Leuven, Bélgica), y sobre el impacto a nivel severidad de infección por parte de Botrytis sp. y la respuesta transcriptómica del tomate inoculado con microorganismos benéficos: Bacillus sp. individualmente o en combinación con Trichoderma sp. (a cargo de la Dra. Alexandra Stoll, de CEAZA, Chile).",
          "titulo" : "Promoción indirecta del crecimiento vegetal"
        },
        "_pt" : {
          "texto" : "Una fracción sustantiva de la diversidad microbiana está íntimamente asociada a distintos órganos o compartimentos vegetales y contribuyen significativamente al crecimiento saludable de la planta por medio de mecanismos que reducen el impacto negativo de fitopatógenos. Entre estos mecanismos, se destacan la antibiosis, la inducción de la resistencia sistémica y la competencia por nutrientes y por nicho. Identificar los actores responsables y comprender las bases moleculares de estos mecanismos permite avanzar en el entendimiento de la evolución del holobionte planta, a la vez que genera herramientas para el desarrollo de estrategias biotecnológicas para el mejoramiento de la producción agronómica. En esta sesión se ilustrarán estos conceptos con contribuciones sobre la potencialidad de los bacteriófagos para el control de infecciones en repollo por parte de Xanthomonas campestris (a cargo del Dr. Jeroen Wagemans, de KU-Leuven, Bélgica), y sobre el impacto a nivel severidad de infección por parte de Botrytis sp. y la respuesta transcriptómica del tomate inoculado con microorganismos benéficos: Bacillus sp. individualmente o en combinación con Trichoderma sp. (a cargo de la Dra. Alexandra Stoll, de CEAZA, Chile).",
          "titulo" : "Promoción indirecta del crecimiento vegetal"
        },
        "conferencistas" : [ "jeroen-wagemans", "alexandra-stoll" ],
        "coordinadores" : "Coordinadores: Dr. Federico Rivas (Uruguay) y Dr. Claudio Valverde (Argentina)",
        "dialogos" : [ "-MdHlG3SQImD3mVwLLJ5", "-MhAhRuHFLj8GRmYkrp_", "-MhBLuzRHfR3f0rPTt2a" ],
        "horario" : "Martes 5 de octubre",
        "tema" : 2
      }
    }
  }
  public temas = [
    'Todas las sesiones',
    'Evolución y diversidad de MPCV',
    'Promoción indirecta del crecimiento vegetal',
    'Promoción directa del crecimiento vegetal',
    'El microbioma agrícola',
    'El holobionte planta',
    'Conservación y manejo microbiano en sistemas naturales y agroecosistemas',
    'Del laboratorio al campo',
    'Legislación sobre registro y empleo de productos microbiano'
  ]
  
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    public lang: LangService,
    public dialog: MatDialog
  ){
    this.setData();
    //
    if(this.getZoom()){
      this.dialog.open(PopUpComponent, { data: { url: this.getZoom() }});
    }
  }

  setData(){
    this.http.get(this.url + '.json').subscribe(
      (resp: any) => this.data = resp,
      (error) => this.snackBar.open('Ha ocurrido un error inesperado', 'Aceptar', { duration: 3000 })
    )
  }

  getZoom(){
    let ahora = Date.now()
    ahora = Math.round(ahora/1000);
    //LUNES
    if(1633350600<ahora&&ahora<1633358700){ return 'https://us02web.zoom.us/j/88033648904?pwd=eHRzcDJ0d3JrY212MFJnR09zVmFaZz09' }
    else if(1633358700<ahora&&ahora<1633365000){ return 'https://us02web.zoom.us/j/85483072259?pwd=b1VycXRMci9oSUtiQk1rMGIxcmw2dz09' }
    else if(1633365000<ahora&&ahora<1633369500){ return 'https://us02web.zoom.us/j/86259527089?pwd=eU1uZ0xnT3FKdGJwRG5mU3VBeEZZUT09' }
    else if(1633369500<ahora&&ahora<1633380300){ return 'https://us02web.zoom.us/j/83419263749?pwd=alF0N0xNalQ4TjFxMnMvbmJ6WU4zdz09' }
    else if(1633380300<ahora&&ahora<1633388400){ return 'https://us02web.zoom.us/j/84060032320?pwd=U3pTMUphNE96bjd3UHUxQ2FGSVNQQT09' }
    //MARTES
    else if(1633437000<ahora&&ahora<1633451400){ return 'https://us02web.zoom.us/j/88488323652?pwd=enBoQmU1VmVPZCtQbUE2MHE0eXRkUT09' }
    else if(1633451400<ahora&&ahora<1633455900){ return 'https://us02web.zoom.us/j/86259527089?pwd=eU1uZ0xnT3FKdGJwRG5mU3VBeEZZUT09' }
    else if(1633455900<ahora&&ahora<1633466700){ return 'https://us02web.zoom.us/j/82468935882?pwd=S1dYaTFvUmZmTCtITjRuSXkxUFpudz09' }
    else if(1633466700<ahora&&ahora<1633474800){ return 'https://us02web.zoom.us/j/84060032320?pwd=U3pTMUphNE96bjd3UHUxQ2FGSVNQQT09' }
    //MIERCOLES
    else if(1633523400<ahora&&ahora<1633537800){ return 'https://us02web.zoom.us/j/83514836396?pwd=bzlPSC83SmxqZTlHdTBlWkZLa0dWdz09' }
    else if(1633537800<ahora&&ahora<1633542300){ return 'https://us02web.zoom.us/j/86259527089?pwd=eU1uZ0xnT3FKdGJwRG5mU3VBeEZZUT09' }
    else if(1633542300<ahora&&ahora<1633553100){ return 'https://us02web.zoom.us/j/85443654948?pwd=UU9WTityUG9IMGtqZXBQTG5OSVFWQT09' }
    else if(1633553100<ahora&&ahora<1633561200){ return 'https://us02web.zoom.us/j/84060032320?pwd=U3pTMUphNE96bjd3UHUxQ2FGSVNQQT09' }
    //JUEVES
    else if(1633609800<ahora&&ahora<1633624200){ return 'https://us02web.zoom.us/j/88410903626?pwd=bzFvcXVBRG42c1EzN3dNTzNNS0NKQT09' }
    else if(1633624200<ahora&&ahora<1633628700){ return 'https://us02web.zoom.us/j/86259527089?pwd=eU1uZ0xnT3FKdGJwRG5mU3VBeEZZUT09' }
    else if(1633628700<ahora&&ahora<1633639500){ return 'https://us02web.zoom.us/j/86992682196?pwd=VVFTSmVBTVVJN1pJMkJyOXptUGFSZz09' }
    else if(1633639500<ahora&&ahora<1633647600){ return 'https://us02web.zoom.us/j/84060032320?pwd=U3pTMUphNE96bjd3UHUxQ2FGSVNQQT09' }
    //VIERNES
    else if(1633696200<ahora&&ahora<1633704300){ return 'https://us02web.zoom.us/j/84256818084?pwd=NGxLSWhEQVh4Z1V1bHRvMUhrR3RlQT09' }
    else if(1633704300<ahora&&ahora<1633715100){ return 'https://us02web.zoom.us/j/84608550743?pwd=WVJUQkE0NDFudEtaVHZ1VHNnSTZmUT09' }
    else if(1633715100<ahora&&ahora<1633722300){ return 'https://us02web.zoom.us/j/89281049466?pwd=S3B4cHlBU3pMZkFwZXVHRUVkQnRDZz09' }
    else if(1633722300<ahora&&ahora<1633734000){ return 'https://us02web.zoom.us/j/87462830586?pwd=bldReUxYN29UZmVidjJYaFlmTVNzZz09' }
    //PRUEBA
    //else if(1633329000<ahora&&ahora<1633340000){ return 'https://www.google.com.ar/' }
    else{ return undefined }
  }

  getSesion = ( id: string ) => this.data.sesiones[id];
  getConferencista = ( id: string ): Conferencista => this.data.conferencistas[id];
  getMesa = ( id: string ) => this.data.mesas[id];
  getPanelista = ( id: string ) => this.data.panelistas[id];
  
  getSesionLang = ( id: string ) => this.data.sesiones[id][this.lang.lang];
  getConferencistaLang = ( id: string ) => this.data.conferencistas[id][this.lang.lang];
  getMesaLang = ( id: string ) => this.data.mesas[id][this.lang.lang];
  getPanelistaLang = ( id: string ) => this.data.panelistas[id][this.lang.lang];


  ///////////
  ///
  fromJSONtoArray( obj : Object ){
    const newArray = [];
    if(obj === null) return [];
    Object.keys(obj).forEach( (key)=>{
        const item = obj[key];
        item.key = key;
        newArray.push(item);
    })
    return newArray
  }
}
