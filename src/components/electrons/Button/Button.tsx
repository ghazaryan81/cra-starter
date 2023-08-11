import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface ButtonProps extends CoreUIProps {}

export const Button: FC<ButtonProps> = ({ ...props }) => <CoreUI {...props} as="button" />;
