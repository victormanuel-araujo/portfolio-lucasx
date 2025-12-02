import type { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  active?: boolean;
  onClick(): void;
}
