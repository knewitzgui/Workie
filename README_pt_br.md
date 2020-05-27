# Workie

## Instalação
    npm install workie
    
## Utilização

#### Formatação de CPF e CNPJ:
- Input type number.
- chamada formatCpfCnpj(number).
- *Não conter caracteres especiais, apenas números.

#### Formatação de telefone:
- Input type number.
- chamada formatPhone(number).
- *Não conter caracteres especiais, apenas números.

#### Formatação de CEP:
- Input type number.
- chamada formatCep(number).
- *Não conter caracteres especiais, apenas números.


### Realizando uma consulta usando o `consultaCep`

O modulo de consultar cep utiliza por baixo dos panos o `cep-promise` que é multifornecedor, a biblioteca irá resolver a Promise com o fornecedor que **mais rápido** lhe responder.

``` js
import {consultaCep} from 'workie'

consultaCep('05010000')
  .then(console.log)

  // {
  //   "cep":  "05010000",
  //   "state":  "SP",
  //   "city":  "São Paulo",
  //   "street":  "Rua Caiubí",
  //   "neighborhood":  "Perdizes",
  // }
```

### Quando o CEP não é encontrado

Neste caso será retornado um `"service_error"` e por ser multifornecedor, a biblioteca irá rejeitar a Promise apenas quando tiver a resposta negativa de todos os fornecedores.

``` js
import {consultaCep} from 'workie'

consultaCep('99999999')
  .catch(console.log)

  // {
  //     name: 'CepPromiseError',
  //     message: 'Todos os serviços de CEP retornaram erro.',
  //     type: 'service_error',
  //     errors: [{
  //       message: 'CEP NAO ENCONTRADO',
  //       service: 'correios'
  //     }, {
  //       message: 'CEP não encontrado na base do ViaCEP.',
  //       service: 'viacep'
  //     }]
  // }

```

### Quando o CEP possui um formato inválido

Neste caso será retornado um `"validation_error"` e a biblioteca irá rejeitar imediatamente a Promise, sem chegar a consultar nenhum fornecedor.

``` js
import {consultaCep} from 'workie'

consultaCep('123456789123456789')
  .catch(console.log)

  // {
  //     name: 'CepPromiseError',
  //     message: 'CEP deve conter exatamente 8 caracteres.',
  //     type: 'validation_error',
  //     errors: [{
  //       message: 'CEP informado possui mais do que 8 caracteres.',
  //       service: 'cep_validation'
  //     }]
  // }
```

## Dependencias: 
"cep-promise": "^3.0.9"
