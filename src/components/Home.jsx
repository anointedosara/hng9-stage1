import React, { useEffect } from "react";
import Header from "./Header";
import Links from "./Links";

export default function Home() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div>
      <Header />
      <Links />
    </div>
  );
}
