module.exports = {
  PATH: __dirname + "/build",
  PROTOCOL: "HTTP",
  DOMAIN: "localhost",
  PORT: 8082,

  get URI() {
    return (
      this.PROTOCOL.toLowerCase() +
      "://" +
      this.DOMAIN +
      ":" +
      this.PORT
    ).toLowerCase();
  }
};
