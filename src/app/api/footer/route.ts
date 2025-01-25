import configPromise from '@payload-config'
import { console } from 'inspector'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.findGlobal({
    slug: 'footer',
  })

  console.log(data)

  return Response.json(data)
}
