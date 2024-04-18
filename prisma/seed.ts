import  {prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: 'ebd7d407-40a2-49ca-b762-ce16cad8e9ef',
            title: 'Quebrando cabeca mais',
            slug: 'Quebrando-cabeca-mais',
            details: 'Um evento para quebrar a cabeca',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})