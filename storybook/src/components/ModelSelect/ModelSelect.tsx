import { ChevronDown, Sparkles } from 'lucide-react'
import type { ModelSelectProps } from './ModelSelect.types'
import './ModelSelect.css'

/** Static visual of the nav's AI-model selector (no menu — sprint scope). */
export function ModelSelect({ model }: ModelSelectProps) {
  return (
    <button type="button" className="o1-modelselect">
      <Sparkles className="o1-modelselect__spark" aria-hidden="true" />
      <span className="o1-modelselect__label">AI model</span>
      <span className="o1-modelselect__model">{model}</span>
      <ChevronDown className="o1-modelselect__chevron" aria-hidden="true" />
    </button>
  )
}
