import path from 'node:path'
import fs from 'node:fs'

const pckgPath = path.resolve(process.cwd(), 'package.json')
const text = fs.readFileSync(pckgPath, 'utf8')
const pckgJson = JSON.parse(text)
pckgJson['version.stamp'] = Date.now()
fs.writeFileSync(pckgPath, JSON.stringify(pckgJson, null, 2), 'utf8')
