import React, { useState } from 'react';
import { Search, Filter, Plus, Eye, Edit, CheckCircle, Calendar as CalendarIcon, List } from 'lucide-react';

const MOCK_ORDENES = [
  { ot: "OT-125", equipo: "Bomba P-101", resp: "Juan Pérez", tipo: "Preventivo", fecha: "22/06/2026", estado: "Pendiente", color: "bg-amber-50 text-amber-700 border-amber-200" },
  { ot: "OT-126", equipo: "Compresor C-05", resp: "María López", tipo: "Correctivo", fecha: "21/06/2026", estado: "En proceso", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { ot: "OT-127", equipo: "Tablero T-02", resp: "Carlos Sánchez", tipo: "Inspección", fecha: "20/06/2026", estado: "Finalizada", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
];

export const OrdenesScreen = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState('list'); // 'list' o 'calendar'

  return (
    <div className="space-y-6">
      {/* HEADER DE GESTIÓN CON TOGGLE DE PLANIFICACIÓN */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1">
            <button 
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${viewMode === 'list' ? 'bg-white text-[#0A2540] shadow-sm' : 'text-slate-400'}`}
            >
              <List size={16} />
              <span>Listado Activo</span>
            </button>
            <button 
              onClick={() => setViewMode('calendar')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${viewMode === 'calendar' ? 'bg-white text-[#0A2540] shadow-sm' : 'text-slate-400'}`}
            >
              <CalendarIcon size={16} />
              <span>Planificación Preventiva</span>
            </button>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100">
            <Filter size={14} />
            <span>Filtros Avanzados</span>
          </button>
        </div>

        <button 
          onClick={() => onNavigate('crear-orden')}
          className="flex items-center justify-center gap-2 bg-[#0A2540] hover:bg-[#007AFF] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all w-full md:w-auto"
        >
          <Plus size={16} />
          <span>Generar Nueva OT</span>
        </button>
      </div>

      {/* VISTA 1: TABLA TRADICIONAL */}
      {viewMode === 'list' && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Órdenes de Trabajo en Curso</span>
            <span className="text-xs font-bold text-[#007AFF]">3 activas</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] font-extrabold px-6">
                <tr>
                  <th className="py-3 px-6">Nº OT</th>
                  <th className="py-3 px-6">Equipo</th>
                  <th className="py-3 px-6">Tipo</th>
                  <th className="py-3 px-6">Responsable</th>
                  <th className="py-3 px-6">Prog.</th>
                  <th className="py-3 px-6">Estado</th>
                  <th className="py-3 px-6 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 font-medium text-xs">
                {MOCK_ORDENES.map((row) => (
                  <tr key={row.ot} className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-6 font-black text-[#0A2540]">{row.ot}</td>
                    <td className="py-3.5 px-6 font-bold text-slate-800">{row.equipo}</td>
                    <td className="py-3.5 px-6"><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold text-[10px]">{row.tipo}</span></td>
                    <td className="py-3.5 px-6 text-slate-500">{row.resp}</td>
                    <td className="py-3.5 px-6 font-semibold text-slate-400">{row.fecha}</td>
                    <td className="py-3.5 px-6">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase border ${row.color}`}>
                        {row.estado}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-right space-x-1">
                      <button onClick={() => onNavigate('tareas')} title="Ejecutar" className="p-1.5 bg-blue-50 text-[#007AFF] hover:bg-blue-100 rounded-lg font-bold text-[11px] inline-flex items-center gap-1">
                        <Eye size={14} /> Ver
                      </button>
                      <button title="Cerrar" className="p-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg font-bold text-[11px] inline-flex items-center gap-1">
                        <CheckCircle size={14} /> Fin
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VISTA 2: EL MOCK DE PLANIFICACIÓN PREVENTIVA (Para justificar el Word) */}
      {viewMode === 'calendar' && (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-4">
          <div className="inline-flex p-4 bg-blue-50 text-[#007AFF] rounded-2xl">
            <CalendarIcon size={36} />
          </div>
          <div className="max-w-md mx-auto">
            <h3 className="text-sm font-bold text-[#0A2540]">Gantt de Mantenimiento Preventivo</h3>
            <p className="text-xs text-slate-400 mt-1">
              Visualización de intervenciones programadas por el motor de inteligencia de SIGMA para los próximos 30 días.
            </p>
          </div>
          {/* Gráfico falso de barras de Gantt */}
          <div className="space-y-2 pt-4 max-w-xl mx-auto text-left">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700">Bomba P-101 (Lubricación)</span>
              <div className="w-48 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-[#007AFF] w-3/4 h-full rounded-full"></div>
              </div>
              <span className="text-[10px] font-bold text-slate-400">Semana 2</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700">Compresor C-05 (Ajuste de correas)</span>
              <div className="w-48 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 w-1/3 h-full rounded-full"></div>
              </div>
              <span className="text-[10px] font-bold text-slate-400">Semana 4</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};