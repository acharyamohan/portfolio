export interface VPNConfiguration {
  server: string;
  port: number;
  mtu: number;
  cipher: string;
  auth: string;
  connectionTimeout: number;
  keepAliveInterval: number;
  keepAliveTimeout: number;
}