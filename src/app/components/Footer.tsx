import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-10 px-6 border-t border-zinc-800 mt-12 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Contato */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide">Contato</h3>
          <p className="flex justify-center md:justify-start items-center gap-2">📞 +55 (19) 99974‑3366</p>
          <p className="flex justify-center md:justify-start items-center gap-2 mt-2">✉️ blinkcompany.co@gmail.com</p>
          <p className="flex justify-center md:justify-start items-center gap-2 mt-2">
            <Link href="https://instagram.com/blink.strt" target="_blank" className="text-zinc-300 hover:text-emerald-400 font-medium">@blink.strt</Link>
          </p>
        </div>

        {/* Ajuda */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide">Ajuda</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/meus-pedidos" className="hover:text-emerald-400 transition">📦 Meus Pedidos</Link>
            </li>
          </ul>
        </div>

        {/* Pagamento */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide">Pagamento seguro</h3>
          <p className="mb-2">Aceitamos via Stripe:</p>
          <img src="https://stripe.com/img/v3/home/social.png" alt="Stripe" className="h-8 opacity-80 mx-auto md:mx-0" />
        </div>
      </div>

      <div className="text-center text-zinc-500 text-xs mt-10">
        © 2025 Blink Streetwear · Todos os direitos reservados
      </div>
    </footer>
  );
}
