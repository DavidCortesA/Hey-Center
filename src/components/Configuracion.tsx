import React from 'react';
import BodyContent from './common/BodyContent';

const Configuracion = () => {
  return (
    <main className="w-full h-screen p-5 flex flex-row">
      <BodyContent>
        <div className="p-6 w-full space-y-8">
          {/* Título de Configuración */}
          <h2 className="text-2xl font-bold text-gray-800">Configuración</h2>

          {/* Sección de perfil */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Perfil</h3>
            <p className="text-gray-600">Administra la información de tu perfil, incluyendo nombre, correo electrónico y foto de perfil.</p>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 font-medium">Nombre</label>
              <input type="text" placeholder="Juan Pérez" className="border border-gray-300 rounded p-2" />
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <label className="text-gray-700 font-medium">Correo Electrónico</label>
              <input type="email" placeholder="juanperez@example.com" className="border border-gray-300 rounded p-2" />
            </div>
          </div>

          {/* Sección de notificaciones */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Notificaciones</h3>
            <p className="text-gray-600">Configura tus preferencias de notificación para recibir alertas sobre nuevos mensajes, actividades, y más.</p>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="emailNotifications" className="h-4 w-4 text-blue-600" />
              <label htmlFor="emailNotifications" className="text-gray-700">Recibir notificaciones por correo electrónico</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="pushNotifications" className="h-4 w-4 text-blue-600" />
              <label htmlFor="pushNotifications" className="text-gray-700">Recibir notificaciones push</label>
            </div>
          </div>

          {/* Sección de seguridad */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Seguridad</h3>
            <p className="text-gray-600">Ajusta las opciones de seguridad de tu cuenta, incluyendo la actualización de tu contraseña.</p>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 font-medium">Contraseña Actual</label>
              <input type="password" placeholder="********" className="border border-gray-300 rounded p-2" />
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <label className="text-gray-700 font-medium">Nueva Contraseña</label>
              <input type="password" placeholder="********" className="border border-gray-300 rounded p-2" />
            </div>
          </div>
        </div>
      </BodyContent>
    </main>
  );
};

export default Configuracion;
