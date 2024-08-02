function ScoreBadge() {
	return (
		<div className="stats stats-horizontal sm:stats-vertical shadow w-full sm:w-[unset] lg:stats-horizontal">
			<div className="stat">
				<div className="stat-title text-primary">
					Digital <storng className="font-bold">Gem</storng>
				</div>
				<div className="stat-value text-success">64</div>
				<div className="stat-desc">Jan 1st - Feb 1st</div>
			</div>

			<div className="stat">
				<div className="stat-title text-primary">Score</div>
				<div className="stat-value text-success">+ 8</div>
				<div className="stat-desc">↗︎ Based on percents</div>
			</div>
		</div>
	);
}

export default ScoreBadge;
