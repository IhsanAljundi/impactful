import { LoadingIcon } from "../icons";

const Loader = () => (
  <div className="fixed flex items-center justify-center w-screen h-screen">
    <LoadingIcon className="w-6 h-6 animate-spin" />
  </div>
);

export { Loader };
