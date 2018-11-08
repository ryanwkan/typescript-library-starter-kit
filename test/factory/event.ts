import { Factory } from 'rosie'
const uuidv4 = require('uuid/v4')

Factory.define('event')
    .attr('_id', uuidv4())
    .attr('type', 'event')
    .attr('name', 'a test name')
    .attr('center', {
        latitude: 45.000000,
        longitude: 145.000000
    })
