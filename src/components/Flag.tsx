/**
 * Flag — banderas SVG inline de USA y El Salvador.
 * Se usan en lugar de emojis 🇺🇸/🇸🇻 porque Windows no renderiza
 * los emojis de bandera (muestra solo las letras "US"/"SV").
 * Versiones simplificadas y reconocibles a tamaño pequeño.
 */
interface FlagProps {
  country: 'us' | 'sv';
  className?: string;
}

export default function Flag({ country, className = 'h-4 w-6' }: FlagProps) {
  if (country === 'us') {
    // Bandera de Estados Unidos (simplificada: 7 franjas + cantón con estrellas)
    return (
      <svg viewBox="0 0 24 16" className={`inline-block rounded-[2px] ${className}`} aria-label="Bandera de Estados Unidos" role="img">
        <rect width="24" height="16" fill="#B22234" />
        {/* Franjas blancas */}
        {[2, 5, 8, 11, 14].map((y) => (
          <rect key={y} y={y - 0.7} width="24" height="1.6" fill="#FFFFFF" />
        ))}
        {/* Cantón azul */}
        <rect width="10.5" height="8.6" fill="#3C3B6E" />
        {/* Estrellas simplificadas */}
        {[1.8, 4.3, 6.8, 9].map((x) =>
          [1.6, 3.6, 5.6, 7.4].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.55" fill="#FFFFFF" />
          ))
        )}
      </svg>
    );
  }

  // Bandera de El Salvador (tribanda azul-blanco-azul con emblema simplificado)
  return (
    <svg viewBox="0 0 24 16" className={`inline-block rounded-[2px] ${className}`} aria-label="Bandera de El Salvador" role="img">
      <rect width="24" height="16" fill="#0F47AF" />
      <rect y="5.33" width="24" height="5.34" fill="#FFFFFF" />
      {/* Emblema central simplificado */}
      <circle cx="12" cy="8" r="2.1" fill="#F2C800" opacity="0.9" />
      <circle cx="12" cy="8" r="1.2" fill="#0F47AF" opacity="0.85" />
    </svg>
  );
}
