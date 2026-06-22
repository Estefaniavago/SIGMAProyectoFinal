import React, { useState } from 'react';
import { api } from '../services/api';
import { ArrowLeft, Save, Database } from 'lucide-react';

export const CrearActivoScreen = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    codigo: '', equipo: '', area: '', estado: 'Operativo',
    fabricante: '', modelo: '', serie: '', instalacion: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.crearActivo(formData);
      alert("Activo creado correctamente");
      onNavigate('activos'); // Volvemos al listado
    } catch (err) {
      console.error("Error al crear:", err);
      alert("Error al guardar en la base de datos");
    }
  };

  return (
    <div className="space-y-6 text-left pb-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-[#0A2540]">Nuevo Activo</h2>
        <button onClick={() => onNavigate('activos')} className="text-xs font-bold text-slate-500 flex items-center gap-1 hover:text-[#007AFF]">
          <ArrowLeft size={14} /> Volver
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Código (ej: P-101)" className="p-3 border rounded-xl text-sm" onChange={e => setFormData({...formData, codigo: e.target.value})} required />
          <input placeholder="Equipo (ej: Bomba principal)" className="p-3 border rounded-xl text-sm" onChange={e => setFormData({...formData, equipo: e.target.value})} required />
          <input placeholder="Área" className="p-3 border rounded-xl text-sm" onChange={e => setFormData({...formData, area: e.target.value})} />
          <select className="p-3 border rounded-xl text-sm" onChange={e => setFormData({...formData, estado: e.target.value})}>
            <option>Operativo</option>
            <option>En Mantenimiento</option>
            <option>Fuera de Servicio</option>
          </select>
          <input placeholder="Fabricante" className="p-3 border rounded-xl text-sm" onChange={e => setFormData({...formData, fabricante: e.target.value})} />
          <input placeholder="Modelo" className="p-3 border rounded-xl text-sm" onChange={e => setFormData({...formData, modelo: e.target.value})} />
          <input placeholder="Serie" className="p-3 border rounded-xl text-sm" onChange={e => setFormData({...formData, serie: e.target.value})} />
          <input placeholder="Fecha Instalación (YYYY-MM-DD)" className="p-3 border rounded-xl text-sm" onChange={e => setFormData({...formData, instalacion: e.target.value})} />
        </div>
        
        <button type="submit" className="w-full bg-[#007AFF] hover:bg-blue-600 text-white p-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
          <Save size={16} /> Guardar Activo en MySQL
        </button>
      </form>
    </div>
  );
};