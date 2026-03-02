import React from 'react';
import { 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Facebook, 
  MessageCircle, 
  Wrench, 
  Rocket, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Star,
  Terminal, 
  Zap,
  ArrowRight
} from 'lucide-react';

import logoNavbar from './assets/logoCampe.svg';

const App = () => {
  const whatsappNumber = "9811130996";
  const facebookUrl = "https://www.facebook.com/share/1G91oYgfYa/?mibextid=wwXIfr";

  const services = [
    {
      title: "Desarrollo de Software",
      desc: "Transformamos ideas en realidad: Landing pages veloces (React/Vite), APIs robustas con Flask e integración de IA (Gemini).",
      icon: <Code2 className="w-10 h-10 text-white" />,
      bg: "bg-blue-600"
    },
    {
      title: "Soporte Técnico Pro",
      desc: "Diagnóstico preciso, reparación de hardware y mantenimiento preventivo. ¡Tu equipo queda como nuevo!",
      icon: <Wrench className="w-10 h-10 text-white" />,
      bg: "bg-indigo-600"
    },
    {
      title: "PC Gaming & Workstations",
      desc: "Diseño y armado de computadoras de alto rendimiento para renderizado o gaming extremo.",
      icon: <Cpu className="w-10 h-10 text-white" />,
      bg: "bg-violet-600"
    },
    {
      title: "Redes y Ciberseguridad",
      desc: "Configuración segura de redes, instalación de sistemas operativos y protección de datos.",
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
      bg: "bg-slate-800"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-500 selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer">
            <img src={logoNavbar} alt="El Campechanito Logo" className="h-10 w-auto object-contain" />
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <a href="#servicios" className="hover:text-blue-600 transition">Servicios</a>
            <a href="#garantia" className="hover:text-blue-600 transition">Garantía</a>
            <a href={`https://wa.me/52${whatsappNumber}`} className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-900/20 hover:shadow-blue-600/30 transform hover:-translate-y-0.5">
              <MessageCircle size={16} /> 
              <span>Cotizar Ahora</span>
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION DE IMPACTO (FONDO OSCURO) --- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden bg-slate-900">
        
        {/* Decoración de fondo (Efecto Glow) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[100px] opacity-20"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* LADO IZQUIERDO: TEXTO (Color Blanco para contraste) */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold tracking-widest uppercase text-blue-400 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
              Ingeniería y Tecnología en Campeche
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Tu tecnología, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                en manos expertas.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Combinamos la ingeniería de software con el soporte técnico avanzado. Desde crear tu web hasta reparar tu hardware.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href={`https://wa.me/52${whatsappNumber}`} className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition transform hover:-translate-y-1 shadow-lg shadow-blue-500/30">
                <MessageCircle size={20} /> Enviar Mensaje
              </a>
              <a href={facebookUrl} target="_blank" className="flex items-center justify-center gap-3 bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 transition transform hover:-translate-y-1">
                <Facebook size={20} /> Ver Trabajos
              </a>
            </div>

            <div className="pt-8 border-t border-slate-800 flex justify-center lg:justify-start gap-8 text-sm font-semibold text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-400" size={18} /> Garantía Técnica
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-400" size={18} /> Soporte Local
              </div>
            </div>
          </div>

          {/* LADO DERECHO: VISUAL (Ahora visible siempre y mejorado) */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none mt-10 lg:mt-0">
            {/* Imagen Principal */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 transform rotate-1 hover:rotate-0 transition duration-500 group">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
                alt="Tecnología y Hardware" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              
              {/* Etiqueta dentro de la imagen */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Laboratorio de Ingeniería</p>
                <p className="text-sm text-slate-300">Reparación y Desarrollo</p>
              </div>
            </div>

            {/* ELEMENTO FLOTANTE 1: TARJETA DE CÓDIGO */}
            <div className="absolute -bottom-6 -right-4 lg:-left-10 bg-slate-800/90 backdrop-blur-md text-slate-200 p-5 rounded-2xl shadow-xl border border-slate-600 w-72 animate-bounce-slow">
              <div className="flex items-center gap-2 mb-3 border-b border-slate-600 pb-2">
                <Terminal size={14} className="text-green-400" />
                <span className="text-xs font-mono text-slate-400">main.py</span>
              </div>
              <div className="font-mono text-xs space-y-1.5">
                <p><span className="text-purple-400">def</span> <span className="text-blue-400">solucion_total</span>():</p>
                <p className="pl-4 text-slate-400"># Reparación + Código</p>
                <p className="pl-4"><span className="text-yellow-300">return</span> <span className="text-green-400">"Cliente Feliz"</span></p>
              </div>
            </div>

            {/* ELEMENTO FLOTANTE 2: TARJETA DE HARDWARE */}
            <div className="absolute -top-6 -right-2 lg:-right-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4 animate-pulse">
              <div className="bg-indigo-600 p-3 rounded-xl text-white">
                <Zap size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Rendimiento</p>
                <p className="text-lg font-bold text-slate-900">100% Rápido</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Soluciones Integrales</h2>
            <p className="text-lg text-slate-600">Ya sea código complejo o hardware delicado, aplicamos estándares de ingeniería.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="group p-8 rounded-[2rem] border border-slate-200 bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GARANTÍA --- */}
      <section id="garantia" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium">
            <Star size={14} fill="currentColor" /> Calidad Garantizada
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            ¿Tu equipo está lento o necesitas presencia web?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            No pierdas tiempo con soluciones a medias. En <span className="text-white font-bold">El Campechanito Software</span> tienes respaldo profesional.
          </p>
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h4 className="font-bold text-lg">Rapidez</h4>
              <p className="text-sm text-slate-400 mt-1">Entregas en tiempo y forma</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h4 className="font-bold text-lg">Local</h4>
              <p className="text-sm text-slate-400 mt-1">Orgullosamente Campechano</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
              <ShieldCheck className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h4 className="font-bold text-lg">Garantía</h4>
              <p className="text-sm text-slate-400 mt-1">Soporte post-servicio</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contacto" className="bg-white border-t border-slate-200 pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
               <img src={logoNavbar} alt="Logo" className="h-8 w-auto opacity-80" /> 
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Ingeniería en Tecnología de Software y Soporte Técnico Especializado.
            </p>
          </div>

          <div className="flex gap-4">
            <a href={facebookUrl} className="p-3 bg-slate-50 rounded-full text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition">
              <Facebook size={20} />
            </a>
            <a href={`https://wa.me/52${whatsappNumber}`} className="p-3 bg-slate-50 rounded-full text-slate-600 hover:bg-green-50 hover:text-green-600 transition">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-100 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Jose Armando Ramirez Sanchez. San Francisco de Campeche, México.
        </div>
      </footer>
    </div>
  );
};

export default App;