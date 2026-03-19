import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AgentActivityPanel from '../components/AgentActivityPanel';
import { useState } from 'react';

export default function MainLayout() {
  const [isDemoMode, setIsDemoMode] = useState(false);

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans overflow-hidden">
      <Sidebar isDemoMode={isDemoMode} setIsDemoMode={setIsDemoMode} />
      <main className="flex-1 overflow-y-auto relative">
        <Outlet context={{ isDemoMode }} />
      </main>
      <AgentActivityPanel isDemoMode={isDemoMode} />
    </div>
  );
}
