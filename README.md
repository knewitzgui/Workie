# Dagaz

Formatação de CPF e CNPJ:
- Input type number
- chamada formatCpfCnpj(number)
- *Não conter caracteres especiais, apenas números

Formatação de telefone:
- Input type number
- chamada formatPhone(number)
- *Não conter caracteres especiais, apenas números

Formatação de CEP:
- Input type number
- chamada formatCep(number)
- *Não conter caracteres especiais, apenas números

Utilização de consulta de CEP nos correios:
- Chamada consultaCep('env', 'cep')
    - env = campo text, ambiente que está sendo utilizado. Ex.: prod, dev
    - cep = campo text, CEP sem caracteres especiais apenas números
- Retorno de um objeto com bairro, cep, cidade, complemento, endereço, uf
    
    Exemplo de uso:
        consultaCEP('dev', '93315400')
            .then(address => console.log(address))
            .catch(err => console.log(err))

    Retorno:
        {
        bairro: 'Operário',
        cep: '93315400',
        cidade: 'Novo Hamburgo',
        complemento2: '',
        end: 'Rua Visconde de Ouro Preto',
        uf: 'RS'
        }



Dependencias: 
    "soap": "^0.31.0"
