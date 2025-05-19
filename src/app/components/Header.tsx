"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:text-emerald-400 transition">
          <span className="text-2xl font-black tracking-tight">BLINK</span>
        </Link>

        {/* Ícones à direita */}
        <div className="flex items-center gap-4">
          {/* Botão menu mobile */}
          <div className="sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Menu desktop */}
          <nav className="hidden sm:flex space-x-6 text-sm font-medium">
            <Link href="/camisetas" className="hover:text-emerald-400 transition">Camisetas</Link>
            <Link href="/meus-pedidos" className="hover:text-emerald-400 transition">Meus Pedidos</Link>
            <Link href="https://instagram.com/blink.strt" target="_blank" className="hover:text-emerald-400 transition">Instagram</Link>
          </nav>

          {/* Carrinho */}
          <div className="relative">
            <Link href="/carrinho" className="relative inline-flex items-center hover:text-emerald-400 transition">
              🛒
              {/* Simulação de badge (coloque lógica de carrinho real via estado ou contexto) */}
              {/* <span className="absolute -top-2 -right-3 bg-emerald-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span> */}
            </Link>
          </div>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-zinc-950 border-t border-zinc-800">
          <nav className="px-6 py-4 space-y-4 text-sm font-medium">
            <Link href="/camisetas" className="block hover:text-emerald-400 transition">Camisetas</Link>
            <Link href="/meus-pedidos" className="block hover:text-emerald-400 transition">Meus Pedidos</Link>
            <Link href="https://instagram.com/blink.strt" target="_blank" className="block hover:text-emerald-400 transition">Instagram</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
