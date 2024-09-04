import { SignUp } from "@clerk/nextjs";

const appearance = {
  elements: {
    formButtonPrimary: "bg-blue-600 text-white",
    formButtonSecondary: "bg-gray-600 text-white",
  },
  variables: {
    colorPrimary: "#1d4ed8",
    colorBackground: "#f9fafb",
  },
};

export default function Page() {
  return <SignUp appearance={appearance} />;
}