import React from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function AppLayout({ children }) {
  return (
    <main className="app-conatiner">
      <Header />
      <section className="app-content">
        <Sidebar />
        {children}
      </section>
    </main>
  );
}
