import S from './styles.module.css'

interface SummaryProps {
  countTasks: number
  completedTasks: number
}

export function Summary({ completedTasks = 0, countTasks = 0 }: SummaryProps) {
  return (
    <div className={S.summary}>
      <div className={S.countTasks}>
        <p>Tarefas criadas</p>
        <span>{countTasks}</span>
      </div>

      <div className={S.completedTasks}>
        <p>Concluídas</p>

        {countTasks ? (
          <span>
            {completedTasks} de {countTasks}
          </span>
        ) : (
          <span>0</span>
        )}
      </div>
    </div>
  )
}
