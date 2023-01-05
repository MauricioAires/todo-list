import { FormEvent, useState } from 'react'
import { CreateButton } from '../CreateButton'

import S from './styles.module.css'

interface FormCreateTaskProps {
  onCreateTask: (task: string) => void
}

export function FormCreateTask({ onCreateTask }: FormCreateTaskProps) {
  const [task, setTask] = useState('')

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    if (!task) {
      return
    }

    onCreateTask(task)

    setTask('')
  }

  return (
    <form onSubmit={handleCreateTask} className={S.formCreateTask}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />

      <CreateButton disabled={!task} />
    </form>
  )
}
