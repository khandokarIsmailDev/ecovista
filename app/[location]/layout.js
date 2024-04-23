import { Inter } from "next/font/google";
// import "../globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eco App",
  description: "World tempreture app",
};

export default function RootLayout({
  children,
  aqi,
  tempreture,
  weather,
  wind,
}) {
  //same folder e deikha aqi k ai layout e access dilam
  return (
    <div className="wrapper">
      <div>
        <div className="overlay" />
        <Image
          src="/background.png"
          alt="background imgage"
          width={800}
          height={1200}
          className="bg-img"
        />
      </div>
      

      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {tempreture}
          </div>
        </div>
      </main>
    </div>
  );
}
