import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface FormProps extends CoreUIProps {}

export const Form: FC<FormProps> = ({ ...props }) => <CoreUI {...props} as="form" />;
