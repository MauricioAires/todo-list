import { PlusCircle } from 'phosphor-react'

import S from './styles.module.css'

export function CreateButton() {
  return (
    <button className={S.button}>
      Criar <PlusCircle size={16} />
    </button>
  )
}
