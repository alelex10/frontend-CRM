import Link from "next/link";
import Image from "next/image";
import logo from "@public/assets/img/icono.png";
export const NavBar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          OrbitCRM
        </Link>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link href="#features" className="hover:text-indigo-600">
              Funcionalidades
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="hover:text-indigo-600">
              Precios
            </Link>
          </li>
          <li>
            <Link href="/auth/login" className="hover:text-indigo-600">
              Iniciar Sesión
            </Link>
          </li>
          <li>
            <Link
              href="/auth/register"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Registrarse
            </Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
};
