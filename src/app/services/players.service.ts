import { Injectable } from '@angular/core';
import { 
    Firestore, 
    collection, 
    addDoc, 
    query, 
    where,
    collectionData, 
    doc,
    getDocs,
    updateDoc
} from '@angular/fire/firestore';
import { Player } from '../commons/interfaces/IPlayers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(
    private firestore: Firestore
  ) { }

  getPlayer(filter = '') {

    const playerRef = collection(this.firestore,"players");

    let q = query(playerRef);

    if(filter) {
      q = query(playerRef, where("name","==",filter))
    }

    return collectionData(q) as unknown as Observable<Player[]>;
  }

  addPlayer(player: Player) {

    const playerRef = collection(this.firestore,"players");
    return addDoc(playerRef,player);

  }

  async updatePlayer(player: Player) {

    const playerRef = collection(this.firestore,"players");
    let q = query(playerRef,where("id","==",player.id));

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach(async (document) => {

      const docRef = doc(this.firestore, "players", document.id);
      await updateDoc(docRef, {...player})
    });
  }
}
