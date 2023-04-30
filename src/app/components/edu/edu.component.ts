import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { usuario } from 'src/app/model/Usuario.model';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { SEducacionService } from 'src/app/services/educacion.service';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css'],
})
export class EduComponent {
  constructor(private renderer: Renderer2, private sEdu:SEducacionService, private usuarioService:UsuarioService) {}

  idUsuario = new usuario ('', '', '', '', [], [])

  @ViewChild('nuevaexp') nuevaexp!: ElementRef;
  @ViewChild('urlfoto') urlfoto!: ElementRef;
  @ViewChild('empre') empre!: ElementRef;
  @ViewChild('desc') desc!: ElementRef;

  ngOnInit() {
    this.usuarioService.getUser().subscribe((data) => {
      this.idUsuario = data;
    });
    this.usuarioService.getUsers().subscribe((usuarios: any) => {
      console.log(usuarios);
    });
  }

  showNueva() {
    this.renderer.setStyle(this.nuevaexp.nativeElement, 'display', 'flex');
  }

  cancelNueva() {
    this.renderer.setStyle(this.nuevaexp.nativeElement, 'display', 'none');
  }

  crearExp(){
    const instituto = this.empre.nativeElement.value;
    const descripcion = this.desc.nativeElement.value;
    const url_foto = this.urlfoto.nativeElement.value;
    const edu = new Educacion(instituto, descripcion, url_foto, this.idUsuario);
    this.sEdu.save(edu).subscribe(() => {
      console.log('Experiencia creada correctamente');
    });
  }

  reloadPage() {
    location.reload();
  }
}
