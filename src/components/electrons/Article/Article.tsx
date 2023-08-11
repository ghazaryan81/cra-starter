import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface ArticleProps extends CoreUIProps {}

export const Article: FC<ArticleProps> = ({ ...props }) => <CoreUI {...props} as="article" />;
