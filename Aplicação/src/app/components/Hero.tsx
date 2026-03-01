import { motion } from 'motion/react';
import { TypingAnimation } from './TypingAnimation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="text-purple-600" size={24} />
              <span className="text-purple-600 font-semibold">Inteligência Artificial Empresarial</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transforme seu negócio com{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                <TypingAnimation
                  texts={[
                    'IA Avançada',
                    'Automação',
                    'Inovação',
                    'Eficiência',
                  ]}
                  typingSpeed={150}
                  deletingSpeed={100}
                  pauseDuration={2000}
                />
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Solucionamos problemas complexos de empresas utilizando inteligência artificial de ponta. 
              Aumente sua produtividade, reduza custos e tome decisões mais inteligentes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-2 hover:shadow-xl transition-shadow duration-200 group">
                <span>Agende uma Demo</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors duration-200">
                Saiba Mais
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Empresas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">95%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600">2x</div>
                <div className="text-gray-600">ROI Médio</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIwNDg1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tecnologia de IA"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="text-sm text-gray-600">Processamento</div>
                <div className="text-2xl font-bold text-blue-600">98.5%</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-8 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="text-sm text-gray-600">Economia</div>
                <div className="text-2xl font-bold text-purple-600">45%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
