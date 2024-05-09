export default function SectionInner({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="max-w-[1440px] mx-auto">{children}</section>;
}
