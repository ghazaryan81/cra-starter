import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface HrProps extends CoreUIProps {}

export const Hr: FC<HrProps> = ({ ...props }) => <CoreUI {...props} as="hr" />;
