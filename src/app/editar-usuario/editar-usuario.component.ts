import { ToastrService } from 'ngx-toastr';
import { LmisUsuarios } from './../modelos/lmis-usuarios';
import { UsuariosService } from './../servicios/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  editarUsuario: LmisUsuarios = {
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    rol: "",
  }

  constructor(private traer: ActivatedRoute, private dato: UsuariosService, private router: Router, private toastr: ToastrService) {
    const id = this.traer.snapshot.params.id
    console.log(id);
    
    this.dato.obtenerUnUsuario(id).subscribe(recoger=>{
      this.editarUsuario = recoger.body[0]
      console.log(this.editarUsuario)
    })
   }

  ngOnInit(): void {
    const id = this.traer.snapshot.params.id;
    console.log(id) 
  }

  editar(id:any, hibrido: LmisUsuarios){
    this.dato.editarUsuario(id,hibrido).subscribe(data => {
      this.toastr.success('Usuario actualizado', 'Usuario actualizado');
    })
  }


}
