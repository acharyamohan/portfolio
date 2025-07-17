import { Observable } from '@nativescript/core';
import { VPNService } from '../services/vpn.service';
import { vpnServers } from '../data/servers';
import { VPNServer } from '../models/server.model';

export class MainViewModel extends Observable {
  private vpnService: VPNService;
  private _servers: VPNServer[];
  
  constructor() {
    super();
    this.vpnService = new VPNService();
    this._servers = vpnServers;
  }

  get servers(): VPNServer[] {
    return this._servers;
  }

  get isConnected(): boolean {
    return this.vpnService.isConnected;
  }

  get currentServer(): VPNServer | null {
    return this.vpnService.currentServer;
  }

  async connectToServer(server: VPNServer) {
    const success = await this.vpnService.connect(server);
    if (success) {
      this.notifyPropertyChange('isConnected', true);
      this.notifyPropertyChange('currentServer', server);
    }
  }

  async disconnect() {
    const success = await this.vpnService.disconnect();
    if (success) {
      this.notifyPropertyChange('isConnected', false);
      this.notifyPropertyChange('currentServer', null);
    }
  }
}