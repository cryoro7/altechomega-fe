import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

interface CustomProvidersProps {
  children: ReactNode;
}

export default function CustomProviders(props: CustomProvidersProps) {
  return <NextUIProvider>{props.children}</NextUIProvider>;
}
