import { Database, Code, Server } from "lucide-react";

export default function TechBadge({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg transition">
      <div className="text-indigo-600 dark:text-indigo-400">
        {icon}
      </div>
      <span className="font-medium text-sm dark:text-white">
        {label}
      </span>
    </div>
  );
}
