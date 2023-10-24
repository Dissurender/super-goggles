

[![](https://img.shields.io/github/issues/dissurender/super-goggles)](https://github.com/Dissurender/super-goggles/issues) [![](https://img.shields.io/github/license/dissurender/super-goggles)](https://github.com/Dissurender/super-goggles/blob/main/LICENSE) ![](https://img.shields.io/github/languages/top/dissurender/super-goggles)

# super-goggles

## Description

super-goggles is an API 

- I built this project to
- super-goggles.
- Using this code structure, 
- Learned concepts: Prisma ORM, Postgres interactions.

## Table of Contents

- [super-goggles](#super-goggles)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [DONE](#done)
  - [TODO](#todo)
  - [Usage](#usage)
  - [How to Contribute](#how-to-contribute)

## Features

DONE
- 
- 
- Focus on cyclic complexity to break apart large logic structures.

TODO
- 
- Implement root level logging.
- 

## Usage

You should provide a `.env`ironment with a connection string under the variable `DATABASE_URL`.

Initialize Prisma with `npx prisma init --datasource-provider postgresql`
Migrate Models to Database with `npx prisma migrate dev --name init`

To run locally use `npm run dev` in your terminal.

If you change the Models remember to run `npx prisma dev` to update your DB tables.


## How to Contribute

Please veiw the issues tab or open a discussion for non-listed issues.
Adhere to the [Contributor Covenant](https://www.contributor-covenant.org/)
