import parser from 'error-stack-parser'

let warned = false

const findComponent = (stacktrace, formatter) => {
  for(let frame of stacktrace.slice(2)) {
    if (frame.fileName.indexOf('/glamor/') === -1 && frame.fileName.indexOf('(native)')) {
      return formatter(frame.fileName, frame.functionName)
    }
  }
  return null
}

export const defaultFormatter = (fileName, functionName) => {
  const match = /([^/]*)(?:\/index.js)?\?$/.exec(fileName)
  return match ? match[1] : null
}

export default (formatter = defaultFormatter) => {
  if (formatter.selector) {
    // Misuse
    if (!warned) {
      console.warn('detect-component: This plugin exports factory that should be called before usage.')
      console.warn(`detect-component: plugins.add(detectComponent())`)
      warned = true
    }
    return formatter
  }
  
  return ({ selector, style }) => {
    const storedLimit = Error.stackTraceLimit  
    Error.stackTraceLimit = Math.max(storedLimit, 20)
    // TODO throw to make it work in IE
    const stack = parser.parse(new Error())
    const componentName = findComponent(stack, formatter)
    if (componentName) {
      style = { ...style, 'GlamorComponent': componentName }
    }
    Error.stackTraceLimit = storedLimit
    return ({ selector, style })
  }
}
