import test from "tape"
import factory from "../src"

const definition = { 
  selector: '[data-css-1lyca4j]', 
  style: { display: 'block' } 
}

Object.freeze(definition.style)
Object.freeze(definition)

test("factory creates plugin", (t) => {
  t.equal(typeof factory(), 'function')
  t.end()
})

test('warns about misusage of factory', (t) => {
  // It's two-line mesage
  t.plan(2)
  const warn = console.warn
  console.warn = () => t.pass('warn called')
  factory(definition)
  factory(definition)
  factory(definition)
  console.warn = warn
  t.end()
})