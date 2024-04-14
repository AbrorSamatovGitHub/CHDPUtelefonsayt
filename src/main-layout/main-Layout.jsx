import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

export const MainLayout = ({children}) => {
  return (
   <div className="wrapper">
    <div>
     <header>
      <Header />
     </header>
     <main>{children}</main>
    </div>
     <footer>
      <Footer />
     </footer>
   </div>
  );
};
