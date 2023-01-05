import { PlusCircle } from 'phosphor-react'

import S from './styles.module.css'

interface CreateButtonProps {
  disabled?: boolean
}

export function CreateButton({ disabled = false }: CreateButtonProps) {
  return (
    <button className={S.button} disabled={disabled} type="submit">
      Criar <PlusCircle size={16} />
    </button>
  )
}
