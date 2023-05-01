import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Skill } from 'src/app/model/Skill';
import { usuario } from 'src/app/model/Usuario.model';
import { SkillsService } from 'src/app/services/Skills.service';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent {
  constructor(private renderer: Renderer2, private sSkills:SkillsService, private usuarioService:UsuarioService, private tokenService:TokenService){
  }
  idUsuario = new usuario ('', '', '', '', [], [], [])

  @ViewChild('nuevaexp') nuevaexp!: ElementRef;
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


  crearSkill(){
    const name = this.empre.nativeElement.value;
    const amount = this.desc.nativeElement.value;
    const skill = new Skill(name, amount, this.idUsuario);
    this.sSkills.save(skill).subscribe(() => {
      console.log('Skill creada correctamente');
    });
  }

  reloadPage() {
    location.reload();
  }
  
  isUserAdmin(): boolean {
    const roles = this.tokenService.getAuthorities();
    return roles.includes('ROLE_ADMIN');
  }
}
