import createRepository from '@/communications/axios'

export default async function ({ app, redirect }, inject) {
  // general error handler
  let errorHandler = async (error, url, axios, headers) => {
    if (error) {
      //Here we can catch if 'X-Access-Token is invalid or expired' and then handeled it

      // Here we can catch any error message and handel it e.g redirct user to home page Or logout the user

      return false
    }
    return error
  }

  const defualtHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
  const repositoryWithAxios = createRepository(app.context.$axios)
  inject(
    'API',
    repositoryWithAxios(process.env.gateway, defualtHeaders, errorHandler, true)
  )
}
