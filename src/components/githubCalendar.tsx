import { GitHubCalendar } from 'react-github-calendar';

export const GitHubActivity = () => {
  return (
    <div className="py-10 px-6 bg-slate-900/50 border border-slate-800 rounded-2xl mt-10">
      <h3 className="text-xl font-semibold mb-6 text-slate-300">My Contributions</h3>
      <GitHubCalendar 
        username="syahrullah26" 
        blockSize={12}
        blockMargin={5}
        colorScheme='dark'
        theme={{
          light: ['#1e293b', '#10b981'],
          dark: ['#1e293b', '#10b981'],
        }}
      />
    </div>
  );
};