import React, { useState } from 'react';
import { ArrowLeft, Camera, Wrench, Clock } from 'lucide-react';

export const RegistrarIntervencionScreen = ({ onBack }) => {
  const [repuestos, setRepuestos] = useState(['Juntas de teflón 3/4 (x2)']);
  const [nuevoRepuesto, setNuevoRepuesto] = useState('');

  const agregarRepuesto = () => {
    if (nuevoRepuesto) {
      setRepuestos([...repuestos, nuevoRepuesto]);
      setNuevoRepuesto('');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-left pb-6">
      
      <div className="p-4 bg-[#0A2540] text-white flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-white">
          <ArrowLeft size={16} /> Volver
        </button>
        <span className="text-xs font-black uppercase tracking-wider">OT-125 • Cierre</span>
        <div className="w-12"></div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); onBack(); }} className="p-5 space-y-4 text-xs">
        
        <div>
          <label className="block font-black text-slate-700 uppercase mb-1">Trabajo Realizado *</label>
          <textarea 
            rows={3} 
            defaultValue="Se desmontó la carcasa frontal y se reemplazó el juego de sellos mecánicos."
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-[#007AFF] text-slate-800" 
          />
        </div>

        <div>
          <label className="block font-black text-slate-700 uppercase mb-1">Observaciones Operativas</label>
          <textarea 
            rows={2} 
            placeholder="Indique si queda alguna anomalía de pintura, ruidos o seguimiento..."
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-[#007AFF]" 
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-black text-slate-700 uppercase mb-1">Horas Hombre *</label>
            <div className="relative flex items-center">
              <Clock size={16} className="absolute left-3 text-slate-400" />
              <input type="number" step="0.5" defaultValue="2.5" className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-black text-sm text-[#0A2540]" />
            </div>
          </div>

          <div>
            <label className="block font-black text-slate-700 uppercase mb-1">Estado Final *</label>
            <select className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-800">
              <option>Completada</option>
              <option>Requiere seguimiento</option>
              <option>Pendiente de repuesto</option>
            </select>
          </div>
        </div>

        {/* GESTIÓN DE REPUESTOS EN VIVO */}
        <div className="space-y-2">
          <label className="block font-black text-slate-700 uppercase">Repuestos Utilizados</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Ej: Rodamiento SKF 6203..." 
              value={nuevoRepuesto}
              onChange={(e) => setNuevoRepuesto(e.target.value)}
              className="flex-1 p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-[#007AFF]"
            />
            <button type="button" onClick={agregarRepuesto} className="px-3 bg-slate-200 hover:bg-slate-300 font-bold rounded-xl text-slate-700 transition-colors">
              + Agregar
            </button>
          </div>

          <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 min-h-[48px] space-y-1">
            {repuestos.map((r, i) => (
              <div key={i} className="flex items-center justify-between bg-white px-3 py-1.5 rounded-lg border border-slate-100 text-xs font-bold text-slate-700 shadow-2xs">
                <span className="flex items-center gap-2"><Wrench size={14} className="text-[#007AFF]" /> {r}</span>
                <button type="button" onClick={() => setRepuestos(repuestos.filter((_, idx) => idx !== i))} className="text-red-400 hover:text-red-600 font-black text-sm">×</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <button type="button" className="w-full py-3.5 bg-slate-50 hover:bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl font-bold text-slate-600 flex items-center justify-center gap-2 transition-colors">
            <Camera size={18} className="text-[#007AFF]" />
            <span>Adjuntar Foto de Evidencia</span>
          </button>
        </div>

        <button type="submit" className="w-full mt-4 bg-[#0A2540] hover:bg-[#007AFF] text-white font-black py-4 rounded-2xl transition-all uppercase tracking-wider text-xs shadow-lg shadow-slate-900/15">
          Guardar Intervención
        </button>

      </form>
    </div>
  );
};