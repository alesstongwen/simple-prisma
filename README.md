note:
adding devDependencies using
`npm install -D nodemon` and `npm install -D ts-node` command for nodemon and ts-node

Following the steps in:
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-mysql

model Post {
id Int @id @default(autoincrement())
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
content String
}
@id refer to the pk in the database

`npx prisma studio` is the built-in command in prisma that allow us to see the actual sqlite db
