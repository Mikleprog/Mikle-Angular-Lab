export interface Card {
  id: number
  name: string
  damage: number
  catchOrRelease: string
}

export  const cards: Card[] =[
 
 {id: 160, name: 'Feraligatr', damage: 70, catchOrRelease: "Status"},
 {id: 179, name: 'Mareep', damage: 25, catchOrRelease: "Status"},
 {id: 180, name: 'Flaaffy', damage: 20, catchOrRelease: "Status"},
 {id: 181, name: 'Ampharos', damage: 40, catchOrRelease: "Status"},
 {id: 182, name: 'Bellossom', damage: 35, catchOrRelease: "Status"},
 {id: 183, name: 'Marill', damage: 10, catchOrRelease: "Status"},
 {id: 184, name: 'Azumarill', damage: 20, catchOrRelease: "Status"},
 {id: 185, name: 'Sudowoodo', damage: 56, catchOrRelease: "Status"},
 {id: 186, name: 'Politoed', damage: 30, catchOrRelease: "Status"},
 {id: 187, name: 'Hoppip', damage: 22, catchOrRelease: "Status"}
];
