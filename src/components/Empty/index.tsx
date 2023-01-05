import { ListChecks } from 'phosphor-react'

import S from './styles.module.css'

export function Empty() {
  return (
    <div className={S.wrapper}>
      <div className={S.wrapperIcon}>
        <ListChecks size={65} />
      </div>

      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}
