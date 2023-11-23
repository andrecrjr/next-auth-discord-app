import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function CardConcerts() {
  return <><Card className="p-4 space-y-2">
  <h2 className="text-2xl font-semibold tracking-tight first:mt-0">
    RBD
  </h2>
  <p className="text-sm">
    Data: 19 de novembro de 2023
  </p>
  <p className="text-sm">
    Local: Allianz Parque, São Paulo
  </p>
  <p className="text-sm">
    Turnê: Tour do Adeus
  </p>
  <Button variant="default" color="red" size="sm">
    Ver detalhes
  </Button>
</Card>
<Card className="p-4 space-y-2">
  <h2 className="text-2xl font-semibold tracking-tight first:mt-0">
    Unknown Mortal Orchestra, American Football, Whitney e mais
  </h2>
  <p className="text-sm">
    Data: 19 de novembro de 2023
  </p>
  <p className="text-sm">
    Local: Tokio Marine Hall, São Paulo
  </p>
  <p className="text-sm">
    Festival: Balaclava Fest 2023
  </p>
  <Button variant="default" color="red" size="sm">
    Ver detalhes
  </Button>
</Card>
<Card className="p-4 space-y-2">
  <h2 className="text-2xl font-semibold tracking-tight first:mt-0">
    Taylor Swift e Sabrina Carpenter
  </h2>
  <p className="text-sm">
    Data: 24 e 25 de novembro de 2023
  </p>
  <p className="text-sm">
    Local: Allianz Parque, São Paulo
  </p>
  <p className="text-sm">
    Turnê: Lover Fest South
  </p>
  <Button variant="default" color="red" size="sm">
    Ver detalhes
  </Button>
</Card>
<Card className="p-4 space-y-2">
  <h2 className="text-2xl font-semibold tracking-tight first:mt-0">
    Blind Guardian
  </h2>
  <p className="text-sm">
    Data: 21, 23 e 25 de novembro de 2023
  </p>
  <p className="text-sm">
    Local: Ópera de Arame, Curitiba; Bar Opinião, Porto Alegre; Terra SP, São Paulo
  </p>
  <p className="text-sm">
    Turnê: Legacy of the Dark Lands World Tour
  </p>
  <Button variant="default" color="red" size="sm">
    Ver detalhes
  </Button>
</Card>
<Card className="p-4 space-y-2">
  <h2 className="text-2xl font-semibold tracking-tight first:mt-0">
    Metallica
  </h2>
  <p className="text-sm">
    Data: 28 de novembro de 2023
  </p>
  <p className="text-sm">
    Local: Estádio do Morumbi, São Paulo
  </p>
  <p className="text-sm">
    Turnê: WorldWired Tour
  </p>
  <Button variant="default" color="red" size="sm">
    Ver detalhes
  </Button>
</Card>
<Card className="p-4 space-y-2">
  <h2 className="text-2xl font-semibold tracking-tight first:mt-0">
    Coldplay
  </h2>
  <p className="text-sm">
    Data: 30 de novembro de 2023
  </p>
  <p className="text-sm">
    Local: Estádio do Maracanã, Rio de Janeiro
  </p>
  <p className="text-sm">
    Turnê: Music of the Spheres Tour
  </p>
  <Button variant="default" color="red" size="sm">
    Ver detalhes
  </Button>
</Card>
</>;
}
