import { StatusCard } from '../Enums';
import { User } from './User.model';

export class Card {
  id: number;
  price: number;
  state: StatusCard;
  partnersList: User[];
  reinvestList: User[];

  private _purchasedNumber;
  public get GetPartnersNumber() {
    return (this._purchasedNumber = this.partnersList.length);
  }
  private _reinvestNumber;
  public get GetReinvestNumber() {
    return (this._reinvestNumber = this.reinvestList.length);
  }

  constructor() {
    this.id = 1;
    this.price = 0;
    this.state = StatusCard.Unavailable;
    this.partnersList = [];
    this.reinvestList = [];
    this._purchasedNumber = 0;
    this._reinvestNumber = 0;
  }
}
