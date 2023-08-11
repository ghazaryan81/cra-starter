import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface H3Props extends CoreUIProps {}

export const H3: FC<H3Props> = ({ ...props }) => <CoreUI {...props} as="h3" />;
