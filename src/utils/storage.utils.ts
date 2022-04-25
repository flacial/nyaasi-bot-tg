import fs from 'fs';

const fsAsync = fs.promises;

class Storage {
  #folder: string

  #fileName: string

  #ext: string

  #path: string

  #storage: Promise<{ [key: string]: any }>

  constructor(folder: string, fileName: string, ext: string) {
    this.#folder = folder
    this.#fileName = fileName
    this.#ext = ext
    this.#path = `${folder}/${fileName}.${ext}`
    this.#storage = this.#initStorage()
  }

  #initStorage = async () => {
    if (!fs.existsSync(this.#folder)) await fsAsync.mkdir(this.#folder)

    if (!fs.existsSync(this.#path)) await fsAsync.writeFile(this.#path, '{}')

    const storeData = await fsAsync.readFile(this.#path, 'utf-8')

    return JSON.parse(storeData || '{}')
  }

  updateStorage = async () => {
    const s = await this.#storage
    await fsAsync.writeFile(this.#path, JSON.stringify(s)).catch(err => {
      throw new Error(err)
    })
    return this
  }

  add = async (key: string | number, value: any) => {
    const s = await this.#storage
    s[key] = value
    this.updateStorage()
    return this
  }

  modify = async (key: string | number, fn: (arg0: any) => any) => {
    const s = await this.#storage
    s[key] = fn(s[key])
    this.updateStorage()
    return this
  }

  getValue = async (key: string | number) => {
    const s = await this.#storage
    return s[key]
  }

  has = async (key: PropertyKey) => {
    const s = await this.#storage
    return s.hasOwnProperty(key)
  }

  some = async (fn: (value: [string, any], index: number, array: [string, any][]) => unknown) => {
    const s = await this.#storage

    return Object.entries(s).some(fn)
  }

  toArrayByKeys = async () => {
    const s = await this.#storage

    return Object.keys(s)
  }

  toArrayByValues = async () => {
    const s = await this.#storage

    return Object.values(s)
  }
}

export default Storage;