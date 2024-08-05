import { Logo } from "./ui/logo";

export default function FooterSection() {
  return (
    <footer className=' bg-blue-500 pb-16 text-sm leading-6 pt-10 text-white'>
      <div className='max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700'>
        <div className='flex'>
          <div className='flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0'>
            <div className='lg:flex-none lg:w-1/2'>
              <svg
                style={{ filter: " drop-shadow(0px 0px 3.5px white)" }}
                version='1.2'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 200 200'
                width='100'
                height='100'
              >
                <defs>
                  <image
                    width='127'
                    height='127'
                    id='a'
                    href='data:image/png;base64,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'
                  />
                </defs>
                <use href='#a' x='36' y='36' />
              </svg>
              <div className='mt-3 space-y-2'>
                <p>
                  SelvIt Consultora | Soluciones Integrales para la Gestión de Talento
                </p>
              </div>
              <br />
              <div className='flex space-x-4'>
                <a href='#' className='text-orange-300 hover:text-white'>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    width={35}
                    aria-hidden='true'
                    className='w-8 h-8'
                  >
                    <path
                      fillRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </a>
                <a href='#' className='text-orange-300 hover:text-white'>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    width={35}
                    aria-hidden='true'
                    className='w-8 h-8'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </a>
                <a href='#' className='text-orange-300 hover:text-white'>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    width={35}
                    aria-hidden='true'
                    className='w-8 h-8'
                  >
                    <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z'></path>
                  </svg>
                </a>
                <a href='#' className='text-orange-300 hover:text-white'>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    width={35}
                    aria-hidden='true'
                    className='w-8 h-8'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </a>
                <a href='#' className='text-orange-300 hover:text-white'>
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    width={35}
                    aria-hidden='true'
                    className='w-8 h-8'
                  >
                    <path
                      fillRule='evenodd'
                      d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className='lg:flex-none lg:w-1/2'>
              <h2 className='font-semibold text-slate-900 dark:text-slate-100'>
                Core Concepts
              </h2>
              <ul className='mt-3 space-y-2'>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/utility-first'
                  >
                    Utility-First Fundamentals
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/hover-focus-and-other-states'
                  >
                    Handling Hover, Focus, and Other States
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/responsive-design'
                  >
                    Responsive Design
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/dark-mode'
                  >
                    Dark Mode
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/reusing-styles'
                  >
                    Reusing Styles
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/adding-custom-styles'
                  >
                    Adding Custom Styles
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/functions-and-directives'
                  >
                    Functions &amp; Directives
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0'>
            <div className='lg:flex-none lg:w-1/2'>
              <h2 className='font-semibold text-slate-900 dark:text-slate-100'>
                Customization
              </h2>
              <ul className='mt-3 space-y-2'>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/configuration'
                  >
                    Configuration
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/content-configuration'
                  >
                    Content Configuration
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/theme'
                  >
                    Theme Configuration
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/screens'
                  >
                    Customizing Screens
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/customizing-colors'
                  >
                    Customizing Colors
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/customizing-spacing'
                  >
                    Customizing Spacing
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/plugins'
                  >
                    Plugins
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/docs/presets'
                  >
                    Presets
                  </a>
                </li>
              </ul>
            </div>
            <div className='lg:flex-none lg:w-1/2'>
              <h2 className='font-semibold text-slate-900 dark:text-slate-100'>
                Community
              </h2>
              <ul className='mt-3 space-y-2'>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='https://github.com/tailwindlabs/tailwindcss'
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='/discord'
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='https://twitter.com/tailwindcss'
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-slate-900 dark:hover:text-slate-300'
                    href='https://www.youtube.com/tailwindlabs'
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-16 pt-10'>
          <p className='mx-auto max-w-7xl text-center text-sm text-black'>
            <span className='font-semibold'>&copy; 2024 Selvit Powered by:</span>{" "}
            <a href='https://mnaportfolio.vercel.app/'>MNADEV</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
