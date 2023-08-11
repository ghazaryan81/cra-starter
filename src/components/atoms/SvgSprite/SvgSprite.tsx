import { FC, ReactNode } from "react";
import { Svg, Use, CoreUIProps } from "../../electrons";

export interface SvgSpriteProps extends CoreUIProps {
 width?: string;
 height?: string;
 hash?: string;
 fill?: string;
 props?: JSX.Element;
 children?: ReactNode;
}

export const SvgSprite: FC<SvgSpriteProps> = ({
 width,
 height,
 hash,
 fill = "currentcolor",
 ...props
}) => {
 return (
  // @ts-ignore
  <Svg width={width} height={height} fill={fill} {...props}>
   <Use xlinkHref={`../../../svg/mono/sprite.svg#${hash}`} />
  </Svg>
 );
};
