export interface Produto {
    imgUrl: string,
    price: number,
    quantidade: number,
    descricao: string
}

export const produtolist: Produto[] = [
    {
      imgUrl: "https://cdn.pixabay.com/photo/2017/08/30/07/51/bread-2692855_1280.jpg",
      price: 1.50,
      quantidade: 100,
      descricao: "Pão francês crocante e fresquinho, ideal para o café da manhã."
    },
    {
      imgUrl: "https://cdn.pixabay.com/photo/2017/05/31/21/03/bread-2369789_1280.jpg",
      price: 12.00,
      quantidade: 20,
      descricao: "Pão de forma caseiro, macio e saboroso."
    },
    {
      imgUrl: "https://cdn.pixabay.com/photo/2015/10/12/15/23/bread-984693_1280.jpg",
      price: 25.00,
      quantidade: 5,
      descricao: "Baguete francesa, ideal para sanduíches."
    },
    {
      imgUrl: "https://cdn.pixabay.com/photo/2016/11/18/12/00/bread-1836412_1280.jpg",
      price: 6.00,
      quantidade: 15,
      descricao: "Croissant amanteigado e crocante."
    },
    {
      imgUrl: "https://cdn.pixabay.com/photo/2017/10/21/14/52/pastries-2877355_1280.jpg",
      price: 10.00,
      quantidade: 30,
      descricao: "Sonho de padaria recheado com creme de confeiteiro."
    }
  ];
  