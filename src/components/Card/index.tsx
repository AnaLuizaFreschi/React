import { Section } from "./styles";
export interface ICard {
  endereco: string
  preferencias: string
  comentario: string
}
export const Card = ({ endereco, preferencias, comentario }: ICard) => {
  return (
    <Section>
      <aside>
        <h5>Endereço:</h5>
        <p>{endereco}</p>
      </aside>
      <aside>
        <h5>Preferências:</h5>
        <p>{preferencias}</p>
      </aside>
      <aside>
        <h5>Comentário:</h5>
        <p>{comentario}</p>
      </aside>
    </Section>
  );
};