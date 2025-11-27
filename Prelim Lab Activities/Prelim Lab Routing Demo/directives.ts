import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;

  showNote(){
    this.isNoteVisible = true;
  }

  hideNote(){
    this.isNoteVisible = false;
  }

  toggleNote(){
    this.isParagraphVisible = !this.isParagraphVisible;
  }

  monthNameStatic: string = 'Mar';
  monthNameDynamic: string = 'Mar';

  cityList: string[] = ["Angeles", "San Fernando", "Mabalacat", "Tarlac", "Bataan"]

  studentList: any[] = [
    {stud_name: 'C Valencia', course: 'Web Development', isActive:false},
    {stud_name: 'A Curley', course: 'Cybersecurity', isActive:false},
    {stud_name: 'S Sarmiento', course: 'Network Administration', isActive:false},
    {stud_name: 'J Arita', course: 'Systems Development', isActive:false},
    {stud_name: 'C Dungca', course: 'Web Development', isActive:true}
  ]

}
