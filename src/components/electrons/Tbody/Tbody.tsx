import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface TbodyProps extends CoreUIProps {}

export const Tbody: FC<TbodyProps> = ({ ...props }) => <CoreUI {...props} as="tbody" />;
