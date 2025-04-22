"use client";
import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import Topo from "./componentes/Topo";
import Card from "./componentes/Card";
import ExperienciTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Rodape from "./componentes/Rodape";
import Banner from "./componentes/SecaoBanner/index.jsx";

export default function Home() {
  const [modoEscuro, setModoEscuro] = useState(false);

  function mudarTema() {
    setModoEscuro(!modoEscuro);
  }

  return (
    <main className={`${estilos.main} { modoEscuro ? estilos.darkMode : estilos.lightMode}`}>
      <Topo acao_onClick={mudarTema} modoEscuro={modoEscuro} />
      <Banner modoEscuro={modoEscuro} />
      <ExperienciTrabalho modoEscuro={modoEscuro}/>
      <Rodape modoEscuro={modoEscuro} />
    </main>
  );
}
