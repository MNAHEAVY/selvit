import { LightBulbIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: LightBulbIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LightBulbIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: LightBulbIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: LightBulbIcon,
  },
];

export default function Careers() {
  return (
    <>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 bg-white py-24 sm:py-32'>
        <div className='container mx-auto p-4'>
          <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>Empleos</h2>
            <p className='text-gray-600 mb-4'>
              Pronto podrán encontrar resultados y ofertas aquí.
            </p>
            <div className='border-t border-gray-200 pt-4'>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                Filtro de búsqueda
              </h3>
              <p className='text-gray-600 mb-4'>
                (por ubicación, tipo de empleo, tecnología, etc.)
              </p>
            </div>
            <div className='border-t border-gray-200 pt-4'>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                Listado de ofertas actuales
              </h3>
              <p className='text-gray-600'>No hay ofertas disponibles en este momento.</p>
            </div>
          </div>
        </div>
      </div>

      <div
        id='form'
        className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'
      >
        <img
          alt=''
          src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
          className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
        />

        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Solicitar Talento
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Utilizamos múltiples fuentes y estrategias especializadas para identificar
              talento, con un enfoque en perfiles IT.
            </p>
          </div>
          <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
              <a href='/' className='text-blue-500 hover:underline'>
                Formulario para solicitar personal
              </a>
            </div>
          </div>
        </div>
      </div>

      <section
        id='consultora'
        className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8'
      >
        <div className='mx-auto max-w-7xl px-6 lg:px-8 bg-white py-24 sm:py-32'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Consejos para candidatos
            </p>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse
              eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit
              nunc.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {features.map((feature) => (
                <div key={feature.name} className='relative pl-16'>
                  <dt className='text-base font-semibold leading-7 text-gray-900'>
                    <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                      <feature.icon aria-hidden='true' className='h-6 w-6 text-white' />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className='mt-2 text-base leading-7 text-gray-600'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
