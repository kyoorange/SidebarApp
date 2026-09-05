import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="app-layout">

      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen((current) => !current)}
      />

      <main className="main-content">
        <div className="greeting">main content</div>
      </main>
    </div>
  )
}

export default App
