import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface UlProps extends CoreUIProps {}

export const Ul: FC<UlProps> = ({ ...props }) => <CoreUI {...props} as="ul" />;
