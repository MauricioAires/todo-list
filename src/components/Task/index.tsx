import { Trash } from 'phosphor-react'
import { CheckBox } from '../Checkbox'
import { DeleteButton } from '../DeleteButton'

import S from './styles.module.css'

export function Task() {
  return (
    <div className={S.task}>
      <CheckBox />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer. Integer urna interdum massa libero auctor
        neque turpis turpis semper. Duis vel sed fames integer. Integer urna
        interdum massa libero auctor neque turpis turpis semper. Duis vel sed
        fames integer.
      </p>
      <DeleteButton />
    </div>
  )
}
