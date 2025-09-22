// Exe Carrinho de Compras
const carrinho = {
  titulo: "Carrinho de compras",
  produtos: [
    {
      nome: "I2GO, Carregador Portátil (Power Bank), Pocket, 5000mAh, Não Necessita Cabos, Modelo USB-C",
      preco: 109.99,
      quantidade: 2,
      emEstoque: true,
      frete: "Entrega GRÁTIS: Amanhã, 22 de mar.",
      prime: true,
      presente: true,
      parcelas: "ou em até 2x de R$ 54,95 sem juros"
    },
    {
      nome: "Clamper Pocket Fit 3P 20A Preto LCF",
      preco: 137.30,
      quantidade: 1,
      emEstoque: true,
      frete: "Entrega GRÁTIS: Amanhã, 22 de mar.",
      prime: true,
      presente: true,
      desconto: "25%",
      precoOriginal: 182.99,
      observacao: "Semana do Consumidor"
    }
  ],
  subtotal: 257.29,
  totalItens: 3
};

console.log(carrinho);
