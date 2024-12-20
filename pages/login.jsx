import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [verificationImage, setVerificationImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email and verificationImage to your backend
    // for AI verification. For now, we'll just simulate a successful login.
    console.log("Email:", email);
    console.log("Verification Image:", verificationImage);
    router.push("/")
  }

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setVerificationImage(e.target.files[0]);
    }
  }

  return (
    <div className="relative md:bg-[#ebebeb] h-screen ">
      {/* Header */}
      <header className="bg-[#8B0000] p-2 md:h-56">
        <Link href="/">
          <img
            className="w-11"
            src="/images/sevenda-icon.png"
            alt="SEVENDA"
          />
        </Link>
      </header>

      {/* Form */}
      <div className="md:w-screen md:h-1/3 md:flex md:flex-col md:justify-center md:items-center">
        <div className="px-6 mt-7">
          <div className="md:bg-white md:px-16 md:pt-14 md:pb-10 md:w-[440px] md:rounded-t-md md:shadow-sm">
            <div>
              <p className="text-lg md:text-2xl font-semibold">
                ¡Hola! Para seguir, ingresá tu e-mail y sube una imagen para verificación
              </p>
            </div>

            <form onSubmit={handleSubmit} >
              <div className="mt-8">
                <p className="text-xs mb-2">E-mail</p>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border w-full rounded-md p-3 shadow-sm"
                />
              </div>

              <div className="mt-8">
                <p className="text-xs mb-2">Imagen de verificación</p>
                <input
                  required
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="border w-full rounded-md p-3 shadow-sm"
                />
              </div>

              <div className="mt-8">
                <button type="submit" className="bg-[#8B0000] text-white w-full font-medium text-sm rounded-md py-3.5 ">
                  Continuar
                </button>
                <button className="text-[#8B0000] font-medium w-full text-sm p-3">
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>

          <div className="py-6 rounded-b-md bg-white border-t justify-center items-center h-6 shadow-sm hidden md:flex ">
            <button className=" text-[#8B0000] font-medium text-sm w-full py-3.5 ">
              Necesito ayuda para ingresar
            </button>
          </div>
        </div>

        <p className="text-[10px] mt-10 text-gray-500 ">
          Protegido por reCAPTCHA -{" "}
          <a className="text-[#8B0000]" href="#">
            Privacidad - Condiciones
          </a>
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 px-6 left-0 w-full justify-center items-center md:bg-white">
        <div className="flex flex-col justify-center items-center pb-7 border-b md:hidden">
          <button className="bg-[#f5f5f5] text-[#8B0000] font-medium text-sm w-full rounded-md py-3.5 ">
            Necesito ayuda para ingresar
          </button>
          <p className="text-[10px] mt-3 text-gray-500 ">
            Protegido por reCAPTCHA -{" "}
            <a className="text-[#8B0000]" href="#">
              Privacidad - Condiciones
            </a>
          </p>
        </div>
        <div className="py-4 flex flex-col justify-center items-center space-y-1 md:bg-white md:py-7">
          <p className="text-xs">Cómo cuidamos tu privacidad</p>
          <p className="text-xs text-gray-500">
            Copyright © 1999-2022 SEVENDA S.R.L.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

