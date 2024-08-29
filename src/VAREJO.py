import os


def create_combined_file(
    folder_path, output_file, extensions=(".css", ".html", ".ts", ".js")
):
    with open(output_file, "w", encoding="utf-8") as outfile:
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                if file.endswith(extensions):
                    file_path = os.path.join(root, file)
                    try:
                        with open(file_path, "r", encoding="utf-8") as infile:
                            outfile.write(
                                f"Caminho completo: {file_path}\nConteúdo:\n{infile.read()}\n\n"
                            )
                    except UnicodeDecodeError:
                        outfile.write(
                            f"Arquivo: {file}\nNão foi possível ler o conteúdo (provavelmente um arquivo binário).\n\n"
                        )


# Definindo os caminhos e extensões
folder_path = "d:\\zoone\\projetobuscaproduto"
output_file = "d:\\zoone\\todosArquivosCssTsHtmlJs-02.txt"
extensions = (".css", ".html", ".ts", ".js")

# Chamando a função
create_combined_file(folder_path, output_file, extensions)