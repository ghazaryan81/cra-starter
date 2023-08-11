import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface H2Props extends CoreUIProps {}

export const H2: FC<H2Props> = ({ ...props }) => <CoreUI {...props} as="h2" />;
