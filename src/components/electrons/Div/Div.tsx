import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface DivProps extends CoreUIProps {}

export const Div: FC<DivProps> = ({ ...props }) => <CoreUI {...props} as="div" />;
