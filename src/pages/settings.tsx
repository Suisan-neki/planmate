export default function SettingsPage(){
  return (
    <div>
      <h3 className="px-4 text-sm tracking-wide text-[var(--pm-subtext)]">Settings</h3>
      <div className="px-4 mt-2 space-y-2">
        <Row label="Push Notifications" value="On" />
        <Row label="Dark Mode" value="Always" />
        <Row label="Language" value="English" />
      </div>
    </div>
  )
}

function Row({label, value}:{label:string; value:string}){
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
      <span className="text-sm">{label}</span>
      <span className="text-xs text-[var(--pm-subtext)]">{value}</span>
    </div>
  )
}

