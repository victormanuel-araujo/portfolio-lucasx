import type { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  onClick(): void;
}
