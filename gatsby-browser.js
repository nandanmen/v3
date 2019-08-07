require('./src/style/main.css')

exports.onClientEntry = async () => {
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`👍 IntersectionObserver is polyfilled`)
  }
}
