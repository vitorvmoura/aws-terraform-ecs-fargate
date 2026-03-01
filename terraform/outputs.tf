# outputs.tf

output "alb_dns_name" {
  value       = "http://${aws_lb.main.dns_name}"
  description = "URL pública para acessar o site"
}

output "ecs_cluster_name" {
  value = aws_ecs_cluster.main.name
}
