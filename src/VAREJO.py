# Faz uma requisição POST para a página de busca com o ramo de atividade selecionado
data = {"RAMO ATIVIDADE": 'LOJA DE ROUPAS FEMININAS'}
headers = {"Content-Type": "application/x-www-form-urlencoded"}
response = requests.post(url, data=data, headers=headers)

# Parseia o HTML com Beautiful Soup
soup = BeautifulSoup(response.content, "lxml")

# Encontra a tabela com os dados dos lojistas
table = soup.find("table", {"class": "table-striped"})

# Itera sobre as linhas da tabela
for row in table.find_all("tr")[1:]:  # Ignora a linha de cabeçalho
    cols = row.find_all("td")
    lojista = {
        "nome": cols[0].text.strip(),
        "endereco": cols[1].text.strip(),
        "telefone": cols[2].text.strip(),
        # Adicione mais campos aqui se necessário
    }
    lojistas[ramo_atividade].append(lojista)
