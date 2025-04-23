export default function DetalhaProduto({ nome, marca, preco, imagem}) {
    return (
      <div className="produto-card">
        <img
          src={imagem}
          alt={nome}
          className="produto-imagem"
        />
        <div className="produto-info">
          <h2 className="produto-nome">Nome: {nome}</h2>
          <h3 className="produto-marca">Marca: {marca}</h3>
          <h3 className="produto-preco">Preço: {preco}</h3>
        </div>
      </div>
    );
  }
  