import S from './styles.module.css'

interface CheckBoxProps {
  status?: 'uncheck' | 'check'
}

export function CheckBox({ status = 'uncheck' }: CheckBoxProps) {
  return <input className={S.checkbox} value={status} type="checkbox" />
}
