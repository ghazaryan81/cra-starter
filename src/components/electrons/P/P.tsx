import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface PProps extends CoreUIProps {}

export const P: FC<PProps> = ({ ...props }) => <CoreUI {...props} as="p" />;
