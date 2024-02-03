// middlewares/captureDeviceInfoMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import useragent from 'useragent';

const captureDeviceInfo = (req: Request, _res: Response, next: NextFunction) => {
  const agent = useragent.parse(req.headers['user-agent']);
  const deviceType = agent.device.toString(); // Simplificación del tipo de dispositivo
  const ip = req.ip; // Captura la dirección IP

  // Adjunta la información al objeto req
  req.deviceInfo = { deviceType, ip };

  next();
};

export default captureDeviceInfo;
