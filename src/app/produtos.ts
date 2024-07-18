export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
    lat: number;
    log: number ;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Tênis adidas", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "./assets/adidas_1.jpg" , quantidadeEstoque: 10 , lat: -23.529202 , log: -47.134732},
    { id: 2, descricao: "Tênis nike", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "./assets/nike1.jpg" , quantidadeEstoque: 10 , lat: -23.529202 , log: -47.134732},

]