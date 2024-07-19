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
    { id: 1, descricao: "Tênis adidas", preco: 700.00, descricaoPreco: "À vista no PIX", imagem: "./assets/adidas_1.jpg" , quantidadeEstoque: 10 , lat: -23.5310617 , log: -47.1358779},
    { id: 2, descricao: "Tênis nike", preco: 900.00, descricaoPreco: "À vista no PIX", imagem: "./assets/nike1.jpg" , quantidadeEstoque: 10 , lat: -23.529602 , log: -47.134732},
    { id: 3, descricao: "Air Pod", preco: 990.00, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg" , quantidadeEstoque: 10 , lat: -23.5292257 , log: -47.1349534},
    { id: 4, descricao: "Notebook Asus", preco: 2900.00, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg" , quantidadeEstoque: 10 , lat: -23.529602 , log: -47.134732},
    { id: 5, descricao: "Mouse", preco: 30.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg" , quantidadeEstoque: 10 , lat: -23.5280414 , log: -47.1373794},
    { id: 6, descricao: "Mouse Gamer", preco: 170.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg" , quantidadeEstoque: 10 , lat: -23.52897 , log: -47.1346369},
    { id: 7, descricao: "Teclado Mecânico", preco: 235.00, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg" , quantidadeEstoque: 10 , lat: -23.52897 , log: -47.1346369},
    { id: 8, descricao: "Teclado Apple", preco: 1170.00, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg" , quantidadeEstoque: 10 , lat: -23.52897 , log: -47.1346369},
    { id: 9, descricao: "Fone de Ouvido", preco: 90.00, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg" , quantidadeEstoque: 10 , lat: -23.5280414 , log: -47.1373794},
    { id: 9, descricao: "Fone de Ouvido Waw", preco: 499.00, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg" , quantidadeEstoque: 10 , lat: -23.533692 , log: -47.133688}

]