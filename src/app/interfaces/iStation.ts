export interface IStation {
  name: string,
  location: Array<number>,
  units: Units
}

enum Units {
  Metric = 0,
  Imperial = 1
}
 

