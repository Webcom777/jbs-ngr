import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../components/Header";
import Footer from "../components/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Header />
        <main className="flex-grow bg-gray-50">{children}</main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
