"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Destaques from "./components/Destaques";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      {/* FIRST VIEW SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-white px-6">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/arts/home_background.jpg"
            alt="Home Background Art"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg text-emerald-500 bg-black px-4 py-2 rounded-full">
            BLINK
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/camisetas"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded shadow-md font-bold transition text-xl"
            >
              Ver Drop Kyoto
            </Link>
          </div>
        </div>
      </section>

      {/* PROMO BANNER*/}
      <div className="relative z-10 text-center max-w-3xl mx-auto mt-8">
        <p className="mt-4 text-xl md:text-2xl text-zinc-300 font-light">
            Estilo de rua com alma criativa.
        </p>
        <span className="text-sm border border-pink-500 px-4 py-2 rounded-full text-pink-400 bg-zinc-950/40">
          Na compra de 3+ camisetas, ganhe 5% de desconto.
        </span>
      </div>

      {/* DESTAQUES */}
      <Destaques />

      {/* SOBRE A BLINK */}
      <About />

      {/* LOOKBOOK */}
      <section className="bg-[#0f0d15] text-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Lookbook</h2>
          <p className="text-zinc-400">Uma imersão visual nos traços e nas ideias por trás do Drop Kyoto</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Grafite Blink",
              src: "/lookbook/estampa grafite blink - camiseta preta (nova).png"
            },
            {
              title: "Máscara Oni",
              src: "/lookbook/estampa oni.png"
            },
            {
              title: "Samurai Blink",
              src: "/lookbook/estampa samurai camiseta preta png.png"
            },
            {
              title: "Ondas Koi",
              src: "/lookbook/estampa ondas koi blink - camiseta preta.png"
            }
          ].map(({ title, src }, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <h3 className="text-sm text-zinc-300 mb-2">{title}</h3>
              <div className="relative w-full h-64">
                <Image
                  src={src}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain transition duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
