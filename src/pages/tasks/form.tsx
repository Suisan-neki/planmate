import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function TaskFormPage() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')
  const [status, setStatus] = useState<'todo' | 'in_progress' | 'done'>('todo')
  const [description, setDescription] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    // UIデモ目的のため、保存処理は未実装
    alert('Task created (UI demo). Returning to list.')
    navigate('/tasks')
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">New Task</h1>
        <Link className="text-sm text-primary hover:underline" to="/tasks">
          Cancel
        </Link>
      </div>

      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          <div className="rounded-lg border border-border bg-card p-4 shadow-card">
            <label className="mb-1 block text-sm font-medium">Title</label>
            <input
              className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none placeholder:text-fg/40 focus:ring-2 focus:ring-primary/40"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title"
              required
            />
          </div>

          <div className="rounded-lg border border-border bg-card p-4 shadow-card">
            <label className="mb-1 block text-sm font-medium">Description</label>
            <textarea
              className="min-h-[140px] w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none placeholder:text-fg/40 focus:ring-2 focus:ring-primary/40"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Details"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-4 shadow-card">
            <label className="mb-1 block text-sm font-medium">Status</label>
            <select
              className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
            >
              <option value="todo">To do</option>
              <option value="in_progress">In progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div className="rounded-lg border border-border bg-card p-4 shadow-card">
            <label className="mb-1 block text-sm font-medium">Priority</label>
            <select
              className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              value={priority}
              onChange={(e) => setPriority(e.target.value as any)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="rounded-lg border border-border bg-card p-4 shadow-card">
            <label className="mb-1 block text-sm font-medium">Due date</label>
            <input
              type="date"
              className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="rounded-lg border border-border bg-card p-4 shadow-card">
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-fg"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

