// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Header } from './collections/Header'
import { Footer } from './collections/Footer'
import { Hero } from './collections/Hero'
import { Bring } from './collections/Bring'
import { Features } from './collections/Features'
import { Press } from './collections/Press'
import { HowItWorks } from './collections/HowItWorks'
import { About } from './collections/About'
import { Reviews } from './collections/Reviews'
import { Contact } from './collections/Contact'
import { ContactSubmissions } from './collections/ContactSubmissions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [Header, Footer, Hero, Bring, Features, Press, HowItWorks, About, Contact],
  collections: [Users, Media, Reviews, ContactSubmissions],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
