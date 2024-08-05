import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const ITEMS = [
  {
    title: "¿Qué servicios ofrece SelvIT?",
    content:
      "Ofrecemos servicios de reclutamiento IT, formación y desarrollo de talento, y consultoría tecnológica. Nos especializamos en encontrar y capacitar a los mejores profesionales IT para satisfacer las necesidades específicas de su empresa.",
  },
  {
    title: "¿Cómo puedo enviar mi CV para una oportunidad de empleo?",
    content:
      "Puede enviar su CV a través de nuestro formulario en la sección CAREERS. Simplemente complete sus datos, adjunte su CV y nuestro equipo de reclutamiento se pondrá en contacto con usted si su perfil coincide con alguna de nuestras vacantes.",
  },
  {
    title: "¿Qué tipos de formación ofrecen?",
    content:
      "Ofrecemos una variedad de programas de formación que incluyen cursos en línea, talleres presenciales y programas personalizados según las necesidades de su empresa. Nos enfocamos en áreas clave de la tecnología para asegurar que nuestros candidatos estén siempre actualizados con las últimas tendencias y habilidades.",
  },
  {
    title: "¿Cómo puedo solicitar talento para mi empresa?",
    content:
      "Puede solicitar talento a través de nuestro formulario en la sección Empresas. Proporcione detalles sobre las posiciones que necesita cubrir y nuestro equipo se encargará de encontrar los candidatos más adecuados para su empresa.",
  },
  {
    title: "¿Cuál es el proceso de reclutamiento?",
    content:
      "Nuestro proceso de reclutamiento incluye varias etapas: identificación de necesidades, búsqueda y selección de candidatos, entrevistas y evaluación, y finalmente la integración del candidato en su empresa. Nos aseguramos de que cada etapa sea transparente y eficiente para ambas partes.",
  },
  {
    title: "¿Qué diferencia a SelvIT de otras consultoras IT?",
    content:
      "Nos diferenciamos por nuestro enfoque práctico y comprometido, arraigado en valores fundamentales y una pasión por acelerar el cambio positivo. Nuestro equipo de expertos trabaja estrechamente con cada cliente para entender sus necesidades y proporcionar soluciones personalizadas que realmente marcan la diferencia.",
  },
];

export default function Policy() {
  return (
    <section id='como-funciona' className='relative bg-orange-200 py-32'>
      <div className='container mx-auto flex flex-col items-center gap-20'>
        <h3 className='text-3xl font-semibold'>Preguntas frecuentes</h3>
        <Accordion type='single' collapsible className='mx-auto w-[40rem]'>
          {ITEMS.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className='text-start text-lg font-bold'>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className='max-w-[40rem]'>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
