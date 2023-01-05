import { Trash } from 'phosphor-react'
import { CheckBox } from '../Checkbox'
import { DeleteButton } from '../DeleteButton'

import S from './styles.module.css'

interface TaskProps {
  id: number
  status: 'check' | 'uncheck'
  content: string
  onToggleTaskStatus: (id: number) => void
  onRemoveTask: (id: number) => void
}

export function Task({
  id,
  content,
  status,
  onToggleTaskStatus,
  onRemoveTask
}: TaskProps) {
  return (
    <div
      className={`${S.task} ${status === 'check' && S.taskCompleted}`}
      data-index={id}
    >
      <CheckBox status={status} onCheck={() => onToggleTaskStatus(id)} />
      <p>{content}</p>
      <DeleteButton onClick={() => onRemoveTask(id)} />
    </div>
  )
}
