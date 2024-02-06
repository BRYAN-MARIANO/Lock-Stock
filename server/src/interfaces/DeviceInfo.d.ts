// DeviceInfo.d.ts

import "express";

// Actualizamos la interfaz para el objeto deviceInfo para incluir deviceModel e ip
export interface DeviceInfo {
  deviceType: string;
  deviceModel: string; // Añadido para reflejar el middleware
  browserName: string;
  browserVersion: string;
  osName: string;
  osVersion: string;
  ip: string; // Confirmamos la inclusión para la dirección IP
}

// Extendemos la interfaz Request de Express para añadir deviceInfo
declare module 'express-serve-static-core' {
  interface Request {
    deviceInfo?: DeviceInfo;
  }
}
