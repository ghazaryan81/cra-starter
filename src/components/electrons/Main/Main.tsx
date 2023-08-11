import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface MainProps extends CoreUIProps {}

export const Main: FC<MainProps> = ({ ...props }) => <CoreUI {...props} as="main" />;
