import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface ImgProps extends CoreUIProps {
 src: string;
 alt?: string;
 title?: string;
 width?: string;
}

export const Img: FC<ImgProps> = ({ ...props }) => <CoreUI {...props} as="img" />;
