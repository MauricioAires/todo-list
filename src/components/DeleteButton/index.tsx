import { Trash } from 'phosphor-react'

import S from './styles.module.css'

export function DeleteButton() {
  return (
    <button className={S.button} type="button" title="Excluir">
      <Trash size={14} />
    </button>
  )
}
