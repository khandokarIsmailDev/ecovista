import { Inter } from "next/font/google";
// import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eco App",
  description: "World tempreture app",
};

export default function RootLayout({ children,aqi }) { //same folder e deikha aqi k ai layout e access dilam
  return (
    <div className="wrapper">
        {children}
        {aqi}
    </div>
      
  );
}
