import tasks from '../../fixtures/tasks.json'
import { Link } from 'react-router-dom'

type Task = {
  id: string
  title: string
  status: 'todo' | 'in_progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
}

export default function TaskListPage() {
  const data = tasks as Task[]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <Link
          to="/tasks/new"
          className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-fg"
        >
          New Task
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-muted text-fg/70">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Priority</th>
              <th className="px-4 py-3 font-medium">Due</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {data.map((t) => (
              <tr key={t.id} className="border-t border-border">
                <td className="px-4 py-3">
                  <Link className="hover:underline" to={`/tasks/${t.id}`}>
                    {t.title}
                  </Link>
                </td>
                <td className="px-4 py-3 capitalize">{t.status.replace('_', ' ')}</td>
                <td className="px-4 py-3 capitalize">{t.priority}</td>
                <td className="px-4 py-3">{t.dueDate ?? '-'}</td>
                <td className="px-4 py-3 text-right">
                  <Link className="text-sm text-primary hover:underline" to={`/tasks/${t.id}`}>
                    Open
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

