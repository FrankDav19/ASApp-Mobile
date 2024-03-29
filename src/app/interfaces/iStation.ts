export interface IStation {
  _id : string
  name: string,
  location: {
    type: string,
    coordinates: Array<number>,
    name?: string
  },
  units: Units,
  readings?: [{
    humidity?: number,
    temp?: number,
    hic?: number,
    pm1?: number,
    pm25?: number,
    pm10?: number,
    wDirection?: string,
    wSpeed?: number,
    rainMM?: number
}]
}

enum Units {
  Metric = 0,
  Imperial = 1
}


