import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <main className="space-y-2">
    <h1 className="text-2xl font-semibold">Electron React App</h1>
    <p className="text-slate-600">Start building your desktop application.</p>
  </main>,
);
