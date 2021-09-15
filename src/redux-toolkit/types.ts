export interface IContactState {
    id: number,
    name: string,
    number: string
}

export interface IContact {
    contacts: IContactState[]
}
