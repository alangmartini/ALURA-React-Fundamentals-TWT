import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';
import {tempoParaSegundos} from '../../../common/utils/time'
interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
  setTempo: React.Dispatch<React.SetStateAction<string>>
}

export default function Item(
  {
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa,
    setTempo
  }: Props) 
  
  {
  
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() => {
        selecionaTarefa(
        {
          tarefa,
          tempo,
          selecionado,
          completado,
          id
        })
        setTempo(tempo)
      }

        
      }
      >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}