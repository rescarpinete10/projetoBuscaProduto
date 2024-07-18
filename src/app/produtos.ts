export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
    lat: any;
    log: any;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Tênis adidas", preco: 700.00, descricaoPreco: "À vista no PIX", imagem: "./assets/adidas_1.jpg" , quantidadeEstoque: 10 , lat: -23.529202 , log: -47.134732},
    { id: 2, descricao: "Tênis nike", preco: 900.00, descricaoPreco: "À vista no PIX", imagem: "./assets/nike1.jpg" , quantidadeEstoque: 10 , lat: -23.529602 , log: -47.134732},

]