import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

export default function Empresas() {
  return (
    <>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            Deploy faster
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Everything you need to deploy your app
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
      <section className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
        <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <img
            alt=''
            src='https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg'
            className='mx-auto h-12'
          />
          <figure className='mt-10'>
            <blockquote className='text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9'>
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
                voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed
                rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className='mt-10'>
              <img
                alt=''
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                className='mx-auto h-10 w-10 rounded-full'
              />
              <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
                <div className='font-semibold text-gray-900'>Judith Black</div>
                <svg
                  width={3}
                  height={3}
                  viewBox='0 0 2 2'
                  aria-hidden='true'
                  className='fill-gray-900'
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className='text-gray-600'>CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <div
        id='talento'
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
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
        <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />

        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-4xl font-bold tracking-tight text-blue-500 sm:text-6xl'>
              {" "}
              Consultoría Personalizada
            </h2>
            <p className='mt-6 text-lg leading-8 text-orange-500'>
              Optimizamos procesos tecnológicos e innovamos, mejorando la competitividad
              del cliente y fomentando una cultura organizacional adaptativa.
            </p>
          </div>
          <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
              <a
                href='/informacion-consultoria-medida'
                className='text-blue-500 hover:underline'
              >
                Información sobre consultoría a medida
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
