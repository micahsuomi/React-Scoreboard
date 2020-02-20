import uuid from 'uuid/v4';


const users = [
    {
        id: uuid(),
        firstName: 'Michele',
        lastName: 'Zucca',
        score: 80,
        country: 'Italy'
    },

    {
        id: uuid(),
        firstName: 'Johanna',
        lastName: 'Lamu',
        score: 90,
        country: 'Finland'
    },

    {
        id: uuid(),
        firstName: 'Aurora',
        lastName: 'Zucca',
        score: 75,
        country: 'Finland'
    },

    {
        id: uuid(),
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        score: 95,
        country: 'Ethiopia'
    },
]

export default users;