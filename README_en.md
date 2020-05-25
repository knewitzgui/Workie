# Workie

## Installation
    npm install workie
    
## Usage

#### Format CPF and CNPJ:
- Input type number.
- call formatCpfCnpj(number).
- *Cannot contain special characters, only numbers.

#### Format phone:
- Input type number.
- call formatPhone(number).
- *Cannot contain special characters, only numbers.

#### Format CEP:
- Input type number.
- call formatCep(number).
- *Cannot contain special characters, only numbers.

#### CEP search on Correios:
- call consultaCep('env', 'cep').
    - env = field text, wich environment is being used. Ex.: prod, dev.
    - cep = field text, CEP without special characters, only numbers.
- Return of an object with bairro, cep, cidade, complemento, endereço, uf.

        Example:
        consultaCEP('dev', '93315400')
            .then(address => console.log(address))
            .catch(err => console.log(err))

        Return:
        {
        bairro: 'Operário',
        cep: '93315400',
        cidade: 'Novo Hamburgo',
        complemento2: '',
        end: 'Rua Visconde de Ouro Preto',
        uf: 'RS'
        }



## Dependencies: 
"soap": "^0.31.0"
