import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Car,
  CheckCircle,
  Clock,
  Settings,
  Star,
  PenToolIcon as Tool,
  Wrench,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative pt-2 py-10 md:py-20 flex items-center justify-start"
      >
        <div className="w-full md:w-1/2 max-w-[680px] flex flex-col items-center md:items-start justify-center text-center z-10 py-3 pr-3 pl-1 rounded-xl md:rounded-s-none md:rounded-e-xl bg-white/30 md:bg-white/70">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
            Servicio Automotriz de <span className="text-primary">Calidad</span>
          </h1>
          <p className="text-xl text-black max-w-2xl mb-8">
            Mantenimiento y reparación de vehículos con técnicos certificados y
            repuestos originales para mantener tu auto en óptimas condiciones.
          </p>
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/services">Nuestros Servicios</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Agendar Cita</Link>
            </Button>
          </div>
        </div>
        <Image
          src="/hero.jpg"
          fill
          alt="Hero image"
          className="absolute top-0 object-cover"
        />
      </section>
      <section id="features" className="py-10 px-5 bg-background">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos servicios de alta calidad con técnicos certificados y
              las mejores herramientas del mercado.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Tool className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">
                Técnicos Certificados
              </h3>
              <p className="text-muted-foreground">
                Nuestro equipo está formado por técnicos con certificaciones y
                años de experiencia.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Repuestos Originales</h3>
              <p className="text-muted-foreground">
                Utilizamos repuestos originales y de alta calidad para
                garantizar la durabilidad.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Servicio Rápido</h3>
              <p className="text-muted-foreground">
                Valoramos su tiempo y nos esforzamos por ofrecer un servicio
                eficiente y puntual.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-10 px-5 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios para mantener su vehículo
              en óptimas condiciones.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg border overflow-hidden">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <Wrench className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">
                  Mantenimiento Preventivo
                </h3>
                <p className="text-muted-foreground mb-4">
                  Servicios regulares para mantener su vehículo funcionando sin
                  problemas y prevenir averías.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/services/maintenance">Más Información</Link>
                </Button>
              </div>
            </div>
            <div className="bg-card rounded-lg border overflow-hidden">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <Settings className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">
                  Reparación de Motor
                </h3>
                <p className="text-muted-foreground mb-4">
                  Diagnóstico y reparación de problemas del motor para restaurar
                  el rendimiento de su vehículo.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/services/repair">Más Información</Link>
                </Button>
              </div>
            </div>
            <div className="bg-card rounded-lg border overflow-hidden">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <Car className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">
                  Diagnóstico Computarizado
                </h3>
                <p className="text-muted-foreground mb-4">
                  Análisis detallado del sistema electrónico de su vehículo para
                  identificar problemas.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/services/diagnostics">Más Información</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/services">Ver Todos los Servicios</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-10 px-5 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor prioridad.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card p-6 rounded-lg border">
                <div className="flex items-center mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, j) => (
                      <Star key={j} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  Excelente servicio. Los técnicos son muy profesionales y el trabajo se realizó en el tiempo
                  prometido. Definitivamente volveré para el próximo mantenimiento.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="font-medium text-primary">{String.fromCharCode(65 + i - 1)}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Cliente Satisfecho {i}</h4>
                    <p className="text-sm text-muted-foreground">Cliente desde 202{i}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-5 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para mejorar el rendimiento de tu vehículo?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Agenda una cita hoy mismo y deja que nuestros expertos se encarguen de tu vehículo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Agendar Cita</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="/services">Explorar Servicios</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
