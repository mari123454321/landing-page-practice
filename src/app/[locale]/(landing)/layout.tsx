import Footer from "@/src/components/Layout/Footer/Footer";
import Header from "@/src/components/Layout/Header/Header";


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
