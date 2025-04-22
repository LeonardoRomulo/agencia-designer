import estilos from "./Topo.module.css";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import Sun from "../../../../public/sun.png";
import Moon from "../../../../public/moon.png";

export default function Topo(props) {
  return (
    <main className={props.modoEscuro ? estilos.modo_escuro : "" }>
      <header className={estilos.topo}>
        <Image className={estilos.logo} src={Logo} alt="logo" />
        <button
          onClick={props.acao_onClick}
          className={props.modoEscuro ? estilos.modo_escuro : ""}
        >
          {props.modoEscuro ? (
            <Image className={estilos.image} src={Sun} alt="lua" />
          ) : (
            <Image className={estilos.image} src={Moon} alt="sol" />
          )}
        </button>
      </header>
    </main>
  );
}
