interface Deck {
    name: string;
    cards: number;
}

export interface Player {
    id: string;
    name: string;
    decks: Deck[];
}