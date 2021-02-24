export default null // Force module mode
// #1
/* decide if the first type is assignable to the 
 * 2nd type. Think about subtyping, variance, and
 * refer to the rules at the start of the chapter
 *
 * */
 
// a: yes, number type can be assigned to a number value 
let a: number
a = 1 as 1

// b: no: specific type value cannot be assigned to a more general type (called supertype!)
let b: 1
// b = 2 as number // type 'number' is not assignable to type '1'

// c: should be possible...
let c: number | string
c = 'ya' as string

// d: no, incompatible types
let d: number
// d = true as boolean 
// -> boolean is not assignable to type number

// e: yes, since number is a subtype of number | string it should work...
let e: (number |  string)[]
e = [4, 5] as number[]

// f: no, opposite way does not work:
let f: number[]
// f = [6, 'foo'] as (number | string)[] 
// -> not assignable types

// g: should work
let g: {a: boolean}
g = {a: true} as {a: boolean}

// h: first glance alright...
let h: {a: {b: [number | string]}}
h = {a: {b: ['alright?']}} as {a: {b: [string]}}

// i: !!
/* Yes. For a function to be assignable to another function, 
each of its parameters should be >: the other function's parameters, 
and its return type should be <: the other function's return type. */
let i: (a: number) => string
i = ((b: number) => 'c') as (b: number) => string

// j: number and string not compatible; each parameter should be >: the other
let j: (a: string) => string
// j = ((a: number) => 'b') as (a: number) => string
// -> type of parameters a and a are incompatible

// k: skip -> check out some other time
// l: skip


// #2. If I have an object type type O = {a: {b: {c: string}}}, what’s the type of keyof O?
// What about O['a']['b']?

type O = {a: {b: {c: string}}}
type P = keyof O // 'a'
type Q = O['a']['b'] // {c: string}

// #3 Exclusive<T, U> type
// compute types that are in either T or U, but not both

// see page: Built-in Conditional Types! p. 146
type Exclusive<T, U> = Exclude<T, U> | Exclude<U, T>

type R = Exclusive<1 | 2 | 3, 2 | 3 | 4> // 1 | 4
type U = Exclusive<1 | 2, 2 | 4>

// #4 
// example from "Definite Assignment Assertions" p. 151, 
// to avoid definite assignment assertion

let globalCache = {
  get(key: string) {
    return 'user'
  }
}

let userId: string
fetchUser()

userId.toUpperCase()

function fetchUser() {
  userId = globalCache.get('userId')
}