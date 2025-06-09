import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import axios from 'axios';
import { Usuario } from './model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ConectionBackService {
  private baseUrl = 'http://localhost:3000';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async getUsuarios(): Promise<Usuario[]> {
    try {
      let token = '';
      if (this.isBrowser) {
        token = localStorage.getItem('token') || '';
      }

      const response = await axios.get<Usuario[]>(`${this.baseUrl}/usuarios`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      return [];
    }
  }

  async registerUser(usuario: Usuario): Promise<Usuario> {
    try {
      const response = await axios.post<Usuario>(`${this.baseUrl}/usuarios/register`, usuario);
      if (this.isBrowser && response.data && (response as any).data.token) {
        localStorage.setItem('token', (response as any).data.token);
      }
      return response.data;
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error;
    }
  }
  

  /*
  async delete(id: number): Promise<any> {
    try {
      const response = await axios.delete(`${this.baseUrl}/cuentaBancaria/delete/id/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar la cuenta bancaria', error);
      throw error;
    }
  }

  async put(id: number, nombre: string, saldo: number, activo: boolean): Promise<any> {
    try {
      const response = await axios.put(`${this.baseUrl}/cuentaBancaria/update/id/${id}/nombre/${nombre}/saldo/${saldo}/activo/${activo}`, {
        id,
        nombre,
        saldo,
        activo
      });
      return response.data;
    } catch (error) {
      console.error('Error al modificar la cuenta bancaria');
      throw error;
    }
  }
  */
}
