import DetalhaProduto from './DetalhaProduto';
import './css/home.css';
import Carossel from './Carousel'
export default function Home() {
  const produto = [
    {
      nome: "Mustang GT",
      marca: "Ford",
      preco: "R$ 450.000",
      imagem: 'https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2024/mustang/overview/colorizer/preto-asturias/fbr-colorizer-mustang-gt-preto-asturias.jpg.dam.full.high.jpg/1711376831578.jpg',
    },
    {
      nome: "Camaro SS",
      marca: "Chevrolet",
      preco: "R$ 420.000",
      imagem: "https://www.webmotors.com.br/rbx/_next/image?url=https%3A%2F%2Fimage.webmotors.com.br%2F_fotos%2Fanunciousados%2Fgigante%2F2024%5C202412%5C20241213%5Cchevrolet-camaro-6.2-v8-gasolina-ss-conversivel-automatico-wmimagem14462965683.jpg&w=256&q=75",
    },
    {
      nome: "BMW M4",
      marca: "BMW",
      preco: "R$ 600.000",
      imagem: "https://www.webmotors.com.br/rbx/_next/image?url=https%3A%2F%2Fimage.webmotors.com.br%2F_fotos%2Fanunciousados%2Fgigante%2F2025%5C202503%5C20250328%5Cbmw-m4-3.0-i6-twinturbo-gasolina-coupe-cs-m-steptronic-wmimagem1501233266.jpg&w=256&q=75",
    },
    {
      nome: "Volksvawagen Fusca",
      marca: "Fusca",
      preco: "R$ 300.000",
      imagem: "https://img.olx.com.br/images/38/387445205947898.webp",
    },

  ];

  return (
    <>
      <Carossel />
      <main className="home-main">
        {produto.map((item, index) => (
          <DetalhaProduto
            key={index}
            nome={item.nome}
            marca={item.marca}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </main>
      <br/>
    </>
  );
}
