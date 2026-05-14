import { useState } from "react";

export default function ChapinTechTicketSystem() {
  const [showModal, setShowModal] = useState(false);
  const tickets = [
    {
      id: "CT-1024",
      client: "Carlos M.",
      issue: "Instalación de red empresarial",
      priority: "Alta",
      status: "En Proceso",
      technician: "Anna",
      date: "2026-05-12",
    },
    {
      id: "CT-1025",
      client: "María G.",
      issue: "Soporte remoto Windows",
      priority: "Media",
      status: "Pendiente",
      technician: "Luis",
      date: "2026-05-13",
    },
    {
      id: "CT-1026",
      client: "Empresa Nova",
      issue: "Configuración de cámaras IP",
      priority: "Urgente",
      status: "Finalizado",
      technician: "Sofía",
      date: "2026-05-14",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pendiente":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-400/30";
      case "En Proceso":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-400/30";
      case "Finalizado":
        return "bg-green-500/20 text-green-300 border-green-400/30";
      default:
        return "bg-white/10 text-white border-white/20";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Urgente":
        return "text-red-400";
      case "Alta":
        return "text-orange-400";
      case "Media":
        return "text-yellow-300";
      default:
        return "text-cyan-300";
    }
  };

  const generarTicket = (e) => {
    e.preventDefault();

    const codigo = `CT-${Math.floor(1000 + Math.random() * 9000)}`;

    alert(`Ticket creado exitosamente. Código: ${codigo}`);

    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 overflow-hidden relative">
      {/* BRILLO DE FONDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,230,255,0.12),transparent_45%)]" />

      {/* ENCABEZADO */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black tracking-wide bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sistema de Tickets ChapinTech
          </h1>
          <p className="text-white/60 mt-2">
            Plataforma futurista para gestión y seguimiento de soporte técnico.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 rounded-full border border-cyan-400/40 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all shadow-[0_0_25px_rgba(34,211,238,0.2)]"
        >
          + Crear Ticket
        </button>
      </div>

      {/* ESTADÍSTICAS */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
          <p className="text-white/60 text-sm">Tickets Totales</p>
          <h2 className="text-4xl font-bold mt-2">128</h2>
        </div>

        <div className="rounded-3xl border border-yellow-400/20 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(250,204,21,0.08)]">
          <p className="text-white/60 text-sm">Pendientes</p>
          <h2 className="text-4xl font-bold mt-2 text-yellow-300">34</h2>
        </div>

        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
          <p className="text-white/60 text-sm">En Proceso</p>
          <h2 className="text-4xl font-bold mt-2 text-cyan-300">51</h2>
        </div>

        <div className="rounded-3xl border border-green-400/20 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(74,222,128,0.08)]">
          <p className="text-white/60 text-sm">Finalizados</p>
          <h2 className="text-4xl font-bold mt-2 text-green-300">43</h2>
        </div>
      </div>

      {/* TABLA DE TICKETS */}
      <div className="relative z-10 max-w-5xl mx-auto rounded-[32px] border border-cyan-400/15 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.08)] overflow-hidden">
        <div className="p-8 border-b border-white/10 bg-white/[0.03]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-cyan-300 text-sm uppercase tracking-[0.2em] mb-2">
                Seguimiento Inteligente
              </p>
              <h2 className="text-3xl font-black text-white">
                Rastrea el estado de tu ticket
              </h2>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Ingresa tu código de ticket"
                className="w-full md:w-[320px] px-5 py-4 rounded-2xl bg-[#07111f] border border-cyan-400/20 outline-none text-white placeholder:text-white/30 focus:border-cyan-300 transition-all"
              />

              <button className="px-6 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-[1.03] transition-all shadow-[0_0_25px_rgba(34,211,238,0.35)] whitespace-nowrap">
                Buscar
              </button>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="rounded-3xl border border-white/10 bg-[#07111f]/70 p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
              <div>
                <p className="text-white/40 text-sm mb-2">Código de Ticket</p>
                <h3 className="text-4xl font-black text-cyan-300">CT-1024</h3>
              </div>

              <div>
                <p className="text-white/40 text-sm mb-2">Cliente</p>
                <h3 className="text-2xl font-bold text-white">Carlos M.</h3>
              </div>

              <div>
                <p className="text-white/40 text-sm mb-2">Estado Actual</p>

                <span className="inline-flex items-center whitespace-nowrap px-5 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 font-semibold text-sm">
                  En Proceso
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-5 left-0 w-full h-[2px] bg-white/10" />
              <div className="absolute top-5 left-0 w-[68%] h-[2px] bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />

              <div className="grid grid-cols-4 gap-4 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)] border-4 border-[#07111f]" />
                  <p className="mt-4 font-semibold text-cyan-300">Recibido</p>
                  <span className="text-white/40 text-sm mt-1">9:30 AM</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)] border-4 border-[#07111f]" />
                  <p className="mt-4 font-semibold text-cyan-300">Diagnóstico</p>
                  <span className="text-white/40 text-sm mt-1">11:15 AM</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_24px_rgba(34,211,238,1)] border-4 border-[#07111f]" />
                  <p className="mt-4 font-semibold text-cyan-300">En Reparación</p>
                  <span className="text-white/40 text-sm mt-1">Activo</span>
                </div>

                <div className="flex flex-col items-center text-center opacity-40">
                  <div className="w-10 h-10 rounded-full bg-white/20 border-4 border-[#07111f]" />
                  <p className="mt-4 font-semibold text-white">Finalizado</p>
                  <span className="text-white/40 text-sm mt-1">Pendiente</span>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
                <p className="text-white/40 text-sm mb-2">Técnico Asignado</p>
                <h4 className="text-xl font-bold text-white">Anna</h4>
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
                <p className="text-white/40 text-sm mb-2">Servicio</p>
                <h4 className="text-xl font-bold text-white">
                  Instalación de Red
                </h4>
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
                <p className="text-white/40 text-sm mb-2">Prioridad</p>
                <h4 className="text-xl font-bold text-orange-300">Alta</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PIE DE PÁGINA */}
      <div className="relative z-10 mt-10 text-center text-white/40 text-sm">
        © 2026 ChapinTech • Sistema Inteligente de Gestión Técnica
      </div>
          {/* MODAL CREAR TICKET */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-6">
          <div className="w-full max-w-2xl rounded-[32px] border border-cyan-400/20 bg-[#07111f] p-8 shadow-[0_0_60px_rgba(34,211,238,0.18)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,230,255,0.12),transparent_55%)]" />

            <div className="relative z-10 flex items-center justify-between mb-8">
              <div>
                <p className="text-cyan-300 uppercase tracking-[0.2em] text-sm mb-2">
                  Nuevo Ticket
                </p>

                <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Crear Solicitud
                </h2>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={generarTicket} className="relative z-10 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Nombre Completo
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Ingresa tu nombre"
                    className="w-full px-5 py-4 rounded-2xl bg-[#020817] border border-cyan-400/15 outline-none text-white placeholder:text-white/30 focus:border-cyan-300 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">
                    Correo Electrónico
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="correo@ejemplo.com"
                    className="w-full px-5 py-4 rounded-2xl bg-[#020817] border border-cyan-400/15 outline-none text-white placeholder:text-white/30 focus:border-cyan-300 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Número Telefónico
                </label>

                <input
                  type="tel"
                  required
                  placeholder="+(502) 1234-5678"
                  className="w-full px-5 py-4 rounded-2xl bg-[#020817] border border-cyan-400/15 outline-none text-white placeholder:text-white/30 focus:border-cyan-300 transition-all"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Tipo de Servicio
                </label>

                <select className="w-full px-5 py-4 rounded-2xl bg-[#020817] border border-cyan-400/15 outline-none text-white focus:border-cyan-300 transition-all">
                  <option>Soporte Técnico</option>
                  <option>Instalación de Redes</option>
                  <option>Cámaras de Seguridad</option>
                  <option>Mantenimiento</option>
                  <option>Soporte Remoto</option>
                </select>
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Describe el Problema
                </label>

                <textarea
                  rows="5"
                  required
                  placeholder="Describe detalladamente el problema técnico..."
                  className="w-full px-5 py-4 rounded-2xl bg-[#020817] border border-cyan-400/15 outline-none text-white placeholder:text-white/30 resize-none focus:border-cyan-300 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-black text-lg hover:scale-[1.01] transition-all shadow-[0_0_35px_rgba(34,211,238,0.35)]"
              >
                Crear Ticket
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
