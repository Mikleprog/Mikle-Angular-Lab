export interface Card {
  id: number
  name: string
  damage: number
  catchOrRelease: string
  date: string
}

export  const CARDS: Card[] =[
  {id: 160, name: 'Feraligatr', damage: 70, catchOrRelease: "Status", date:"23.06.2020"},
  {id: 179, name: 'Mareep', damage: 25, catchOrRelease: "Status", date:"23.06.2020"},
  {id: 180, name: 'Flaaffy', damage: 20, catchOrRelease: "Status", date:"23.06.2020"},
  {id: 181, name: 'Ampharos', damage: 40, catchOrRelease: "Status", date:"23.06.2020"},
  {id: 182, name: 'Bellossom', damage: 35, catchOrRelease: "Status", date:"23.06.2020"},
  {id: 183, name: 'Marill', damage: 10, catchOrRelease: "Status", date:"23.06.2020"},
  {id: 184, name: 'Azumarill', damage: 20, catchOrRelease: "Status", date:"23.06.2020"},
  {id: 185, name: 'Sudowoodo', damage: 56, catchOrRelease: "Status", date:"23.06.2020"},
  {id: 186, name: 'Politoed', damage: 30, catchOrRelease: "Status", date:"23.06.2020"},
  {id: 187, name: 'Hoppip', damage: 22, catchOrRelease: "Status", date:"23.06.2020"}
];
