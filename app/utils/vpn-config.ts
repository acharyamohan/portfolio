import { VPNConfiguration } from '../models/vpn-config.model';

export const getVPNConfig = (ip: string, port: number): VPNConfiguration => ({
  server: ip,
  port: port,
  mtu: 1500,
  cipher: 'AES-256-CBC',
  auth: 'SHA256',
  connectionTimeout: 30000,
  keepAliveInterval: 10,
  keepAliveTimeout: 60
});