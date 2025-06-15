import { LINKS, SERVICES } from "@/consts";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <Car className="h-6 w-6 text-primary" /> */}
              <span className="font-bold text-xl">Masmotors</span>
            </div>
            <p className="text-gray-500">
              Taller de mecanica automotriz, ofreciendo un servicio
              personalizado y de calidad.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <nav className="flex flex-col space-y-2">
              {LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={`/${link.href}`}
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <nav className="flex flex-col space-y-2">
              {SERVICES.map((link) => (
                <Link
                  key={link.label}
                  href={`/services/${link.href}`}
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                {/* <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" /> */}
                <Link
                  href="https://www.google.com/maps/place/Masmotors/@4.6940553,-74.1214506,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9b59686df79b:0xc3cd10947ff39608!8m2!3d4.69405!4d-74.1188757!16s%2Fg%2F11g71b8yfm?entry=ttu"
                  target="_blank"
                  className="text-green-300 hover:text-green-600 transition-colors"
                >
                  Carrera 96 # 65A - 03
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                {/* <Phone className="h-5 w-5 text-primary" /> */}
                <span className="text-gray-500">(320) 425-5079</span>
              </div>
              <div className="flex items-center space-x-3">
                {/* <Mail className="h-5 w-5 text-primary" /> */}
                <span className="text-gray-500">masmotors2@hotmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Masmotors. Todos los derechos
              reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
