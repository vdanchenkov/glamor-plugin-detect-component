import test from "tape"
import factory from "../src"
import path from 'path'
import { style, plugins, merge, styleSheet } from 'glamor'
import Component from './Component'

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

test('finds functionName and fileName', (t) => {
  t.plan(3)
  const formatter = (file, func) => {
    t.equal(func, 'Component')
    t.equal(file, path.join(__dirname, 'Component.js'))
    return 'Component'
  }
  const plugin = factory(formatter)
  plugins.add(plugin)
  Component()
  const rule = /^\[.*?\] (.*)$/.exec(styleSheet.rules()[0].cssText)[1]
  t.equal(rule, '{ color:red;-glamor-component:Component; }')
  
  // teardown
  plugins.remove(plugin)
  styleSheet.flush()
  t.end()
})