# Workie

## Installation
Install with npm:
```
npm install workie
```
Install with yarn:
```
yarn add workie
```
    
## Usage

#### Format CPF and CNPJ:
- Input type number.
- Call formatCpfCnpj(number).
- *Cannot contain special characters, only numbers.

#### Format phone:
- Input type number.
- Call formatPhone(number).
- *Cannot contain special characters, only numbers.

#### Format CEP:
- Input type number.
- Call formatCep(number).
- *Cannot contain special characters, only numbers.


#### Perform a search using `consultaCep`

Cep search module use the `cep-promise` wich is multiprovider, the lib will resolve the Promise with the provider wich reply **faster**.

``` js
import {consultaCep} from 'workie'

consultaCep('93315400')
  .then(console.log)

  // {
  //   "cep":  "93315400",
  //   "state":  "RS",
  //   "city":  "Novo Hamburgo",
  //   "street":  "Rua Visconde de Ouro Preto",
  //   "neighborhood":  "Operário",
  // }
```

#### Case CEP wasn't found

In this case will return a `"service_error"`, the lib will only reject the Promise when all the providers reply negative.

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

#### Case CEP have an invalid format

In this case will return a `"validation_error"`, the lib will immediately reject the Promise, without call a provider.

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

## Dependencies: 
"cep-promise": "^3.0.9"

## License
MIT &copy; [Guilherme Maier Knewitz](https://github.com/knewitzgui)
