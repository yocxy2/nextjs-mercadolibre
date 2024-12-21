import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-white">
      <div className="bg-[#ec0707]" >
        <div className="bg-[#ec0707] flex justify-center items-center p-4 max-w-[1200px] mx-auto">
          <img
            className="w-10"
            src="https://nextjs-mercadolibre.vercel.app/favicon2.ico.webp"
            alt=""
          />
          <p className="ml-4">¡Comprá y vendé con la app!</p>
        </div>
      </div>

      <div className="bg-[#ec0707] grid grid-cols-2  px-8 pb-8 pt-3 text-xs text-gray-600 space-y-4 border-b max-w-[1200px] mx-auto">
        <p className="mt-3.5">Mi cuenta</p>
        <p className="cursor-pointer" >Historial</p>
        <p className="cursor-pointer" >Favoritos</p>
        <p className="cursor-pointer" >Categorias</p>
        <p className="cursor-pointer" >Ayuda</p>
        <p className="cursor-pointer" >Mis compras</p>
        <p className="cursor-pointer" >Ofertas</p>
        <p className="cursor-pointer" >Tiendas oficiales</p>
        <p className="cursor-pointer" >Mercado Puntos</p>
        <p className="cursor-pointer" >Vender</p>
      </div>

      <div className="px-8 pt-4 pb-6 max-w-[1200px] mx-auto">
        <div className="flex space-x-4">
          <Link href="/login">
          <p className="text-blue-600 text-sm pr-4 cursor-pointer border-r">Ingresá</p>
          </Link>
          <Link href="/login">
          <p className="text-blue-600 cursor-pointer text-sm">Creá tu cuenta</p>
          </Link>
        </div>
      </div>

      <div className="px-8 py-4 text-xs max-w-[1200px] mx-auto">
        <p>
          Terminos y condiciones Como cuidamos tu privacidad Informacion de
          usuario financiero Defensa del Consumidor
        </p>
      </div>

      <div className="px-8 pb-8 max-w-[1200px] mx-auto">
        <p className="text-xs text-gray-400 mb-2">
           Copyright © 2024 SEVENTA
        </p>
        <p className="text-xs text-gray-400">
          Al navegar en este sitio aceptás las{" "}
          <span className="text-blue-600 cursor-pointer">condiciones de uso</span>
          .
        </p>
      </div>
    </div>
  );
}

export default Footer;
