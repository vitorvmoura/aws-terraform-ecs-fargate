# 🚀 AWS Cloud Infrastructure: Automação com Infraestrutura como Código (IaC)

![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Arch Linux](https://img.shields.io/badge/Arch%20Linux-1793D1?style=for-the-badge&logo=arch-linux&logoColor=white)

---

## 🏗️ Resumo do Projeto

Este projeto consiste na implementação de uma arquitetura de alta disponibilidade na AWS, utilizando **Terraform** para o provisionamento de recursos e **Docker** para a containerização da aplicação.

O foco principal foi criar um ambiente **produtivo, resiliente e totalmente automatizado**, seguindo boas práticas de Cloud Engineering e DevOps.

---

## 🛠️ Arquitetura e Componentes

A infraestrutura foi projetada com os seguintes pilares técnicos:

- **AWS ECS Fargate**  
  Orquestração de containers em modelo *serverless*, eliminando a gestão de instâncias EC2 e focando totalmente na disponibilidade da aplicação.

- **Application Load Balancer (ALB)**  
  Gerenciamento inteligente de tráfego com execução automática de *health checks*.

- **VPC Customizada**  
  Arquitetura de rede isolada com:
  - Subnets públicas e privadas  
  - Distribuição em múltiplas Zonas de Disponibilidade (**sa-east-1a** e **sa-east-1b**)  
  - Alta tolerância a falhas  

- **NAT Gateway**  
  Implementação de saída segura para internet para tarefas ECS localizadas em subnets privadas.

- **CloudWatch**  
  Configuração de monitoramento de performance e retenção de logs.

  💡 Informações Detalhadas

Para entender como a aplicação foi construída, as dependências utilizadas e como rodar o ambiente de desenvolvimento, acesse o README da pasta Aplicação.

---

## 🚀 Como Executar

### 1️⃣ Build e Tag da Imagem Docker

```bash
docker build -t meu-projeto-web .
```

### 2️⃣ Provisionamento com Terraform

```bash
terraform init
terraform apply -var="container_image=[URL_DO_SEU_ECR]"
```

---

## 📈 Diferenciais Técnicos

- **Idempotência**  
  Infraestrutura 100% replicável através de código versionado.

- **Segurança em Camadas**  
  Containers isolados em rede privada, acessíveis externamente apenas via Load Balancer.

- **Escalabilidade**  
  Configuração de Auto Scaling preparada para responder a picos de CPU e Memória.

- **Infraestrutura como Código (IaC)**  
  Toda a arquitetura descrita declarativamente com Terraform.

---

# 🗺️ Diagrama da Arquitetura

```mermaid
graph TD
    subgraph Internet
        User((Usuário))
    end

    subgraph "AWS Cloud (sa-east-1)"
        
        CW[CloudWatch Logs]

        subgraph "VPC (10.0.0.0/16)"
            IGW[Internet Gateway]

            subgraph "Subnets Públicas (Multi-AZ)"
                ALB[Application Load Balancer]
                NAT[NAT Gateway]
            end

            subgraph "Subnets Privadas (Multi-AZ)"
                direction LR
                ECS_A[ECS Task - AZ sa-east-1a]
                ECS_B[ECS Task - AZ sa-east-1b]
            end
        end
    end

    User -->|HTTP 80| IGW
    IGW --> ALB
    ALB --> ECS_A
    ALB --> ECS_B

    ECS_A -->|Outbound| NAT
    ECS_B -->|Outbound| NAT

    ECS_A -.-> CW
    ECS_B -.-> CW
 ```
---

## 📩 Contato

Se desejar discutir este projeto ou oportunidades na área de **Cloud & DevOps**, conecte-se comigo:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vitor-v-moura)

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:vasconcelosvitor236@gmail.com)

---

### 👨‍💻 Desenvolvido por Vitor Vasconcelos Moura 🚀
