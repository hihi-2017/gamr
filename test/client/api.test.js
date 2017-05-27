import test from 'ava'
import nock from 'nock'

import * as api from '../../client/api'

test.cb('api.getUsers', t => {
  let scope = nock('http://localhost:80')
    .get('/api-v1/users')
    .reply(200, {message: 'getUsers working'})

  api.getUsers((actual) => {
    scope.done()
    t.is(actual.message, 'getUsers working')
    t.end()
  })
})


test.cb('api.getUser', t => {
  let scope = nock('http://localhost:80')
    .get('/api-v1/users/99902')
    .reply(200, {message: 'getUser working'})

  api.getUser(99902, (actual) => {
    scope.done()
    t.is(actual.message, 'getUser working')
    t.end()
  })
})

test.cb('api.getLatestUsers', t => {
  let scope = nock('http://localhost:80')
    .get('/api-v1/latestusers')
    .reply(200, {message: 'Latest users working'})

  api.getLatestUsers((actual) => {
    scope.done()
    t.is(actual.message, 'Latest users working')
    t.end()
  })
})

test.cb('api.getUserLatestGame', t => {
  let scope = nock('http://localhost:80')
    .get('/api-v1/users/99902/latestgame')
    .reply(200, {message: 'Latest users game working'})

  api.getUserLatestGame(99902, (actual) => {
    scope.done()
    t.is(actual.message, 'Latest users game working')
    t.end()
  })
})

test.cb('api.getGames', t => {
  let scope = nock('http://localhost:80')
    .get('/api-v1/games')
    .reply(200, {message: 'getGames working'})

  api.getGames((actual) => {
    scope.done()
    t.is(actual.message, 'getGames working')
    t.end()
  })
})
