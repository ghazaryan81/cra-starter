import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface UseProps extends CoreUIProps {
 fill?: string;
 xlinkHref?: string;
}

export const Use: FC<UseProps> = ({ ...props }) => <CoreUI {...props} as="use" />;
