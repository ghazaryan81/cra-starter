import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface BProps extends CoreUIProps {}

export const B: FC<BProps> = ({ ...props }) => <CoreUI {...props} as="b" />;
