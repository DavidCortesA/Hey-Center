import React from 'react';
import BodyContent from '@/components/common/BodyContent';
import { Button, Switch } from '@nextui-org/react';

const Configuracion = () => {
  return (
    <main className="w-full lg:h-screen h-fit flex flex-col lg:flex-row p-0 lg:p-5">
      <BodyContent>
        <div className="p-8 pb-20 lg:pb-8 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Configuración</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-600">Cambiar Contraseña</h3>
              <Button color="primary" size="sm">Actualizar</Button>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-600">Notificaciones</h3>
              <Switch checked size="md" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-600">Privacidad de Cuenta</h3>
              <Switch size="md" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-600">Tema de la Aplicación</h3>
              <Button color="secondary" size="sm">Oscuro / Claro</Button>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Conexiones a Redes Sociales</h3>
              <p className="text-gray-500 mb-2">Conecta tus cuentas para recibir notificaciones en redes sociales.</p>
              <div className="flex space-x-4">
                <Button color="primary" size="sm">Conectar a Facebook</Button>
                <Button color="primary" size="sm">Conectar a Twitter</Button>
                <Button color="primary" size="sm">Conectar a LinkedIn</Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Idioma de la Aplicación</h3>
              <p className="text-gray-500">Español (Predeterminado)</p>
            </div>
          </div>
        </div>
      </BodyContent>
    </main>
  );
};

export default Configuracion;
