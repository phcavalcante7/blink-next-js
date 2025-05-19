import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#0f0d15] text-white px-6 py-20 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">Sobre nós</h3>
          <p className="text-zinc-400 leading-relaxed text-sm">
            A Blink nasceu em 2025 do encontro entre arte e atitude. <br /><br />
            Fundada por dois amigos de infância: Otávio Scalari, o Ionick — fundador da marca — e Pedro H Cavalcante, o PH — cofundador. <br />
            A Blink representa mais do que uma marca de roupas: é um corre, uma visão, uma resposta ao tédio estético da moda convencional. <br /><br />
            Desde moleque, Ionick rabisca o mundo com criatividade. Sempre curtiu desenhar, criar personagens e mergulhar em universos visuais. Já PH é movido por empreendedorismo e vontade de fazer diferente. <br />
            Foi dessa mistura de forças que surgiu a Blink: um espaço onde o design encontra propósito e estilo vira mensagem.<br /><br />
            Cada peça é pensada como uma expressão de identidade.<br />
            Inspirados pelo streetwear nacional, pela cultura urbana e por tudo que carrega verdade nas ruas, nosso objetivo é vestir quem tem alma criativa, mente livre e espírito de luta.<br /><br />
            Nosso primeiro drop — <em>Kyoto</em> — mergulha nas raízes da estética japonesa, misturando tradição e rebeldia visual. <br />
            Mas cada coleção segue uma nova direção, uma nova história, uma nova resistência.<br /><br />
            Aqui, a estética é resistência — e cada drop é um manifesto visual. <br />
            Seja bem-vindo à Blink. <br />
            Sua nova marca favorita nasceu do corre. <br />
            E segue nele.
          </p>
        </div>
        <div>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/foto_calourada.jpeg"
              alt="Foto dos fundadores"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-64 md:h-80 mt-4 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/foto_ensaio.jpeg"
              alt="Foto dos fundadores"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
