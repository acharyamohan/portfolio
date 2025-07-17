import { VPNServer } from '../models/server.model';

export const vpnServers: VPNServer[] = [
  {
    id: 'np1',
    name: 'Nepal Server 1',
    location: 'Kathmandu',
    ip: '103.41.111.55',
    port: 1194,
    protocol: 'udp'
  },
  {
    id: 'db1',
    name: 'Dubai Server 1',
    location: 'Dubai',
    ip: '185.93.245.12',
    port: 1194,
    protocol: 'udp'
  },
  {
    id: 'ln1',
    name: 'London Server 1',
    location: 'London',
    ip: '178.62.16.22',
    port: 1194,
    protocol: 'udp'
  }
];