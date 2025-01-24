import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function Comentario() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          endereco={item.endereco}
          preferencias={item.preferencias}
          comentario={item.comentario}
        />
      ))}
    </S.Section>
  )
}