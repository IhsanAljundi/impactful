import { twMerge } from "tailwind-merge";

import { Button } from "../../elements";
import { ChevronIcon, StarIcon, UserIcon } from "../../icons";

const RegisterRoleButton = ({
  icon: Icon,
  title,
  description,
  selected,
  onSelect,
}) => (
  <button
    className={twMerge(
      "flex flex-col items-center p-8 border rounded-xl transition",
      selected ? "border-blue" : "border-gray-200"
    )}
    onClick={onSelect}
  >
    <div
      className={twMerge(
        "flex items-center justify-center w-16 h-16 text-white rounded-2xl transition",
        selected ? "bg-blue" : "bg-peach"
      )}
    >
      <Icon
        className={twMerge(
          "w-8 h-8 transition",
          selected ? "text-white" : "text-gray-900"
        )}
      />
    </div>

    <p className="mt-4 font-semibold">{title}</p>
    <p className="mt-2 text-sm max-w-xs text-gray-600">{description}</p>
  </button>
);

const RegisterRole = ({ role, setRole, onContinue }) => (
  <div className="flex flex-col items-center text-center">
    <h2 className="text-2xl font-semibold">Who Are You?</h2>
    <p className="mt-2 max-w-xs text-gray-600">
      Please tell us a little bit more about yourself and who you are
    </p>

    <div className="flex flex-col items-stretch space-y-4 mt-8 w-full">
      <RegisterRoleButton
        icon={UserIcon}
        title="Personal Contributor"
        description="For personal accounts focused on individual action and community interaction"
        selected={role === "individual"}
        onSelect={() => setRole("individual")}
      />

      <RegisterRoleButton
        icon={StarIcon}
        title="Organization"
        description="For businesses, nonprofits, or educational institutions looking to amplify their impact"
        selected={role === "organization"}
        onSelect={() => setRole("organization")}
      />
    </div>

    <Button
      className="mt-8 lg:mt-auto w-full"
      variant="fill"
      trailing={<ChevronIcon />}
      onClick={onContinue}
      disabled={!role}
    >
      Continue
    </Button>
  </div>
);

export { RegisterRole };
