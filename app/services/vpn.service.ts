import { Observable } from '@nativescript/core';
import { VPNServer } from '../models/server.model';
import { getVPNConfig } from '../utils/vpn-config';
import { VPN } from '@nativescript/vpn';

export class VPNService extends Observable {
  private _isConnected: boolean = false;
  private _currentServer: VPNServer | null = null;
  private _connectionStatus: string = '';
  private vpn: VPN;

  constructor() {
    super();
    this.vpn = new VPN();
    this.setupVPNListeners();
  }

  private setupVPNListeners() {
    this.vpn.on('connected', () => {
      this._isConnected = true;
      this.updateConnectionStatus('Connected');
      this.notifyPropertyChange('isConnected', true);
    });

    this.vpn.on('disconnected', () => {
      this._isConnected = false;
      this._currentServer = null;
      this.updateConnectionStatus('Disconnected');
      this.notifyPropertyChange('isConnected', false);
    });

    this.vpn.on('error', (error) => {
      console.error('VPN Error:', error);
      this.updateConnectionStatus('Error: ' + error.message);
    });
  }

  get isConnected(): boolean {
    return this._isConnected;
  }

  get currentServer(): VPNServer | null {
    return this._currentServer;
  }

  get connectionStatus(): string {
    return this._connectionStatus;
  }

  private updateConnectionStatus(status: string) {
    this._connectionStatus = status;
    this.notifyPropertyChange('connectionStatus', status);
  }

  async connect(server: VPNServer): Promise<boolean> {
    try {
      this.updateConnectionStatus('Connecting...');
      
      const vpnConfig = getVPNConfig(server.ip, server.port);
      
      await this.vpn.connect({
        ...vpnConfig,
        username: 'vpn_user', // Replace with actual credentials
        password: 'vpn_pass'  // Replace with actual credentials
      });
      
      this._currentServer = server;
      return true;
    } catch (error) {
      console.error('VPN connection failed:', error);
      this.updateConnectionStatus('Connection failed');
      return false;
    }
  }

  async disconnect(): Promise<boolean> {
    try {
      this.updateConnectionStatus('Disconnecting...');
      await this.vpn.disconnect();
      return true;
    } catch (error) {
      console.error('VPN disconnection failed:', error);
      this.updateConnectionStatus('Disconnection failed');
      return false;
    }
  }

  async checkStatus(): Promise<void> {
    try {
      const status = await this.vpn.getStatus();
      this.updateConnectionStatus(status);
    } catch (error) {
      console.error('Failed to check VPN status:', error);
    }
  }
}