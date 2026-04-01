"use client";

export const GithubStats = () => {
  const username = "syahrullah26";
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0f172a&ring=10b981&fire=10b981&currStreakNum=10b981&sideNums=94a3b8&sideLabels=94a3b8&dates=94a3b8`;

  const langUrl = `https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=tokyonight&bg_color=0f172a&title_color=10b981&text_color=94a3b8`;

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="github">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div
          className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 p-1 hover:border-emerald-500/50 transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img
            src={streakUrl}
            alt="GitHub Streak"
            className="w-full h-auto rounded-xl"
            loading="lazy"
          />
        </div>
        <div
          className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 p-1 hover:border-emerald-500/50 transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src={langUrl}
            alt="Most Commit Languages"
            className="w-full h-auto rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
