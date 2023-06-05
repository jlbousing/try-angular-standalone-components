import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersService } from 'src/app/services/players.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { Player } from 'src/app/commons/interfaces/IPlayers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  _playerService = inject(PlayersService);
  _router = inject(Router);
  players$!: Observable<Player[]>;
  seacher = new FormControl("");

  ngOnInit(): void {

    this.players$ = this._playerService.getPlayer();
    
    this.seacher.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe((search) => {

      console.log("probando search ",search);

      if(search) {
        this.players$ = this._playerService.getPlayer(search);
      }else {
        this.players$ = this._playerService.getPlayer();
      }
    });
  }

  editPlayer(player: Player) {
    this._router.navigateByUrl("users/edit")
  }

  deletePlayer(player: Player) {
    if(confirm(`seguro de borrar a ${player.name} ?`)) {

    }
  }

}
