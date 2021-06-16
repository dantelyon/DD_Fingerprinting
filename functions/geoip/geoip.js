const fetch = require('node-fetch')

const handler = async function (event, context) {
  let clientIP = event.headers['x-nf-client-connection-ip']
  let accessKey = process.env.ACCESS_KEY
  let API_ENDPOINT = `https://api.ipdata.co/${clientIP}?api-key=${accessKey}`
  try {
    const response = await fetch(API_ENDPOINT)
    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify({
        ip: event.headers['x-nf-client-connection-ip'],
        city: data.city,
        region: data.region,
        isp: data.asn.name,
      }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }