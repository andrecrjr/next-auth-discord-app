import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "./ui/avatar";
import { Card } from "./ui/card";
import Header from "./header";
import CardConcerts from "./card";

function Layout() {

    return (
      <>
      <Header />
      <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-3">
        <CardConcerts />
      </div>
    </>
  );
}

export default Layout;
