import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface H6Props extends CoreUIProps {}

export const H6: FC<H6Props> = ({ ...props }) => <CoreUI {...props} as="h6" />;
