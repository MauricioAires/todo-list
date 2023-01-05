import S from './styles.module.css'

interface CheckBoxProps {
  status?: 'uncheck' | 'check'
  onCheck: () => void
}

export function CheckBox({ status = 'uncheck', onCheck }: CheckBoxProps) {
  return (
    <input
      className={S.checkbox}
      value={status}
      checked={status === 'check'}
      type="checkbox"
      onChange={() => onCheck()}
    />
  )
}
