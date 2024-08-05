import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";
const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];
export default function Services() {
  return (
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
                Reclutamiento IT
              </h1>
              <p className='mt-6 text-xl leading-8 text-gray-700'>
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu,
                sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat
                egestas.
              </p>
            </div>
          </div>
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <img
            alt=''
            src='https://d8it4huxumps7.cloudfront.net/bites/wp-content/uploads/2019/10/09115330/Campus-Recruitment-Process-Heres-everything-you-need-to-know.jpg'
            className='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
          />
        </div>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
                Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec
                est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
                Mattis mauris semper sed amet vitae sed turpis id.
              </p>
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
                    impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                    ratione.
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
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                    cupidatat commodo.
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
              <p className='mt-8 mb-8'>
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id
                et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt
                ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing
                egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>

              <div id='formacion' className='lg:pr-4'>
                <div className='lg:max-w-lg'>
                  <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                    Formacion y Desarrollo
                  </h1>
                  <p className='mt-6 text-xl leading-8 text-gray-700'>
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
                    arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
                    feugiat egestas.
                  </p>
                </div>
                <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
                  No server? No problem.
                </h2>
                <p className='mt-6'>
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in.
                  Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris
                  enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
                  mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
                  Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
                  diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='consultoria' className='bg-white pt-24 sm:pt-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Consultoria IT
            </h2>
            <p className='mt-2 text-lg leading-8 text-gray-600'>
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {posts.map((post) => (
              <article
                key={post.id}
                className='flex max-w-xl flex-col items-start justify-between'
              >
                <div className='flex items-center gap-x-4 text-xs'>
                  <time dateTime={post.datetime} className='text-gray-500'>
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className='group relative'>
                  <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                    <a href={post.href}>
                      <span className='absolute inset-0' />
                      {post.title}
                    </a>
                  </h3>
                  <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                    {post.description}
                  </p>
                </div>
                <div className='relative mt-8 flex items-center gap-x-4'>
                  <img
                    alt=''
                    src={post.author.imageUrl}
                    className='h-10 w-10 rounded-full bg-gray-50'
                  />
                  <div className='text-sm leading-6'>
                    <p className='font-semibold text-gray-900'>
                      <a href={post.author.href}>
                        <span className='absolute inset-0' />
                        {post.author.name}
                      </a>
                    </p>
                    <p className='text-gray-600'>{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}