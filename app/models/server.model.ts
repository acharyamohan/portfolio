export interface VPNServer {
  id: string;
  name: string;
  location: string;
  ip: string;
  port: number;
  protocol: 'udp' | 'tcp';
}