import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface H4Props extends CoreUIProps {}

export const H4: FC<H4Props> = ({ ...props }) => <CoreUI {...props} as="h4" />;
