import { twMerge } from "tailwind-merge";
import { ChartIcon, StarIcon, UserIcon } from "../../icons";

const ProfileStatistics = ({ className, profile }) => (
  <div className={twMerge("flex flex-col", className)}>
    <h1 className="text-2xl font-semibold max-lg:text-center">Statistics</h1>

    <div className="flex flex-col space-y-4 mt-6">
      <div className="flex items-center p-4 border border-gray-300 rounded-3xl">
        <div className="flex items-center justify-center w-14 h-14 bg-gold rounded-full">
          <StarIcon />
        </div>

        <div className="flex flex-col ml-4">
          <p className="text-lg font-semibold">
            {profile.stats?.contribution ?? 0}
          </p>
          <p className="mt-1 text-sm text-gray-700">Contributions</p>
        </div>
      </div>

      <div className="flex items-center p-4 border border-gray-300 rounded-3xl">
        <div className="flex items-center justify-center w-14 h-14 bg-pink rounded-full">
          <ChartIcon />
        </div>

        <div className="flex flex-col ml-4">
          <p className="text-lg font-semibold">
            {profile.stats?.emission ?? 0} kgCO<sub>2</sub>e
          </p>
          <p className="mt-1 text-sm text-gray-700">Carbon emissions reduced</p>
        </div>
      </div>

      <div className="flex items-center p-4 border border-gray-300 rounded-3xl">
        <div className="flex items-center justify-center w-14 h-14 bg-turqoise rounded-full">
          <UserIcon />
        </div>

        <div className="flex flex-col ml-4">
          <p className="text-lg font-semibold">
            {profile.stats?.followers ?? 0}
          </p>
          <p className="mt-1 text-sm text-gray-700">Followers</p>
        </div>
      </div>
    </div>
  </div>
);

export { ProfileStatistics };
