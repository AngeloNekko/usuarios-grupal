import { UsuariosService } from './../servicios/usuarios.service';
import { LmisUsuarios } from './../modelos/lmis-usuarios';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.scss']
})
export class AgregarUsuarioComponent implements OnInit {
  
  agregarUsuario: LmisUsuarios = {
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
  }

  constructor(private agregar: UsuariosService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  guardar(hibrido: LmisUsuarios) {
    this.agregar.agregarUsuario(hibrido).subscribe(data => {
      this.toastr.success('Usuario registrado', 'Usuario registrado');
    })
    console.log(hibrido)
    this.router.navigateByUrl('/users');
  } 
}

