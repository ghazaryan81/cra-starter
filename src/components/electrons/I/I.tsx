import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface IProps extends CoreUIProps {}

export const I: FC<IProps> = ({ ...props }) => <CoreUI {...props} as="i" />;
