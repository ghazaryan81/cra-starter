import cn from "classnames";
import { ReactNode, FC, memo, ElementType } from "react";

// prettier-ignore
import {
 Div, Footer, Header, Main,
 Section, Span, Img, Svg, Use,
 A, Br, Nav, Ul, Li, H1, H2, H3,
 Article, P, Button } from "@/components/electrons/";

import fixStyle from "@/styles/components/atoms/fix/Fix.module.scss";

export interface GridCustomProps {
 as: ElementType;
 styleDefine: { [key: string]: string };
 selectorName: string;
 elements?: ReactNode[];
 containersProps?: {
  container1?: JSX.Element;
  container2?: JSX.Element;
  container3?: JSX.Element;
  container4?: JSX.Element[];
 };
}

export function GridCustom({
 as: ContainerName = "section",
 styleDefine,
 selectorName,
 elements,
 containersProps,
}: GridCustomProps) {
 const container = styleDefine[selectorName];
 const row = styleDefine[`${selectorName}__row`];
 const col = styleDefine[`${selectorName}__col`];
 const colItem = (index: number) => styleDefine[`${selectorName}__col--${index + 1}`];

 return (
  <ContainerName className={container} {...containersProps?.container1}>
   <Div className={fixStyle.fix} {...containersProps?.container2}>
    <Div className={row} {...containersProps?.container3}>
     {elements?.map((item: ReactNode, index: number) => (
      <Div
       {...(containersProps?.container4 ? containersProps?.container4[index] : null)}
       key={index}
       className={cn(col, colItem(index))}
      >
       {item}
      </Div>
     ))}
    </Div>
   </Div>
  </ContainerName>
 );
}
