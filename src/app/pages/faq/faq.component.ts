import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq=[
    [
      { 
        "pregunta": "¿Quién organiza la RELAR-PGPR Edición 2021?",
        "respuesta": `
        <strong>Instituto de Investigaciones Biológicas Clemente Estable (IIBCE)</strong><br><p>Dr. Federico Battistoni (Presidente), Dr. Raúl Platero (Secretario), Dra. Natalia Bajsa (Tesorera), Dra. Patricia Vaz (IIBCE-FCien), Dra. Elena Fabiano, Dra. Cecilia Taulé.</p>
        <strong>Facultad de Agronomía (FAgro), UdelaR.</strong><br><p>Dra. Fabiana Pezzani, Dr. Gastón Azziz.</p>    
        <strong>Instituto Nacional de Investigación Agropecuaria (INIA)</strong><br><p>Dr. Federico Rivas.</p>    
        <strong>Facultad de Ciencias (FCien), UdelaR.</strong><br><p>Dra. Susana Castro, Dra. Adriana Montañez.</p>    
        <strong>Facultad de Química (FQ), UdelaR.</strong><br><p> Dra. Ana Fernadez,  Dra. Lucía Ferrando.</p>    
        <strong>Ministerio de Ganadería, Agricultura y Pesca (MGAP)</strong><br><p>Lic. Bioq María Mayans</p>
        <strong>Lallemand Inc. (Lage y Cía)</strong><br><p>Ing.Pedro Lage</p>
        `
        }
    ],
    [
        { 
        "pregunta": "¿Qué es la ALAR?",
        "respuesta": `<p>La Asociación Latinoamericana de Rizobiología (ALAR) es una asociación científica sin fines de lucro cuyo objetivo es promover las actividades relacionadas al estudio y aplicación de microorganismos promotores del crecimiento vegetal (MPCV) en los países de América Latina y el Caribe.</p>`
        },
        { 
        "pregunta": "¿Qué debo hacer para afiliarme a la ALAR?",
        "respuesta": `<p>Si quieres ser socia o socio ALAR debes enviar un mail a <a href="mailto:secretaria.alar@gmail.com">secretaria.alar@gmail.com</a> asunto: ALTA SOCIO/A ALAR describiendo para CATEGORÍA INVESTIGADOR/A: sus últimas actividades científicas más relevantes (máximo 5 líneas) para CATEGORÍA ESTUDIANTE: Institución educativa a la que pertenece y nivel de estudios alcanzados.</p>`
        },
        { 
        "pregunta": "¿Puedo afiliarme a la ALAR antes de inscribirme a la RELAR-PGPR 2021 para obtener los beneficios en el pago de inscripción?",
        "respuesta": `Si`
        },
        { 
        "pregunta": "¿La cuota ALAR está incluida dentro del precio de inscripción RELAR-PGPR 2021?",
        "respuesta": `<p>Si. El Comité Organizador decidió que la cuota bianual de ALAR esté incluida dentro del costo de inscripción. Asimismo establece una amnistía para todas aquellas socias y socios que participen de la RELAR-PGPR edición 2021. Para ello, deberás ir a la sección INSCRIPCIÓN de nuestra web y seguir los siguientes pasos:</p>
        <ol>
          <li>Generar un usuario</li>
          <li>Proporcionar los datos personales, seleccionado en “Categoría”: “Investigador/a / Profesional socio ALAR” o “Estudiante socio ALAR” según corresponda</li>
          <li>Postular trabajo (Opcional)</li>
          <li>Realizar el pago.</li>
        </ol>`
        }
    ],
    [
      { 
        "pregunta": "¿Cómo hago para inscribirme?",
        "respuesta": `
        <p>Para inscribirte a la RELAR-PGPR 2021 deberás ir a la sección INSCRIPCIÓN de nuestra web y seguir los siguientes pasos:
        <ol>
          <li>Generar un usuario</li>
          <li>Proporcionar los datos personales</li>
          <li>Postular trabajo (Opcional)</li>
          <li>Realizar el pago.</li>
        </ol>`
        },
        { 
        "pregunta": "¿Qué información necesito para postular un trabajo?",
        "respuesta": `
        <ol>
          <li>Seleccionar una de las 8 sesiones de trabajo propuestas por la RELAR-PGPR.</li>
          <li>Ingresar el título del trabajo.</li>
          <li>Ingresar autores del trabajo.</li>
          <li>Ingresar autor/a que presentará el trabajo durante las diferentes instancias del evento.</li>
          <li>Nombrar la institución que usted representa con el trabajo postulado.</li>
          <li>Ingresar un resumen del trabajo con una extensión máxima de 300 palabras.</li>
        </ol>`
        },
        { 
        "pregunta": "¿Por qué se requiere un usuario para registrarse?",
        "respuesta": `
        <p>Porque su usuario le permitirá:</p>
        <ul>
          <li>Cargar toda la información solicitada por el evento, directamente desde la web: Videos, posters, etc.</li>
          <li>Acceder a los contenidos exclusivos para participantes de la RELAR-PGPR 2021.</li>
          <li>Con su usuario podrá acceder a foros y chats.</li>
        </ul>
        `
        },
        { 
        "pregunta": "¿Cuáles son las modalidades de pago habilitadas?",
        "respuesta": `
        <ul>
          <li>Paypal</li>
          <li>Tarjeta de Crédito</li>
          <li>Transferencia Bancaria</li>
        </ul>
        `
        },
        { 
        "pregunta": "¿Puedo abonar el costo de inscripción por medio de la alicuota de PEDECIBA (Biología-Química)? ",
        "respuesta": `
        <p>Si, investigadores y estudiantes de PEDECIBA (Biología o Químimca) pueden abonar el costo de inscripción por medio de la alícuota PEDECIBA, enviando formulario: <a href="https://firebasestorage.googleapis.com/v0/b/relar-pgpr.appspot.com/o/FormularioPagoRELAR_PGPR_Pedeciba.odt?alt=media&amp;token=007214a8-03f6-43e4-85ff-dbee06824e0b" target="_blank" rel="Formulario PEDECIBA">Descargar Formulario</a> a PEDECIBA Biologia: <a href="mailto:presupuestobiologia@pedeciba.edu.uy">presupuestobiologia@pedeciba.edu.uy</a> con copia a <a href="mailto:secretaria.alar@gmail.com">secretaria.alar@gmail.com</a>  / PEDECIBA Química: <a href="mailto:gabig@fq.edu.uy">gabig@fq.edu.uy</a> con copia a <a href="mailto:secretaria.alar@gmail.com">secretaria.alar@gmail.com</a>.</p>
        <p>Toda persona que haya realizado el pago de inscripción a través de la alícuota PEDECIBA deberá solicitar su código de inscripción a <a href="mailto:secretaria.alar@gmail.com">secretaria.alar@gmail.com</a></p>
        `
        },
        { 
        "pregunta": "¿Cómo aplico a una beca completa?",
        "respuesta": `
        <p>En la sección POSTULAR TRABAJO de nuestra web, deberá seleccionar la opción “SI” en “POSTULAR  A BECA” (parte inferior de la página), luego:</p>
        <ol>
          <li>Inscribirse a uno de los dos tipos de becas.</li>
          <li>Presentar un trabajo como primer autor o autor de correspondencia.</li>
          <li>Estar dispuesto a participar de todas las instancias del congreso.</li>
          <li>En caso de postular a beca ALAR, presentar un comprobante de que la persona y/o tutor/a son socios de la asociación.ALAR.</li>
        </ol>
        `
        },
        { 
          "pregunta": "¿Puedo abonar la inscripción luego de que mi trabajo haya sido aceptado?",
          "respuesta": `<p>Si, para ello seleccione “Saltar paso” en el paso número 4 (pago) de la sección INSCRIPCIÓN de nuestra web.</p>`
        },
        { 
          "pregunta": "¿Cuándo serán comunicados los resultados de trabajos aceptados?",
          "respuesta": `<p>A finales del mes de agosto.</p>`
        }
    ],
    [
      { 
        "pregunta": "¿Qué tiempo tendré para realizar e ingresar los vídeos requeridos para Póster Talk o Diálogos de Investigación?",
        "respuesta": `<p>Tendrá hasta 15 días luego de comunicado que su trabajo fue seleccionado.</p>`
      },
      { 
        "pregunta": "¿Dónde se visualizarán todos los Póster aceptados por la RELAR-PGRP?",
        "respuesta": `<p>Todos los posters aceptados por la RELAR-PGPR serán visualizados en la sección PÓSTER-HALL ubicada en nuestra página web.</p>`
      },
      { 
        "pregunta": "¿Qué plataformas se usarán antes y durante el evento?",
        "respuesta": `<p>Antes del evento: Página web, Facebook, Twitter, Instagram, E-mail.<br>Durante el evento: Todas las anteriores más la Plataforma Zoom para las interacciones en vivo y whatsapp por notificaciones.</p>`
      },
      { 
        "pregunta": "¿Es obligatorio participar de todas las actividades propuestas por la RELAR-PGPR 2021?",
        "respuesta": `<p>Si bien te alentamos a participar de todas las actividades, podrás seleccionar todas aquellas de acuerdo a tus intereses y tiempos.</p>`
      },
      { 
        "pregunta": "¿Se otorgará certificado de participación?",
        "respuesta": `<p>Si</p>`
      },
      { 
        "pregunta": "¿Con quién debo comunicarme si tengo alguna duda o sugerencia?",
        "respuesta": `<p>Con secretaría a través del mail <a href="mailto:secretaria.alar@gmail.com">secretaria.alar@gmail.com</a> o whatsapp: +598 99066992</p>`
      }
    ]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
