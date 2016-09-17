import test from "tape"
import factory from "../src"
import path from 'path'
import { style, plugins, merge, styleSheet, flush } from 'glamor'
import React from 'react'

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

test('finds functionName and fileName for style defined inside the component', (t) => {
  t.plan(4)
  const formatter = (file, func) => {
    t.equal(func, 'Component')
    t.equal(file, path.join(__dirname, 'Component.js'))
    return 'Component'
  }
  const plugin = factory(formatter)
  plugins.add(plugin)
  const Component = require('./Component.js').default
  Component()
  t.equal(styleSheet.rules().length, 1)
  const rule = /^\[.*?\] (.*)$/.exec(styleSheet.rules()[0].cssText)[1]
  t.equal(rule, '{ color:red;-glamor-component:Component; }')
  
  // teardown
  plugins.remove(plugin)
  flush()
  t.end()
})
 
test('finds fileName for style defined outside the component', (t) => {
  t.plan(3)
  const formatter = (file, func) => {
    t.equal(file, path.join(__dirname, 'ComponentExternalStyle.js'))
    return 'ComponentExternalStyle'
  }
  const plugin = factory(formatter)
  plugins.add(plugin)
  const ComponentExternalStyle = require('./ComponentExternalStyle.js').default
  ComponentExternalStyle()
  t.equal(styleSheet.rules().length, 1)
  const rule = /^\[.*?\] (.*)$/.exec(styleSheet.rules()[0].cssText)[1]
  t.equal(rule, '{ color:red;-glamor-component:ComponentExternalStyle; }')
  
  // teardown
  plugins.remove(plugin)
  flush()
  t.end()
})