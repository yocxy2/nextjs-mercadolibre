import Link from "next/link";
import React from "react";


function Footer() {
  return (
    <div className="bg-white">
      <div className="bg-[#ffe600]" >
        <div className="flex justify-center items-center p-4 max-w-[1200px] mx-auto">
         
          <p className="ml-4">¡Comprá y vendé con la app!</p>
        </div>
      </div>

      {/* ... (keep the rest of the component unchanged) */}

      <div className="px-8 pb-8 max-w-[1200px] mx-auto">
        <p className="text-xs text-gray-400 mb-2">
          © 1999-2022 SEVENDA S.R.L.
        </p>
        <p className="text-xs text-gray-400">
          Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA
        </p>
      </div>
    </div>
  );
}

export default Footer;

