import DetalhaProduto from './DetalhaProduto';
import './css/home.css';

export default function Home() {
  const produto = [
    {
      nome: "Mustang GT",
      marca: "Ford",
      preco: "R$ 450.000",
      imagem: 'src\Imagens\ford-brasil-noticia-mustang-gt-lancamento-lote-esgotado-260324.jpg',
    },
    {
      nome: "Camaro SS",
      marca: "Chevrolet",
      preco: "R$ 420.000",
      imagem: "src\Imagens\ford-brasil-noticia-mustang-gt-lancamento-lote-esgotado-260324.jpg",
    },
    {
      nome: "BMW M4",
      marca: "BMW",
      preco: "R$ 600.000",
      imagem: "src\Imagens\ford-brasil-noticia-mustang-gt-lancamento-lote-esgotado-260324.jpg",
    },
    {
      nome: "Ford Fusca",
      marca: "Fusca",
      preco: "R$ 300.000",
      imagem: "src\Imagens\ford-brasil-noticia-mustang-gt-lancamento-lote-esgotado-260324.jpg",
    }
  ];

  return (
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
  );
}
