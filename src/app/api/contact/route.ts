import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.findGlobal({
    slug: 'contact',
  })

  return Response.json(data)
}

export const POST = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const body = await request.json()

  const data = await payload.create({
    collection: 'contact-submissions',
    data: body,
  })

  return Response.json(data)
}
