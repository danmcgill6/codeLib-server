const db = require('./server/db')
const { Folder, CodeBlock, RootFolder } = require('./server/db/models')


const codeBlocks =  [{
    title: 'Redux store in codeUp',
    code: '    <div className="nav-wrapper">',
    folderId: null,
    rootFolderId:1
},
{
    title: 'server boiler plate',
    code: '<div className="nav-wrapper">',
    folderId: 1,
    rootFolderId: null
},
{
    title: 'list component',
    code: '<div className="nav-wrapper">',
    folderId: 1,
    rootFolderId: null
},
{
    title: 'profile page example',
    code: '<div className="nav-wrapper">',
    folderId: 2,
    rootFolderId: null
},
{
    title: 'api routes for senior enrichment',
    code: '<div className="nav-wrapper">',
    folderId: null,
    rootFolderId:2
},
{
    title: 'user api routes',
    code: 'this.handleKeyCommand = (command) => this._handleKeyCommand(command)',
    folderId: 3,
    rootFolderId: null
},
{
    title: 'code editor component codeLib',
    code: 'this.handleKeyCommand = (command) => this._handleKeyCommand(command)',
    folderId: 3,
    rootFolderId: null

},]



const rootFolders = [{
    name: 'Javascript'
},
{
    name: 'Java'
},
{
    name: 'c++'
}]


const folders = [

    {
        name: 'Redux',
        folderId: null,
        rootFolderId:1
    },
    {
        name: 'Components',
        folderId: null,
        rootFolderId:1
    },
    {
        name: 'API',
        folderId: null,
        rootFolderId:2
    },
    {
        name: 'Boiler Plate',
        folderId: null,
        rootFolderId:3
    }
]

async function seed() {
    await db.sync({ force: true })
    console.log('db synced!')
    // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
    // executed until that promise resolves!

    // const users = await Promise.all([
    //     User.create({ email: 'cody@email.com', password: '123', phoneNumber: '310-555-5555', firstName: 'Cody', lastName: 'Bowers' }),
    //     User.create({ email: 'bruce@email.com', password: '123', phoneNumber: '310-555-5555', firstName: 'bruce', lastName: 'lee' }),
    //     User.create({ email: 'dan@email.com', password: '123', phoneNumber: '310-555-5555', firstName: 'Danny', lastName: 'Mcgill' }),
    //     User.create({ email: 'micah@email.com', password: '123', phoneNumber: '310-555-5555', firstName: 'Micah', lastName: 'Friendland' }),
    //     User.create({ email: 'alex@email.com', password: '123', phoneNumber: '310-555-5555', firstName: 'Alex', lastName: 'V' }),
    //     User.create({ email: 'bobby@email.com', password: '123', phoneNumber: '310-555-5555', firstName: 'Bobby', lastName: 'Bowers' }),
    //     // User.create({ email: 'murphy@email.com', password: '123' }),
    // ])
    // Wowzers! We can even `await` on the right-hand side of the assignment operator
    // and store the result that the promise resolves to in a variable! This is nice!

  

    const allRootFolders = await Promise.all(
        rootFolders.map(folder => RootFolder.create(folder)),
    )

    const allFolders = await Promise.all(
        folders.map(folder => Folder.create(folder)),
    )

    const allCodeBlocks = await Promise.all(
        codeBlocks.map(block => CodeBlock.create(block)),
    )

    console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
    .catch(err => {
        console.error(err.message)
        console.error(err.stack)
        process.exitCode = 1
    })
    .then(() => {
        console.log('closing db connection')
        db.close()
        console.log('db connection closed')
    })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')