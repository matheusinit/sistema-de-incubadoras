export class Company {
  cnpj: string = ''

  // Razão social
  corporateName: string = ''

  // Nome fantasia
  tradeName: string = ''

  // Área de atuação
  businessArea: string = ''

  // Tempo de mercado (em meses)
  timeInMarket: number = 0

  // Capital social
  shareCapital: number = 0

  // Quantidade de empregados CLT
  employeesCLTQuantity: number = 0

  // Quantidade de empregados tercerizados
  outsorcedEmployeeQuantity: number = 0

  // Quantidade de estagiários
  internQuantity: number = 0

  // Quantidade de sócio
  partnerQuantity: number = 0

  // Sócios (um-pra-muitos)
  partners = ''

  // Contatos
  website: string = ''
  instagram: string = ''
  facebook: string = ''
  twitter: string = ''
  linkedin: string = ''
  whatsapp: string = ''
  email: string = ''
}
