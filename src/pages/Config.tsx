import { motion } from 'motion/react';
import { Save, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Config() {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight mb-1">Business Configuration</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">Train the AI agents on your business context.</p>
      </div>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSave}
        className="space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Business Name</label>
            <input type="text" defaultValue="AstraSales AI" className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Industry</label>
            <select className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50">
              <option>B2B SaaS</option>
              <option>E-commerce</option>
              <option>Agency</option>
              <option>Real Estate</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Product / Service Description</label>
          <textarea rows={3} defaultValue="Autonomous multi-agent sales system that finds leads, researches them, and sends personalized emails." className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Target Market (ICP)</label>
          <textarea rows={2} defaultValue="Founders and Sales Directors at B2B SaaS companies with 10-50 employees." className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Starting Price</label>
            <input type="text" defaultValue="$499/mo" className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Unique Selling Proposition (USP)</label>
            <input type="text" defaultValue="Replaces a full SDR team for a fraction of the cost." className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
          </div>
        </div>

        <div className="pt-4 flex items-center justify-end gap-4 border-t border-zinc-200 dark:border-white/10">
          {isSaved && (
            <motion.span 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-emerald-500 text-sm flex items-center gap-1 font-medium"
            >
              <CheckCircle2 className="w-4 h-4" /> Saved successfully
            </motion.span>
          )}
          <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2">
            <Save className="w-4 h-4" /> Save Configuration
          </button>
        </div>
      </motion.form>
    </div>
  );
}
