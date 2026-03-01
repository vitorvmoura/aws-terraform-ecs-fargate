# security.tf

resource "aws_security_group" "alb" {
  name        = "alb-sg"
  description = "Controle de acesso para o Load Balancer"
  vpc_id      = module.vpc.vpc_id

  
  ingress {
    protocol    = "tcp"
    from_port   = 80
    to_port     = 80
    cidr_blocks = ["0.0.0.0/0"]
  }

  
  egress {
    protocol    = "-1" 
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "alb-sg"
  }
}


resource "aws_security_group" "ecs_tasks" {
  name        = "ecs-tasks-sg"
  description = "Acesso restrito apenas vindo do ALB"
  vpc_id      = module.vpc.vpc_id

  
  
  ingress {
    protocol        = "tcp"
    from_port       = 80
    to_port         = 80
    security_groups = [aws_security_group.alb.id] 
  }

 
  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "ecs-tasks-sg"
  }
}
