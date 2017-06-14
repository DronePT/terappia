class Responder {
  constructor () {
    this.success = true
  }

  _setData (data = null) {
    if (data) this.data = data
  }

  _setError (error = null, code = null) {
    this.success = false
    if (error) this.error = error
    if (code) this.code = code
  }

  _setMeta (meta) {
    if (meta) this.meta = meta
  }

  asError (error = null, code = null) {
    this._setError(error, code)
    return this
  }

  withData (data = null) {
    this._setData(data)
    return this
  }

  withMeta (meta = null) {
    this._setMeta(meta)
    return this
  }
}

export default Responder
