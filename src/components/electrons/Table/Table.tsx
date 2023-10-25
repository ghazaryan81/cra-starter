import { FC } from "react";
import { CoreUI, CoreUIProps } from "@/components/electrons/CoreUI";

export interface TableProps extends CoreUIProps {
 width?: string;
}

export const Table: FC<TableProps> = ({ ...props }) => <CoreUI {...props} as="table" />;
