// In Next.js 15 app router, we use metadata API instead of react-helmet
// This component is kept for compatibility but does nothing
const PageMeta = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  // In Next.js app router, metadata is handled by generateMetadata or metadata export
  // This component is kept for compatibility but doesn't render anything
  return null;
};

export const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

export default PageMeta;
