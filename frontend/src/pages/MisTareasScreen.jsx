import React, { useState } from 'react';
import { Play, CheckCircle2, FileEdit, AlertOctagon, Clock } from 'lucide-react';

export const MisTareasScreen = ({ onNavigate }) => {
  // Estado local para transformar la UI al tocar "Iniciar Trabajo"
  const [estadoTarea, setEstadoTarea] = useState('pendiente'); // 'pendiente' | 'en_proceso'

  return (
    <div className="space-y-4 max-w-md mx-auto text-left">
      
      <div className="bg-blue-50 border border-blue-200 p-3 rounded-2xl flex items-center gap-2.5 text-xs text-blue-700">
        <Clock className="shrink-0" size={18} />
        <span>Modo Operador de Campo: Interfaz de alto contraste y botones de pulgar.</span>
      </div>

      {/* TARJETA DE TAREA ASIGNADA */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-lg space-y-5">
        <div className="flex justify-between items-start border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-black text-[#007AFF] bg-blue-50 px-2.5 py-1 rounded-md">
              OT-125
            </span>
            <h3 className="text-xl font-black text-[#0A2540] mt-1">Bomba P-101</h3>
          </div>

          <div className="bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full text-xs font-black uppercase flex items-center gap-1">
            <AlertOctagon size={14} />
            Prioridad: Alta
          </div>
        </div>

        <div className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
          <p><strong className="text-slate-900">Ubicación:</strong> Área de Separación (Nave 3)</p>
          <p><strong className="text-slate-900">Síntoma:</strong> Pérdida de fluido en sello mecánico lateral.</p>
        </div>

        {/* INTERACTIVIDAD DE CAMPO */}
        {estadoTarea === 'pendiente' ? (
          <button
            onClick={() => setEstadoTarea('en_proceso')}
            className="w-full bg-[#0A2540] hover:bg-[#007AFF] text-white font-black py-4 rounded-2xl shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-[0.98]"
          >
            <Play size={16} className="fill-white" />
            <span>Iniciar Trabajo Ahora</span>
          </button>
        ) : (
          <div className="space-y-3 pt-2">
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl flex items-center justify-between text-xs font-black text-amber-800">
              <span className="uppercase tracking-wider">Estado: En Proceso</span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => onNavigate('registrar-intervencion')}
                className="bg-[#007AFF] hover:bg-blue-600 text-white font-black py-3 px-2 rounded-xl text-[11px] uppercase flex flex-col items-center gap-1 transition-all shadow-md active:scale-[0.98]"
              >
                <FileEdit size={18} />
                <span className="text-center leading-tight">Registrar<br/>Intervención</span>
              </button>

              <button
                onClick={() => setEstadoTarea('pendiente')} // Sirve para resetear la vista y volver a capturar
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3 px-2 rounded-xl text-[11px] uppercase flex flex-col items-center gap-1 transition-all shadow-md active:scale-[0.98]"
              >
                <CheckCircle2 size={18} />
                <span className="text-center leading-tight">Finalizar<br/>Tarea</span>
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};