import {Component, EventEmitter, Input, output, Output} from '@angular/core';
import {User} from "./user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /*  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => 'assets/users/' + this.avatar());
  selectedUser = output<string>();*/

  @Input({required: true}) user!: User;

  @Output() selectedUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onUserClick() {
    this.selectedUser.emit(this.user.id);
  }
}
