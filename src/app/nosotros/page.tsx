import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Paula Dabalos",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQFkbLzyyJrgCw/profile-displayphoto-shrink_800_800/0/1720878923090?e=1728518400&v=beta&t=3AvUIjbH4rXqcZAJsiCqJ90IXz_KR-rKasex8VTeQ5I",
  },
  {
    name: "Camila Soler",
    role: "Co-Founder / IT-Recruiter",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQHZ3niPAy3e0A/profile-displayphoto-shrink_800_800/0/1722089548744?e=1728518400&v=beta&t=jCyQLO92tG2iNYhN7iIgU3KtYjNShhIFQ99fGQPsA64",
  },
];

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  },
];

export default function Nosotros() {
  return (
    <>
      <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <svg
            aria-hidden='true'
            className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
          >
            <defs>
              <pattern
                x='50%'
                y={-1}
                id='e813992c-7d03-4cc4-a2bd-151760b470a0'
                width={200}
                height={200}
                patternUnits='userSpaceOnUse'
              >
                <path d='M100 200V.5M.5 .5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
              <path
                d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
              width='100%'
              height='100%'
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
          <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
            <div className='lg:pr-4'>
              <div className='lg:max-w-lg'>
                <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  Estamos cambiando la forma en que la gente se conecta.
                </h1>
                <p className='mt-6 text-xl leading-8 text-gray-700'>
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
                  arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
                  feugiat egestas.
                </p>
              </div>
            </div>
          </div>
          <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
            <img
              alt=''
              src='../selvit.svg'
              className='w-[36rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
            />
          </div>
        </div>
      </div>{" "}
      <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <svg
            aria-hidden='true'
            className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
          >
            <defs>
              <pattern
                x='50%'
                y={-1}
                id='e813992c-7d03-4cc4-a2bd-151760b470a0'
                width={200}
                height={200}
                patternUnits='userSpaceOnUse'
              >
                <path d='M100 200V.5M.5 .5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
              <path
                d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
              width='100%'
              height='100%'
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
          <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
            <div className='lg:pr-4'>
              <div className='lg:max-w-lg'>
                <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  Nuestra Mision
                </h1>
                <p className='mt-6 text-xl leading-8 text-gray-700'>
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
                  arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
                  feugiat egestas.
                </p>
              </div>
            </div>
          </div>
          <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
            <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
              <div className='lg:pr-4'>
                <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
                  <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                    <li className='flex gap-x-3'>
                      <CloudArrowUpIcon
                        aria-hidden='true'
                        className='mt-1 h-5 w-5 flex-none text-indigo-600'
                      />
                      <span>
                        <strong className='font-semibold text-gray-900'>
                          Push to deploy.
                        </strong>{" "}
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                        impedit perferendis suscipit eaque, iste dolor cupiditate
                        blanditiis ratione.
                      </span>
                    </li>
                    <li className='flex gap-x-3'>
                      <LockClosedIcon
                        aria-hidden='true'
                        className='mt-1 h-5 w-5 flex-none text-indigo-600'
                      />
                      <span>
                        <strong className='font-semibold text-gray-900'>
                          SSL certificates.
                        </strong>{" "}
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                        lorem cupidatat commodo.
                      </span>
                    </li>
                    <li className='flex gap-x-3'>
                      <ServerIcon
                        aria-hidden='true'
                        className='mt-1 h-5 w-5 flex-none text-indigo-600'
                      />
                      <span>
                        <strong className='font-semibold text-gray-900'>
                          Database backups.
                        </strong>{" "}
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
                        magna sit morbi lobortis.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
        <img
          alt=''
          src='https://www.canal12misiones.com/wp-content/uploads/2023/02/posadas-drone-2.jpg'
          className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
        />
        <div
          aria-hidden='true'
          className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
          />
        </div>
        <div
          aria-hidden='true'
          className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
          />
        </div>
      </div>
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Nuestros Valores
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
                    <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'></div>
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
      </div>
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <h2 className='text-center text-lg font-semibold leading-8 text-gray-900'>
            Trusted by the world’s most innovative teams
          </h2>
          <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
            <img
              alt='Transistor'
              src='https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg'
              width={158}
              height={48}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            />
            <img
              alt='Reform'
              src='https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg'
              width={158}
              height={48}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            />
            <img
              alt='Tuple'
              src='https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg'
              width={158}
              height={48}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
            />
            <img
              alt='SavvyCal'
              src='https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg'
              width={158}
              height={48}
              className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
            />
            <img
              alt='Statamic'
              src='https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg'
              width={158}
              height={48}
              className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
            />
          </div>
        </div>
      </div>{" "}
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
          <div className='max-w-2xl'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Conoce nuestro equipo
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
              elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul
            role='list'
            className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className='flex items-center gap-x-6'>
                  <img alt='' src={person.imageUrl} className='h-16 w-16 rounded-full' />
                  <div>
                    <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
                      {person.name}
                    </h3>
                    <p className='text-sm font-semibold leading-6 text-indigo-600'>
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
