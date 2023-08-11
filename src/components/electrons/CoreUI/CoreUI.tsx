import { memo, ElementType, HTMLAttributes, FC, ReactNode } from "react";

export interface CoreUIProps extends HTMLAttributes<HTMLElement> {
 as?: ElementType;
 forwardRef?: HTMLElement;
 type?: string;
 props?: JSX.Element;
 children?: ReactNode;
}

export const CoreUI: FC<CoreUIProps> = memo(
 ({ as: Element = "div", forwardRef, children, type, ...props }) => {
  const typeButton = Element === "button" && !type ? Element : type;
  const typeInput = Element === "input" && !type ? "text" : type;

  const attrs = {
   type: type || typeButton || typeInput,
   ...props,
  };

  return !forwardRef ? (
   <Element {...attrs}>{children}</Element>
  ) : (
   <Element {...attrs} ref={forwardRef}>
    {children}
   </Element>
  );
 },
);

CoreUI.displayName = "CoreUI";
