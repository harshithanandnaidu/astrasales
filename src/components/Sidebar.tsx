import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { LayoutDashboard, Users, Settings, Inbox, Bot, Zap } from 'lucide-react';
import { cn } from '../utils/cn';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Inbox, label: 'Inbox', href: '/inbox' },
  { icon: Users, label: 'Leads', href: '/dashboard' },
  { icon: Settings, label: 'Configuration', href: '/config' },
];

export default function Sidebar({ isDemoMode, setIsDemoMode }: { isDemoMode: boolean, setIsDemoMode: (v: boolean) => void }) {
  const location = useLocation();

  return (
    <div className="w-64 border-r border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 flex flex-col h-full shrink-0">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
          <Bot className="w-6 h-6 text-indigo-500" />
          <span>AstraSales<span className="text-indigo-500">AI</span></span>
        </Link>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors relative",
                isActive ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-zinc-200 dark:border-white/10">
        <button
          onClick={() => setIsDemoMode(!isDemoMode)}
          className={cn(
            "flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors border",
            isDemoMode 
              ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" 
              : "bg-transparent border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5"
          )}
        >
          <span className="flex items-center gap-2">
            <Zap className={cn("w-4 h-4", isDemoMode && "text-indigo-400 fill-indigo-400")} />
            Demo Mode
          </span>
          <div className={cn(
            "w-8 h-4 rounded-full p-0.5 transition-colors",
            isDemoMode ? "bg-indigo-500" : "bg-zinc-300 dark:bg-zinc-700"
          )}>
            <motion.div 
              className="w-3 h-3 bg-white rounded-full shadow-sm"
              animate={{ x: isDemoMode ? 16 : 0 }}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
