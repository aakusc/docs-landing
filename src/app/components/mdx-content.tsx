"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { mdxComponents } from "./mdx/index";

interface MdxContentProps {
  source: MDXRemoteSerializeResult;
}

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <MDXRemote
      {...source}
      components={mdxComponents as unknown as Record<string, React.ComponentType>}
    />
  );
}
