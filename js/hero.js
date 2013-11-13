function Hero()
{
    this.level=1;
    this.setStats();
    this.mp=this.mpMax;
    this.damageLow = 20;
    this.damageHeight = 34;
    this.gold=800;
    this.exp=0;
    this.saveState();
    this.inventory = Inventory();
}

Hero.
