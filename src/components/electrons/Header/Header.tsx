import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface HeaderProps extends CoreUIProps {}

export const Header: FC<HeaderProps> = ({ ...props }) => <CoreUI {...props} as="header" />;
