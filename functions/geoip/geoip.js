// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require('node-fetch')

const handler = async function (event, context) {
  if (!context.clientContext && !context.clientContext.identity) {
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({
        msg: 'No identity instance detected. Did you enable it?',
      }),
    }
  }
  //let clientIP = event.headers['x-nf-client-connection-ip']
  let accessKey = 'e8c7958b07048ad6c3e1d14538021f9c2bbf205eb8cbf35e633e7a75'
  //let API_ENDPOINT = `https://api.ipdata.co/${clientIP}?api-key=${accessKey}`
  let API_ENDPOINT = `https://api.ipdata.co?api-key=${accessKey}`
  const { identity, user } = context.clientContext
  try {
    const response = await fetch(API_ENDPOINT)
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ 
          msg: data.city,
          identity, user, 
        ip: event.headers['x-nf-client-connection-ip'],
      city: data.city,
      region: data.region,
      isp: data.asn.name }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }