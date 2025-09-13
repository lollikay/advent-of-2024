// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Html from '@kitajs/html'

// Example component using @kitajs/html
export function WelcomeCard({ name, count }: { name: string; count: number }) {
  return (
    <div class="card">
      <h2>Welcome to {name}</h2>
      <p>
        This component is rendered using <code>@kitajs/html</code> with TSX syntax!
      </p>
      <p>Current count: <strong>{count}</strong></p>
      <button 
        id="counter-btn" 
        type="button"
        class="kita-button"
      >
        Count is {count}
      </button>
    </div>
  )
}

// Example of a more complex component with conditional rendering
export function StatusIndicator({ isOnline, status }: { isOnline: boolean; status: string }) {
  return (
    <div class={`status-indicator ${isOnline ? 'online' : 'offline'}`}>
      <div class="status-dot"></div>
      <span class="status-text">
        {isOnline ? '🟢 Online' : '🔴 Offline'} - {status}
      </span>
    </div>
  )
}

// Component with list rendering
export function FeatureList({ features }: { features: string[] }) {
  return (
    <div class="feature-list">
      <h3>Features</h3>
      <ul>
        {features.map((feature) => (
          <li class="feature-item">
            ✨ {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}