// equipo.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipoService } from '../../services/equipo.service';
import { UsuarioService } from '../../services/usuario.service';
import { Equipo } from '../../model/equipo.model';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  equipoForm!: FormGroup;
  equipos: Equipo[] = [];
  usuarios: Usuario[] = [];
  editandoId: string | null | undefined = null;

  constructor(
    private fb: FormBuilder,
    private equipoService: EquipoService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.equipoForm = this.fb.group({
      usernameUsuario: ['', Validators.required],
      username: ['', Validators.required]
    });

    this.cargarEquipos();
    this.cargarUsuarios();
  }

  cargarEquipos(): void {
    this.equipoService.getEquipos().subscribe(equipos => this.equipos = equipos);
  }

  cargarUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }

  guardar(): void {
    if (this.equipoForm.invalid) return;

    const equipo = this.equipoForm.value;

    if (this.editandoId) {
      this.equipoService.actualizarEquipo(this.editandoId, equipo).subscribe(() => {
        this.cancelar();
        this.cargarEquipos();
      });
    } else {
      this.equipoService.crearEquipo(equipo).subscribe(() => {
        this.equipoForm.reset();
        this.cargarEquipos();
      });
    }
  }

  editar(equipo: Equipo): void {
    this.equipoForm.setValue({
      usernameUsuario: equipo.usernameUsuario,
      username: equipo.username
    });
    this.editandoId = equipo['_id']; // según lo que devuelva el backend
  }

  eliminar(id: string): void {
      if (!id) return;
    this.equipoService.eliminarEquipo(id).subscribe(() => this.cargarEquipos());
  }

  cancelar(): void {
    this.equipoForm.reset();
    this.editandoId = null;
  }
}
