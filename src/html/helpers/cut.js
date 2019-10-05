module.exports = (object) => {
    let dots = (object.hash.dots == 'true') ? '...' : '';
    return object.fn()
      .trim()
      .split(" ")
      .splice(0, object.hash.count)
      .join(" ")
      + dots
}