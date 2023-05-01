import { ThisReceiver } from '@angular/compiler';
import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';
import { Skill } from 'src/app/model/Skill';
import { SkillsService } from 'src/app/services/Skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css'],
})
export class BarsComponent {
  constructor(private renderer: Renderer2, private sSkills:SkillsService, private tokenService: TokenService) {}
  skills:Skill[] = [];
  colors:Array<String> = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light'];
  idSkill?:number;

  @ViewChild('modifi') modifi!: ElementRef;
  @ViewChild('edit') edit!: ElementRef;
  @ViewChild('reemplazable') reemplazable!: ElementRef;

  ngOnInit(): void{
    this.cargarSkills();
    }

  cargarSkills(): void{
      this.sSkills.lista().subscribe(data => {this.skills = data;})
    }

  showModifi(modifi: HTMLElement) {
    modifi.style.display = 'flex';
  }

  editAmount(id: HTMLElement, edit: HTMLInputElement) {
    let nuevoAmount = edit.value;
    let idSkill = this.idSkill = parseInt(id.innerText);
    this.sSkills
      .editarAmount(idSkill, nuevoAmount)
      .subscribe(() => {
        console.log('Amount actualizado correctamente');
      });
  }

  cerrarInput(modifi: HTMLElement) {
    modifi.style.display = 'none';
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  reloadPage() {
    location.reload();
  }

  isUserAdmin(): boolean {
    const roles = this.tokenService.getAuthorities();
    return roles.includes('ROLE_ADMIN');
  }

  deleteskill(id: HTMLElement) {
    const iddelete = parseInt(id.innerText);
    this.sSkills.delete(iddelete).subscribe(() => {
      console.log('Skill eliminada correctamente');
    });
  }
}
