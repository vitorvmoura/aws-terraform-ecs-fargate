import { motion } from 'motion/react';
import { Brain, Zap, TrendingUp, Shield, BarChart, MessageSquare } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Modelos preditivos personalizados que aprendem com seus dados e melhoram continuamente.',
      color: 'blue',
    },
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Automatize processos repetitivos e libere sua equipe para tarefas estratégicas.',
      color: 'purple',
    },
    {
      icon: TrendingUp,
      title: 'Análise Preditiva',
      description: 'Antecipe tendências e tome decisões baseadas em dados com IA avançada.',
      color: 'pink',
    },
    {
      icon: Shield,
      title: 'Segurança IA',
      description: 'Proteção inteligente contra ameaças com sistemas de detecção em tempo real.',
      color: 'indigo',
    },
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Dashboards inteligentes que transformam dados complexos em insights acionáveis.',
      color: 'cyan',
    },
    {
      icon: MessageSquare,
      title: 'Chatbots IA',
      description: 'Atendimento ao cliente 24/7 com processamento de linguagem natural.',
      color: 'violet',
    },
  ];

  const colorMap: { [key: string]: string } = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600',
    indigo: 'from-indigo-500 to-indigo-600',
    cyan: 'from-cyan-500 to-cyan-600',
    violet: 'from-violet-500 to-violet-600',
  };

  return (
    <section id="solucoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossas Soluções em IA
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologias de ponta para resolver os desafios mais complexos do seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorMap[solution.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
