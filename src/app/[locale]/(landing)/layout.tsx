import Footer from "@/src/components/layout/footer/Footer";
import Header from "@/src/components/layout/header/Header";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
