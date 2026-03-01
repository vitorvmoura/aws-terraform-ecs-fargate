# variables.tf

variable "aws_region" {
  description = "Região da AWS onde os recursos serão criados"
  default     = "sa-east-1"
}

variable "projeto_nome" {
  description = "Nome base para os recursos do projeto"
  default     = "figma-site-producao"
}

variable "container_image" {
  description = "URI da imagem no ECR"
  type        = string
}
