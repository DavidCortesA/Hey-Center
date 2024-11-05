/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import BodyContent from '@/components/common/BodyContent';
import { CameraIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';

const Profile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="w-full lg:h-screen h-fit flex flex-col lg:flex-row p-0 lg:p-5">
      <BodyContent>
        <div className="p-8 pb-20 lg:pb-8 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Perfil del Usuario</h2>
          
          <div className="flex items-center mb-6">
            <div className="relative w-24 h-24">
              {profileImage ? (
                <img src={profileImage} alt="Foto de perfil" className="w-24 h-24 rounded-full object-cover" />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                  <CameraIcon className="w-10 h-10 text-gray-500" />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            <div className="ml-4">
              <Button
                color="primary"
                size="sm"
                onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement)?.click()}
              >
                Cambiar Foto
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Nombre Completo</h3>
              <p className="text-gray-500">Juan Pérez</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Correo Electrónico</h3>
              <p className="text-gray-500">juan.perez@example.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Rol</h3>
              <p className="text-gray-500">Administrador</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Número de Teléfono</h3>
              <p className="text-gray-500">+52 123 456 7890</p>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-lg font-semibold text-gray-600">Dirección</h3>
              <p className="text-gray-500">123 Calle Principal, Ciudad de México, CDMX</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Fecha de Registro</h3>
              <p className="text-gray-500">15 de enero de 2023</p>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-lg font-semibold text-gray-600">Bio</h3>
              <p className="text-gray-500">
                Administrador con experiencia en atención al cliente y resolución de problemas en tiempo real. Apasionado
                por mejorar la experiencia del usuario.
              </p>
            </div>
          </div>
        </div>
      </BodyContent>
    </main>
  );
};

export default Profile;
