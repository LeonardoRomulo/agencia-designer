import estilos from "./Banner.module.css";
import Image from "next/image";
import BannerImg from "../../../../public/banner.jpg";

export default function Banner(props) {
  return (
    <main className={props.modoEscuro ? estilos.modo_escuro : ""}>
      <section className={estilos.banner}>
        <div className={estilos.container}>
          <Image
            className={estilos.banner_img}
            src={BannerImg}
            alt="banner"
          ></Image>
        </div>
        <div className={estilos.container_texto}>
          <p>Branding / ui / ux /tecnologia</p>
          <h2>Agência de branding</h2>
          <span>e designer digital</span>
        </div>
      </section>
    </main>
  );
}
