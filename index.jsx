// Agenda.jsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";

export default function Agenda() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    tipo: "presencial",
    motivo: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, fecha: selectedDate });
    alert("Cita agendada correctamente.");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center mb-4 text-[#164a68]">Agenda tu cita - Clínica Vesalius</h1>
      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6 grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1">Selecciona una fecha:</label>
            <Calendar selected={selectedDate} onSelect={setSelectedDate} />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} required />
            <Input name="correo" type="email" placeholder="Correo electrónico" value={formData.correo} onChange={handleChange} required />
            <select name="tipo" value={formData.tipo} onChange={handleChange} className="w-full p-2 border rounded-md">
              <option value="presencial">Consulta presencial</option>
              <option value="virtual">Consulta a distancia</option>
            </select>
            <Input name="motivo" placeholder="Motivo de la cita" value={formData.motivo} onChange={handleChange} required />
            <Button type="submit" className="w-full bg-[#164a68] text-white">Agendar cita</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
