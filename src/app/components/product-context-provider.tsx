"use client";

import { ProductContext } from "./mdx/index";
import type { ReactNode } from "react";

export function ProductContextProvider({ product, children }: { product: string; children: ReactNode }) {
  return <ProductContext.Provider value={product}>{children}</ProductContext.Provider>;
}
