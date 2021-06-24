import { StatusCard } from '../Enums';
import { Card } from './Card.model';

export class Plan {
  id: number;
  cards: Card[];
  private _purchasedList: Card[];
  public get purchasedList(): Card[] {
    let tempList: Card[] = [];
    this.cards.forEach((card) => {
      if (
        card.state === StatusCard.Purchased ||
        card.state === StatusCard.ToBuy
      ) {
        tempList.push(card);
      }
    });
    return tempList;
  }

  private _purchasedNumber: number;
  public get GetPurchasedNumber(): number {
    return (this._purchasedNumber = this._purchasedList.length);
  }
  private _totalNumber: number;
  public get GetTotalNumber(): number {
    return (this._totalNumber = this.cards.length);
  }

  constructor() {
    this.id = 1;
    this.cards = [];
    this._purchasedList = [];
    this._purchasedNumber = 0;
    this._totalNumber = 0;
  }
}
