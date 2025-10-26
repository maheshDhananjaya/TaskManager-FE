import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className="min-h-screen flex justify-center bg-gray-50">
          <main className="w-full max-w-2xl p-10">
              <Component {...pageProps} />
          </main>
      </div>
  )
}
