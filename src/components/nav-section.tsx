import Link from "next/link";
import { Logo } from "./ui/logo";
import Careers from "./card-conteiner/fly-menu-careers";
import Company from "./card-conteiner/fly-menu-company";
import Services from "./card-conteiner/fly-menu-services";

export default function NavSection() {
  return (
    <div className='mx-auto flex max-w-screen-2xl items-center justify-between p-4'>
      <Link href='/' className='flex items-center gap-2'>
        <Logo alt='Logo' />
        <span className='text-xl font-bold'>SelvIt Consultora</span>
      </Link>

      <nav className='flex items-center gap-8'>
        <Services />

        <Careers />

        <Company />

        <Link className='hover:underline' href='/blog'>
          Blog
        </Link>
        <Link
          className='rounded-xl border-2 border-black bg-white px-1.5 py-1 hover:bg-orange-50'
          href='/#contacto'
        >
          Contacto
        </Link>
      </nav>
    </div>
  );
}
