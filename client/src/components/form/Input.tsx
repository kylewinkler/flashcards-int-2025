interface InputProps {
  value: string
  onChange: (val: string) => void
}

const Input = ({ value, onChange }: InputProps) => {

  return (
    <input value={value} onChange={e => onChange(e.target.value)} />
  )
}

export default Input