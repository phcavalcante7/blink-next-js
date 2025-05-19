"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Destaques() {
  return (
    <section className="bg-[#0f0d15] text-white px-6 py-24">
      <h2 className="text-3xl font-bold text-center mb-14 tracking-tight">Destaques</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Item 1 - Graffiti */}
        <Link href="/camisetas/grafite-preta/" className="text-center group block">
          <div className="relative overflow-hidden rounded-xl shadow-xl h-[460px]">
            <Image
              src="/camisetas/grafite/grafite_2_camisetas_preta.jpg"
              alt="Grafite"
              fill
              className="object-cover transition duration-300 group-hover:opacity-0 rounded-xl"
            />
            <Image
              src="/camisetas/grafite/estampa_graffiti_preta.jpg"
              alt="Grafite Estampa"
              fill
              className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl"
            />
          </div>
          <p className="mt-4 text-base text-zinc-300 tracking-wide font-semibold">GRAFFITI</p>
        </Link>

        {/* Item 2 - Oni */}
        <Link href="/camisetas/oni-branca/" className="text-center group block">
          <div className="relative overflow-hidden rounded-xl shadow-xl h-[460px]">
            <Image
              src="/camisetas/oni/oni_2_camisetas_branca.jpg"
              alt="Oni"
              fill
              className="object-cover transition duration-300 group-hover:opacity-0 rounded-xl"
            />
            <Image
              src="/camisetas/oni/estampa_oni_branca.jpg"
              alt="Oni Estampa"
              fill
              className="absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl"
            />
          </div>
          <p className="mt-4 text-base text-zinc-300 tracking-wide font-semibold">ONI</p>
        </Link>
      </div>
    </section>
  );
}
