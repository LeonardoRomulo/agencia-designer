import estilos from "./Experiencia.module.css";
import Card from "../Card";

export default function ExperienciTrabalho(props) {
  return (
    <main className={props.modoEscuro ? estilos.modo_escuro : "" }>
      <section className={estilos.experiencia}>
        <div className={estilos.container_titulo}>
          <h2>Experiências De Trabalho</h2>
          <p>
            Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação
            de Sites e Marketing Digital, nos empenhamos diariamente para
            entregar resultados que tragam impacto aos nossos clientes.
          </p>
        </div>
        <div className={estilos.container_cards}>
          <Card
            data="FEVEREIRO 2019 - 2021"
            titulo="Digital Consulting"
            empresa="Arasaka Inc."
            paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
          />
          <Card
            data="AGOSTO 2016 - 2019"
            titulo="Product Designer"
            empresa="E Corp."
            paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
          />
          <Card
            data="FEVEREIRO 2019 - 2021"
            titulo="Digital Consulting"
            empresa="Arasaka Inc."
            paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
          />
        </div>
      </section>
    </main>
  );
}
