export class Metrics {
  constructor() {
    this.likes = this.randomIntFromInterval(30000, 50000)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.favorites = this.randomIntFromInterval(30000, 50000)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.smiles = this.randomIntFromInterval(30000, 50000)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.targetViews = this.randomIntFromInterval(50, 95);
    this.targetFollowers = this.randomIntFromInterval(50, 95);
    this.targetIncome = this.randomIntFromInterval(50, 95);
  }
  likes: string;
  favorites: string;
  smiles: string;
  targetViews: number;
  targetFollowers: number;
  targetIncome: number;

  randomIntFromInterval(min: number, max: number): number {
    const result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
  }
}
