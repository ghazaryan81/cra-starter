import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface BrProps extends CoreUIProps {}

export const Br: FC<BrProps> = ({ ...props }) => <CoreUI {...props} as="br" />;
