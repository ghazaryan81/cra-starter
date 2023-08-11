import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface H5Props extends CoreUIProps {}

export const H5: FC<H5Props> = ({ ...props }) => <CoreUI {...props} as="h5" />;
