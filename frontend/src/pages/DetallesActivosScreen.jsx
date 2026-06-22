import React, { useState } from 'react';
import { ArrowLeft, QrCode, FileText, History, Wrench, Camera, Download } from 'lucide-react';

const FICHA_MOCK = {
  codigo: "P-101",
  nombre: "Bomba Centrífuga B-01",
  area: "Separación - Pozo LLL-5",
  fabricante: "Flowserve Corp",
  modelo: "Centrífuga Industrial XS",
  serie: "SN-99482-X7",
  instalacion: "15 de Abr 2026",
  estado: "Operativo",
};

export const DetallesActivosScreen = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('historial');

  return (
    <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto text-left">
      
      {/* BOTÓN DE RETORNO */}
      <button 
        onClick={onBack} 
        className="flex items-center gap-2 text-[11px] font-black text-slate-500 hover:text-[#007AFF] transition-colors uppercase tracking-wider"
      >
        <ArrowLeft size={14} className="stroke-[3]" />
        <span>Volver al catálogo</span>
      </button>

      {/* CONTENEDOR DE IMAGEN / SCANNER (Calco de tu Figma móvil) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-4">
        <div className="w-full h-40 bg-slate-200 rounded-xl flex items-center justify-center text-slate-400 font-bold text-xs border border-slate-300 uppercase tracking-wider">
          [ Imagen Equipo ]
        </div>
        
        <button className="w-full flex items-center justify-center gap-2 bg-[#007AFF] hover:bg-blue-600 text-white font-black text-xs py-3 rounded-xl shadow-md shadow-blue-500/10 transition-all uppercase tracking-wider">
          <QrCode size={16} />
          <span>Escanear QR</span>
        </button>
      </div>

      {/* INFORMACIÓN DEL EQUIPO (Datos de Chapa) */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
          Información del Equipo
        </h3>
        
        <div className="space-y-2.5 text-xs">
          {[
            { label: "Tag ID", val: FICHA_MOCK.codigo, highlight: true },
            { label: "Modelo", val: FICHA_MOCK.modelo },
            { label: "Ubicación", val: FICHA_MOCK.area },
          ].map((item, i) => (
            <div key={i} className="border-b border-slate-50 pb-2 last:border-0 last:pb-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">{item.label}</span>
              <span className={`text-xs font-bold text-[#0A2540] mt-0.5 block ${item.highlight ? 'font-black text-[#007AFF]' : ''}`}>
                {item.val}
              </span>
            </div>
          ))}

          <div className="pt-1 flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Estado:</span>
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-black text-[10px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {FICHA_MOCK.estado}
            </div>
          </div>
        </div>
      </div>

      {/* SISTEMA DE PESTAÑAS (TABS) RESPONSIVE */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto scrollbar-none">
          {[
            { id: 'historial', icon: History, label: 'Historial' },
            { id: 'doc', icon: FileText, label: 'Documentos' },
            { id: 'ordenes', icon: Wrench, label: 'OTs' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 px-4 py-3.5 text-[11px] font-black border-b-2 whitespace-nowrap transition-all uppercase tracking-wider ${
                activeTab === tab.id
                  ? 'bg-white border-[#007AFF] text-[#007AFF]'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              <tab.icon size={14} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* CONTENIDO DE LAS PESTAÑAS */}
        <div className="p-4 bg-white min-h-[120px]">
          {activeTab === 'historial' && (
            <div className="space-y-2">
              {[
                { fecha: "15 de Abr 2026", trabajo: "Cambio de sellos mecánicos", tec: "J. Pérez" },
                { fecha: "10 de Ene 2026", trabajo: "Lubricación de rodamiento", tec: "M. López" }
              ].map((h, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-start text-xs gap-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold block">{h.fecha}</span>
                    <span className="font-bold text-[#0A2540]">{h.trabajo}</span>
                  </div>
                  <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded font-black uppercase shrink-0">
                    {h.tec}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'doc' && (
            <div className="space-y-2">
              {[
                { titulo: "Manual_Bomba_Industrial.pdf", peso: "4.8 MB" },
                { titulo: "Seguridad_LOTO_Planta.pdf", peso: "1.2 MB" }
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-blue-50/20 rounded-xl border border-blue-100 text-xs">
                  <div className="flex items-center gap-2.5 truncate">
                    <div className="p-1.5 bg-[#007AFF] text-white rounded-lg font-black text-[10px]">PDF</div>
                    <div className="truncate">
                      <h4 className="font-bold text-[#0A2540] truncate">{doc.titulo}</h4>
                      <span className="text-[9px] text-slate-400 font-bold">{doc.peso}</span>
                    </div>
                  </div>
                  <button className="p-1.5 bg-white text-[#007AFF] hover:bg-blue-50 rounded-lg shadow-sm border border-slate-100 transition-all shrink-0">
                    <Download size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'ordenes' && (
            <div className="text-center py-6 text-slate-400 text-xs font-bold">
              <Wrench className="mx-auto mb-1.5 opacity-40 text-slate-300" size={24} />
              No registra órdenes de trabajo pendientes.
            </div>
          )}
        </div>
      </div>

    </div>
  );
};