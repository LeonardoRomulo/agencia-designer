import estilos from "./Rodape.module.css";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import Facebook from "../../../../public/facebook.png";
import Twitter from "../../../../public/twitter.png";
import Linkedin from "../../../../public/linkedin.png";
import Dribble from "../../../../public/dribble.png";
import Behance from "../../../../public/behance.png";
import Google from "../../../../public/google.png";
export default function Rodape(props) {
  return (
    <main className={props.modoEscuro ? estilos.modo_escuro : ""}>
      <footer className={estilos.rodape}>
        <div className={estilos.container_contatos}>
          <div className={estilos.container_logo}>
            <Image src={Logo} alt="logo" />
            <p>
              Ajudamos a criar uma personalidade digital construindo sua marca
              no ambiente online utilizando estratégias, ferramentas e
              tecnologias personalizadas.
            </p>
          </div>
          <div className={estilos.redes_sociais}>
            <Image src={Facebook} alt="Facebook"></Image>
            <Image src={Twitter} alt="Twitter"></Image>
            <Image src={Linkedin} alt="Linkedin"></Image>
            <Image src={Dribble} alt="Dribblw"></Image>
            <Image src={Behance} alt="Behance"></Image>
            <Image src={Google} alt="Google"></Image>
          </div>
        </div>
        <div className={estilos.copy}>
          <p>
            <span>Copyright 2022 </span> Leonardo Rômulo
          </p>
        </div>
      </footer>
    </main>
  );
}
