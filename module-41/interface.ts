interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClub?: string[]
}

const messy: Player = {
    name: 'L Messy',
    club: 'xyz',
    salary: 12000,
    wife: 'abc'
}

const hazzz: Player = {
    name: 'A.Hazzz',
    club: 'bdx',
    salary: 2000
}