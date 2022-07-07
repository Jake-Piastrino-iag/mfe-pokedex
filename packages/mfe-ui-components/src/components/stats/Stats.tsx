import React from "react";

type StatsInfo = {
  title: string;
  value: string;
};

type StatsProps = {
  stats: StatsInfo[];
};

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="stats stats-vertical shadow">
      {stats.map((option) => (
        <div className="stat">
          <div className="stat-title">{option.title}</div>
          <div className="stat-value">{option.value}</div>
        </div>
      ))}
    </div>
  );
};
