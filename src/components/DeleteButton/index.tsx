import { Trash } from 'phosphor-react'

import S from './styles.module.css'

interface DeleteButtonProps {
  onClick: () => void
}

export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button
      onClick={() => onClick()}
      className={S.button}
      type="button"
      title="Excluir"
    >
      <Trash size={14} />
    </button>
  )
}
