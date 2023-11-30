import { twMerge } from "tailwind-merge";

const TOPICS = [
  "ClimateChange",
  "RenewableEnergy",
  "EcoFriendlyProducts",
  "SustainabilityTips",
];

const TrendingTopics = ({ className }) => (
  <div className={twMerge("flex flex-col", className)}>
    <h2 className="text-2xl font-semibold max-lg:text-center">
      Trending Topics
    </h2>

    <div className="flex flex-wrap max-lg:justify-center gap-y-0.5 gap-x-2 mt-6">
      {TOPICS.map((topic) => (
        <p key={topic}>#{topic}</p>
      ))}
    </div>
  </div>
);

export { TrendingTopics };
