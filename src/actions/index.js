// @flow
/* eslint-disable no-use-before-define */
import { RSAA } from 'redux-api-middleware'
import type { State, Card } from '../reducers/initialState'

export type RSSAAction = {
  [string]: {
    endpoint: string,
    method: string,
    credentials: string,
    types: []
  }
}

type FetchCardsSuccess = { type: 'FETCH_CARDS_SUCCESS', payload: Array<Card>, meta: ?{} }
type FetchCardsError = { type: 'FETCH_CARDS_ERROR', payload: Object, error: boolean, meta: ?{} }

const REQUEST = { type: 'FETCH_CARDS_REQUEST' }
const SUCCESS = { type: 'FETCH_CARDS_SUCCESS' }
const FAILURE = { type: 'FETCH_CARDS_ERROR' }

function fetchCards (url: string): RSSAAction {
  return {
    [RSAA]: {
      endpoint: `${url}/characters`,
      method: 'GET',
      types: [REQUEST, SUCCESS, FAILURE]
    }
  }
}

export type ToggleLoading = { type: "TOGGLE_LOADING", loading: boolean }
function toggleLoading (loading: boolean): ToggleLoading {
  return { type: 'TOGGLE_LOADING', loading }
}

export type StartGame = { type: "START_GAME" }
function startGame (): StartGame {
  return { type: 'START_GAME' }
}

export type NextCard = { type: "NEXT_CARD" }
function nextCard (): NextCard {
  return { type: 'NEXT_CARD' }
}

export type UpdateDeck = { type: "UPDATE_DECK", deck: Array<Card> }
function updateDeck (deck: Array<Card>): UpdateDeck {
  return { type: 'UPDATE_DECK', deck }
}

export type DrawCard = { type: "DRAW_CARD", current: Card }
function drawCard (current: Card): DrawCard {
  return { type: 'DRAW_CARD', current }
}

export type UpdateGuess = { type: "UPDATE_GUESS", guess: string }
function updateGuess (guess: string): UpdateGuess {
  return { type: 'UPDATE_GUESS', guess }
}

export type CalculateScore = { type: "CALCULATE_SCORE" }
function calculateScore (): CalculateScore {
  return { type: 'CALCULATE_SCORE' }
}

export type UpdateScore = { type: "UPDATE_SCORE", score: number }
function updateScore (score: number): UpdateScore {
  return { type: 'UPDATE_SCORE', score }
}

export type ShowScore = { type: "SHOW_SCORE" }
function showScore (): ShowScore {
  return { type: 'SHOW_SCORE' }
}

export type EndGame = { type: "END_GAME" }
function endGame (): EndGame {
  return { type: 'END_GAME' }
}

export type ReducerAction = UpdateDeck | DrawCard | UpdateScore | UpdateGuess
  | ToggleLoading | EndGame
export type MiddlewareAction = StartGame | NextCard | CalculateScore | ShowScore
  | FetchCardsSuccess | FetchCardsError
export type Action = ReducerAction | MiddlewareAction

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any
export type GetState = () => State
export type PromiseAction = Promise<Action>
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any

export {
  fetchCards,
  updateDeck,
  drawCard,
  nextCard,
  updateScore,
  updateGuess,
  calculateScore,
  startGame,
  showScore,
  endGame,
  toggleLoading
}
