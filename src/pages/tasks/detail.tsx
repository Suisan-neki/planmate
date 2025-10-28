import { useParams, Link } from 'react-router-dom'
import tasks from '../../fixtures/tasks.json'

type Task = {
  id: string
  title: string
  status: 'todo' | 'in_progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
  description?: string
}

export default function TaskDetailPage() {
  const { id } = useParams<{ id: string }>()
  const task = (tasks as Task[]).find((t) => t.id === id)

  if (!task) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Task not found</h1>
        <Link className="text-primary hover:underline" to="/tasks">
          Back to list
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{task.title}</h1>
        <Link className="text-sm text-primary hover:underline" to="/tasks">
          Back to list
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <section className="rounded-lg border border-border bg-card p-4 shadow-card md:col-span-2">
          <h2 className="mb-3 text-sm font-medium text-fg/70">Details</h2>
          <p className="whitespace-pre-wrap text-sm leading-6 text-fg/80">
            {task.description || 'No description.'}
          </p>
        </section>
        <section className="rounded-lg border border-border bg-card p-4 shadow-card">
          <h2 className="mb-3 text-sm font-medium text-fg/70">Meta</h2>
          <dl className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-fg/60">Status</dt>
              <dd className="capitalize">{task.status.replace('_', ' ')}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-fg/60">Priority</dt>
              <dd className="capitalize">{task.priority}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-fg/60">Due</dt>
              <dd>{task.dueDate ?? '-'}</dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  )
}

