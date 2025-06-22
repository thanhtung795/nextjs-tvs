// components/common/PageMeta.tsx
"use client";

import { Helmet } from "react-helmet-async";

// ✅ Component SEO meta
const PageMeta = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default PageMeta;
