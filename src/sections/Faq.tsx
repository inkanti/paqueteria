import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { FAQS } from '../data/site';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/**
 * Faq — preguntas frecuentes en accordion (Radix UI).
 * Animación suave al abrir/cerrar; el ícono + rota a ×
 * vía el estilo del trigger de shadcn.
 */
export default function Faq() {
  return (
    <section id="faq" className="bg-brand-gray py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          kicker="Resolvemos tus dudas"
          title="Preguntas Frecuentes"
          subtitle="¿No encontrás tu respuesta? Escribinos por WhatsApp y te ayudamos al instante."
        />

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border-none bg-white px-5 shadow-sm transition-shadow data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="py-5 text-left text-base font-bold text-slate-900 hover:text-brand-blue hover:no-underline [&[data-state=open]>svg]:rotate-45">
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-black text-brand-blue">
                      ?
                    </span>
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-10 text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
