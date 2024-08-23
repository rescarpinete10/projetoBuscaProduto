export interface IProduto {
    id: number;
    descricao: string;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Tênis adidas",  descricaoPreco: "À vista no PIX", imagem: "./assets/adidas_1.jpg" , quantidadeEstoque: 32 },
    { id: 2, descricao: "Tênis nike", descricaoPreco: "À vista no PIX", imagem: "./assets/nike1.jpg" , quantidadeEstoque: 14 },
    { id: 3, descricao: "Air Pod",  descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg" , quantidadeEstoque: 4 },
    { id: 4, descricao: "Notebook Asus",  descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg" , quantidadeEstoque: 3 },
    { id: 5, descricao: "Mouse", descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg" , quantidadeEstoque: 100 },
    { id: 6, descricao: "Mouse Gamer", descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg" , quantidadeEstoque: 12 },
    { id: 7, descricao: "Teclado Mecânico", descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg" , quantidadeEstoque: 21 },
    { id: 8, descricao: "Teclado Apple", descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg" , quantidadeEstoque: 10 },
    { id: 9, descricao: "Fone de Ouvido", descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg" , quantidadeEstoque: 15 },
    { id: 10, descricao: "Fone de Ouvido", descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg" , quantidadeEstoque: 18 }

]