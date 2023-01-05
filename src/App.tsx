import { useEffect, useState } from 'react'

import { Task } from './components/Task'
import { Header } from './components/Header'

import './styles/global.css'
import S from './App.module.css'
import { FormCreateTask } from './components/FormCreateTask'
import { Summary } from './components/Summary'
import { Empty } from './components/Empty'

type Task = {
  id: number
  status: 'check' | 'uncheck'
  content: string
}

export function App() {
  const [completedTasks, setCompletedTasks] = useState(0)
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      status: 'uncheck',
      content:
        'Manter e melhorar meu hábito de estudos e leitura de artigos de tecnologia;'
    },
    {
      id: 2,
      status: 'uncheck',
      content: 'Escrever sobre o que aprendi, retribuir para a comunidade;'
    },
    {
      id: 3,
      status: 'uncheck',
      content:
        'Terminar, documentar e, principalmente, me divertir, fazendo meu projeto pessoal.'
    },
    {
      id: 4,
      status: 'uncheck',
      content: 'Finalizar o Ignite'
    }
  ])

  useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.status === 'check').length)
  }, [tasks])

  function toggleTaskStatus(id: number) {
    const tasksWithNesState: Task[] = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: task.status === 'check' ? 'uncheck' : 'check'
          }
        : task
    )

    setTasks(tasksWithNesState)
  }

  function removeTask(id: number) {
    const taskWithoutTaskRemoved = tasks.filter((task) => task.id !== id)

    setTasks(taskWithoutTaskRemoved)
  }

  function createTask(task: string) {
    const newTaskId = tasks.length + 1

    const newTask: Task = {
      id: newTaskId,
      content: task,
      status: 'uncheck'
    }

    setTasks((state) => [...state, newTask])
  }

  return (
    <div className={S.App}>
      <Header />

      <div className={S.wrapperFormCreateTask}>
        <FormCreateTask onCreateTask={createTask} />
      </div>

      <Summary countTasks={tasks.length} completedTasks={completedTasks} />

      {!tasks.length && <Empty />}

      {!!tasks.length && (
        <main className={S.wrapperMain}>
          {tasks.map((task) => (
            <Task
              id={task.id}
              onToggleTaskStatus={toggleTaskStatus}
              onRemoveTask={removeTask}
              content={task.content}
              status={task.status}
            />
          ))}
        </main>
      )}
    </div>
  )
}
