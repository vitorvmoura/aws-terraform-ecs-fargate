
resource "aws_lb" "main" {
  name               = "${var.projeto_nome}-alb"
  internal           = false
  load_balancer_type = "application"
  
  
  security_groups    = [aws_security_group.alb.id]
  
  
  subnets            = module.vpc.public_subnets

  tags = {
    Name = "meu-site-alb"
  }
}


resource "aws_alb_target_group" "app" {
  name        = "meu-site-tg"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = module.vpc.vpc_id 
  target_type = "ip"           

  
  health_check {
    healthy_threshold   = "3"
    interval            = "30"
    protocol            = "HTTP"
    matcher             = "200"
    timeout             = "3"
    path                = "/"
    unhealthy_threshold = "2"
  }
}


resource "aws_alb_listener" "http" {
  load_balancer_arn = aws_lb.main.arn # Onde o listener se instala
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"                    
    target_group_arn = aws_alb_target_group.app.arn
  }
}
