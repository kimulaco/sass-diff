import { NextApiRequest, NextApiResponse } from 'next'
import { compileDartSass, compileNodeSass } from '../../../utils/sass'

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  const sassValue = request.body.sass

  try {
    response.status(200).json({
      statusCode: 200,
      sass: sassValue,
      dart: compileDartSass(sassValue),
      node: compileNodeSass(sassValue),
    })
  } catch (error) {
    console.error(error)
    response.status(500).json({
      statusCode: 500,
      sass: sassValue,
    })
  }
}

export default handler
