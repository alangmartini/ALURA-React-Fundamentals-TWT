import style from './Relogio.module.scss';
import { secsToHour, tempoParaSegundos } from '../../../common/utils/time';
import { secsToMinutes } from '../../../common/utils/time';
import { useEffect, useState } from 'react';

export default function Relogio({ timer = 0 }: { timer: number | undefined}) {

  function myMinutes(timer: number | undefined) {
    const isNotUndefined = timer !== undefined;
    if (isNotUndefined) {
      let a = Math.floor(timer / 60)
      if (a < 10){

        return "0" + a
      }
      else{

        return `${a}`
      }
  }
  else {
    return "00"
  }
}

function mySeconds(timer: number | undefined){
  const isNotUndefined = timer !== undefined;
  if(isNotUndefined){
    let a = timer % 60
    if (a < 10) { return "0" + a}
    else {return `${a}`};
  }
  else return "00";

}


  const minute = Math.floor(timer / 60);
  const seconds = timer % 60;

  const [minute0, minute1] = String(minute).padStart(2, '0')
  const [seconds0, seconds1] = String(minute).padStart(2, '0')

  return (
    <> 
      <span className={style.relogioNumero}>{myMinutes(timer).split('')[0]}</span> 
      <span className={style.relogioNumero}>{myMinutes(timer).split('')[1]}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{mySeconds(timer).split('')[0]}</span>
      <span className={style.relogioNumero}>{mySeconds(timer).split('')[1]}</span>
    </>
  )
}