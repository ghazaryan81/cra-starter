import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface SectionProps extends CoreUIProps {}

export const Section: FC<SectionProps> = ({ ...props }) => <CoreUI {...props} as="section" />;
