export interface CompanyDTO {
  cnpj: string

  // Razão social
  corporateName: string

  // Nome fantasia
  tradeName: string

  // Área de atuação
  businessArea: string

  // Tempo de mercado (em meses)
  timeInMarket: number

  // Capital social
  shareCapital: number

  // Quantidade de empregados CLT
  employeesCLTQuantity: number

  // Quantidade de empregados tercerizados
  outsorcedEmployeeQuantity: number

  // Quantidade de estagiários
  internQuantity: number

  // Quantidade de sócio
  partnerQuantity: number

  // Contatos
  website: string

  instagram: string

  facebook: string

  twitter: string

  linkedin: string

  whatsapp: string

  email: string

  // Senha de acesso
  password: string
}
