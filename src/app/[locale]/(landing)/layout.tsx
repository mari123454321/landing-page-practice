import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";


export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
