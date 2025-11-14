export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="m-auto max-w-5xl">{children}</div>
    </main>
  );
}
