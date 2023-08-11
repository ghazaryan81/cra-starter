import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface SvgProps extends CoreUIProps {
 width?: string;
 height?: string;
 fill?: string;
}

export const Svg: FC<SvgProps> = ({ ...props }) => <CoreUI {...props} as="svg" />;
