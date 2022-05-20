import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useState, useEffect } from "react";

interface Props {
  selecionado: ITarefa | undefined,
  tempo: string,
  setTempo: React.Dispatch<React.SetStateAction<string>>
}

export default function Cronometro({tempo, setTempo }: Props) {
  let [shootCount, setShootCount] = useState<boolean>(false)
  let [timer, setTimer] = useState<number | undefined>()

  useEffect(() => {
    if (tempo != undefined) {
      setTimer(tempoParaSegundos(tempo));
    }
  }, [tempo]);

  
  useEffect(() => {

    if (timer !== 0 && timer !== tempoParaSegundos(tempo) && typeof timer === 'number' ) {
      setTimeout(() => {
        setTimer((prevValue: any) => prevValue - 1);
      },
        1000);
    };
  }, [timer]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Relogio 
        timer={timer}
        
        />
      </div>
      <Botao
      onClick={() => {
        setTimer((prevValue: any) => prevValue - 1)
      }}
      >
        Começar!
      </Botao>
    </div>
  )
}