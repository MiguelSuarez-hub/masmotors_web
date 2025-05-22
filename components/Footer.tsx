import Link from "next/link";

export const Footer = () => {
  return (
    // <footer className="w-3/4 border-t border-gray-900 mx-auto py-4 ">
    //   <div className="flex flex-col items-center justify-center gap-y-4">
    //     <img src="/logo.svg" alt="logo" className="h-16" />
    //     <p>
    //       Encuentranos en{" "}
    //       <a
    //         href="https://www.google.com/maps/place/Masmotors/@4.6940553,-74.1214506,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9b59686df79b:0xc3cd10947ff39608!8m2!3d4.69405!4d-74.1188757!16s%2Fg%2F11g71b8yfm?entry=ttu"
    //         target="_blank"
    //         className="font-bold text-[#FF0000] hover:text-[#FFDC00]"
    //       >
    //         Carrera 96 # 65A - 03
    //       </a>{" "}
    //       Bogotá, Colombia
    //     </p>
    //     <p className="w-full text-center">
    //       &copy; MASmotor's. Todos los derechos reservados
    //     </p>
    //   </div>
    // </footer>
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <Car className="h-6 w-6 text-primary" /> */}
              <span className="font-bold text-xl">MechExpert</span>
            </div>
            <p className="text-muted-foreground">
              Professional automotive workshop providing quality maintenance,
              repairs and custom services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="/shop"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/services/maintenance"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Regular Maintenance
              </Link>
              <Link
                href="/services/repairs"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Auto Repairs
              </Link>
              <Link
                href="/services/diagnostics"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Diagnostics
              </Link>
              <Link
                href="/services/customization"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Customization
              </Link>
              <Link
                href="/services/detailing"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Detailing
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                {/* <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" /> */}
                <span className="text-muted-foreground">
                  123 Automotive Avenue, Motor City, MC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                {/* <Phone className="h-5 w-5 text-primary" /> */}
                <span className="text-muted-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                {/* <Mail className="h-5 w-5 text-primary" /> */}
                <span className="text-muted-foreground">
                  info@mechexpert.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} MechExpert. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
