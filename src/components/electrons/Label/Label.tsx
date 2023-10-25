import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface LabelProps extends CoreUIProps {
 htmlFor?: string;
}

export const Label: FC<LabelProps> = ({ ...props }) => <CoreUI {...props} as="label" />;
