"use client";

import { useRouter } from "next/navigation";

export const Navbar = () => {
  const path = "/";
  const router = useRouter();

  return (
    <header className="sticky top-0 left-0 w-full z-10 bg-body">
      <nav className="flex items-center justify-between p-2 mx-5">
        <div className="flex justify-center gap-3 items-center hover:scale-110">
          <a href="/#home" className="text-xl font-bold italic md:flex gap-2">
            <span className="special-text">MASmotor's</span>
            <p className="hidden md:flex">| Ingenieria Automotriz</p>
          </a>
        </div>
        <div className="justify-center gap-3 items-center hidden lg:flex">
          <ul className="flex gap-4 items-center">
            <li
              className={`${
                path === "/" ? "border-green-600" : "border-gray-600"
              } border-b-4 text-xl hover:scale-y-110 hover:text-primary`}
            >
              <a href="/">Inicio</a>
            </li>
            <li
              className={`${
                path === "/" ? "border-green-600" : "border-gray-600"
              } border-b-4 text-xl hover:scale-y-110 hover:text-primary `}
            >
              <a href="/services">Servicios</a>
            </li>
            <li
              className={`${
                path === "/" ? "border-green-600" : "border-gray-600"
              } border-b-4 text-xl hover:scale-y-110 hover:text-primary`}
            >
              <a href="/about">Acerca de nosotros</a>
            </li>
            {/* <li
              className={`${
                path === "/" ? "border-green-600" : "border-gray-600"
              } border-b-4 text-xl hover:scale-y-110 hover:text-primary`}
            >
              <button
                onClick={() => {
                  changeAuth("register");
                  router.push('/auth')
                }}
              >
                Registrate
              </button>
            </li>
            <li
              className={`${
                path === "/" ? "border-green-600" : "border-gray-600"
              } border-b-4 text-xl hover:scale-y-110 hover:text-primary`}
            >
              <button
                onClick={() => {
                  changeAuth("login");
                  router.push('/auth')
                }}
              >
                Inicia sesión
              </button>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};
