import { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'disabled' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

export default function Button(
  { variant = 'primary', size = 'md', className = '', ...props }:
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }
) {
  const base = 'w-full rounded-lg text-sm font-medium transition active:translate-y-[0.5px]'
  const paddings = size === 'sm' ? 'py-2' : size === 'lg' ? 'py-4' : 'py-3'
  const style =
    variant === 'primary'
      ? 'bg-primary text-white hover:opacity-90'
      : variant === 'secondary'
        ? 'bg-secondary text-white hover:opacity-90'
        : variant === 'ghost'
          ? 'bg-transparent text-primary hover:bg-primary/10'
          : 'bg-grey/40 text-white cursor-not-allowed'

  return <button className={`${base} ${paddings} ${style} ${className}`} {...props} />
}


