export default ($axios) => (url, defualtHeaders, errorHandler) => ({
  /**
   * @summary A generic HTTP GET request
   * @param {String} targetFunction the API path
   * @param {Object} extraHeaders object contains the extra headers to be included in the request
   * @returns {Promise<any>} returns a promise contains response or error
   */
  async get(targetFunction, extraHeaders) {
    return await $axios
      .$get(`${url}/${targetFunction}`, {
        headers: this.getHeaders(extraHeaders),
      })
      .then((response) => {
        return response
      })
      .catch(async (error) => {
        const tResult = await this.handleError(error)

        if (tResult) {
          return this.get(targetFunction, extraHeaders)
        } else {
          throw error
        }
      })
  },

  /**
   * @summary Handles the HTTP error by calling the callback error handler
   * @param {object} error the error occurred during execution of an HTTP request
   * @param {object} headers object contains the extra headers to be included in the request
   * @returns {Promise<Boolean>} returns a bolean wrapped in a promise wich endicate if the error has been handled or not
   */
  async handleError(error, headers) {
    try {
      let result = await errorHandler(error, url, $axios, headers)
      return result
    } catch (error) {
      return false
    }
  },

  /**
   * @summary A method that combines the defualt header with the extra headers
   * @param {Object} extraHeaders object contains the extra headers to be included in the request
   * @returns {Object} contains the extraHeaders and the defualt headers combined
   */
  getHeaders(extraHeaders) {
    let headers = defualtHeaders
    if (extraHeaders) {
      headers = { ...defualtHeaders, ...extraHeaders }
    }
    // here will set Token if exists

    return headers
  },
})
