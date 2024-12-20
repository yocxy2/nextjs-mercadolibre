import Link from "next/link";
import React, { useState } from "react";

function LoginBox() {
  const [verificationImage, setVerificationImage] = useState(null);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setVerificationImage(e.target.files[0]);
    }
  };

  return (
    <div className="px-2 max-w-[1200px] mx-auto lg:mb-6">
      <div className="bg-white p-4 rounded-md shadow-sm">
        <p className="font-semibold">
          ¡Ingresá a tu cuenta y mejorá tu experiencia!
        </p>
        <Link href="/login">
          <button className="bg-[#8B0000] w-full mt-3.5 p-3.5 rounded-md text-sm text-white">
            Ingresá a tu cuenta
          </button>
        </Link>
        <div className="mt-4">
          <label htmlFor="verification-image" className="block text-sm font-medium text-gray-700">
            Imagen de verificación
          </label>
          <input
            type="file"
            id="verification-image"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#8B0000] focus:border-[#8B0000] sm:text-sm"
          />
        </div>
        <div className="text-sm flex justify-center mt-5 mb-2">
          <p>
            ¿Sos nuevo?{" "}
            <Link href="/login">
              <a className="text-[#8B0000]">Creá una cuenta</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;

