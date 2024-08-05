const ITEMS = [
	{
		title: "Selección y Reclutamiento",
		description:
			"Utilizamos múltiples fuentes y estrategias especializadas para identificar talento, con un enfoque en perfiles IT."
	},
	{
		title: "Desarrollo de Talento",
		description: "Diseñamos programas de capacitación personalizados para talentos en desarrollo en IT y futuros reclutadores, potenciando sus habilidades para enfrentar los desafíos del mercado laboral."
	},
	{
		title: "Mentoría a Empresas",
		description: "Optimizamos procesos tecnológicos e innovamos, mejorando la competitividad del cliente y fomentando una cultura organizacional adaptativa."
	}
]


export default function InfoSection() {
	return (
		<section id="nosotros"  className="py-12 bg-blue-500" >

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 padd">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Nosotros</h2>
          <p className="mt-6 text-lg leading-8 text-white">
		  SelvIT es una consultora especializada en la intersección de tecnología y recursos humanos en la Región NEA Nuestro propósito es brindar soluciones integrales para optimizar la selección, desarrollo y gestión de talento en las organizaciones, utilizando herramientas tecnológicas innovadoras y metodologías psicológicas de vanguardia.  Buscamos convertirnos en pioneros y referentes regionales en adquisición, formación y selección de talento especializado en IT.
          </p><div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
      
      <a  href="/nosotros">
      Saber mas!<span aria-hidden="true">&rarr;</span>
      </a>
  
    </div>
        </div> 
<br/>
<br/>
      </div>
			<div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{ITEMS.map(item => (
					<article key={item.title} className="rounded-lg border bg-white p-6 shadow-md">
						<h2 className="mb-4 text-2xl font-semibold text-orange-500">{item.title}</h2>
						<p className="text-gray-700">{item.description}</p>
					</article>
				))}
			</div>
		</section>
	)
}
