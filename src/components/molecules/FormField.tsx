import { InputHTMLAttributes } from 'react'
import Icon from '../atoms/Icon'

type State = 'inactive' | 'active' | 'error'

export default function FormField(
  { label, hint, state = 'inactive', className = '', startIconSrc, startIconName, ...props }:
  InputHTMLAttributes<HTMLInputElement> & { label?: string; hint?: string; state?: State; startIconSrc?: string; startIconName?: 'user' | 'mail' | 'lock' | 'calendar' | 'stats' | 'tick' | 'finger' | 'close' | 'arrow' }
) {
  const ring = state === 'error' ? 'ring-error' : state === 'active' ? 'ring-primary' : 'ring-grey/30'
  const hintColor = state === 'error' ? 'text-error' : 'text-grey'
  return (
    <div className={className}>
      {label && <div className="mb-2 text-sm text-dark">{label}</div>}
      <div className={`flex items-center gap-3 rounded-lg bg-white px-4 py-3 ring-1 ${ring}`}>
        {startIconName ? <Icon name={startIconName} className="h-5 w-5 opacity-80" /> : startIconSrc ? <img src={startIconSrc} alt="" className="h-5 w-5 opacity-80" /> : null}
        <input {...props} className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-grey" readOnly={props.readOnly ?? true} />
      </div>
      {hint && <div className={`mt-2 text-xs ${hintColor}`}>{hint}</div>}
    </div>
  )
}


