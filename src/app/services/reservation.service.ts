import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/reservation/all`);
  }
  addReservation(reservation: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/reservation/addres`, reservation);
  }
  updateReservation(id: string, reservation: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/reservations//upres${id}`, reservation);
  }
  deleteReservation(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/reservations//delres${id}`);
  }




}
