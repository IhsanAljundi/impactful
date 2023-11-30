import { useState } from "react";

import { RegisterRole } from "./RegisterRole";
import { RegisterIndividual } from "./RegisterIndividual";
import { RegisterOrganization } from "./RegisterOrganization";

import { ReactComponent as AmplifyIllustration } from "./illustrations/amplify.svg";
import { ReactComponent as CommunityIllustration } from "./illustrations/community.svg";
import { ReactComponent as StartIllustration } from "./illustrations/start.svg";

const Register = () => {
  const [page, setPage] = useState(0);
  const [role, setRole] = useState(null);

  return (
    <main className="container grid grid-cols-1 lg:grid-cols-2 gap-16 py-8 lg:py-16 min-h-screen">
      <div className="flex flex-col items-center justify-center p-4 pb-8 text-center border border-gray-300 rounded-2xl">
        {page === 0 ? (
          <StartIllustration className="w-3/4 lg:w-1/2" />
        ) : role === "individual" ? (
          <CommunityIllustration className="w-3/4 lg:w-1/2" />
        ) : role === "organization" ? (
          <AmplifyIllustration className="w-3/4 lg:w-1/2" />
        ) : null}

        <h2 className="lg:mt-8 text-2xl font-semibold">
          {page === 0
            ? "Your Impact Starts Here"
            : role === "individual"
            ? "Join Our Community"
            : role === "organization"
            ? "Amplify Your Impact"
            : null}
        </h2>

        <p className="mt-2 max-w-xs text-gray-600">
          {page === 0
            ? "Start contributing to a wide range of projects that align with your interests and make a real difference"
            : role === "individual"
            ? "Contribute to projects, track your carbon footprint, and earn rewards for taking climate action"
            : role === "organization"
            ? "From volunteer opportunities to donations, broaden your reach and strengthen your programmes"
            : null}
        </p>
      </div>

      {page === 0 ? (
        <RegisterRole
          role={role}
          setRole={setRole}
          onContinue={() => setPage(1)}
        />
      ) : role === "individual" ? (
        <RegisterIndividual />
      ) : role === "organization" ? (
        <RegisterOrganization />
      ) : null}
    </main>
  );
};

export { Register };
