const redducer = (state ={filter1: [[true, 'Все', '1'], [true, 'Без пересадок', '2'], [true, '1 пересадка', '3'], [true, '2 пересадка', '4'], [true, '3 пересадка', '5']],
card:[],ses_id:''
}, action) => {

  switch (action.type) {
    case 'add_card_tickets':
      let newstate001 = state.filter1.slice()
      let sesid001 = state.ses_id

      return state ={filter1:newstate001,card:action.payload,ses_id:sesid001}
    case 'add_ses':
      let newstate01 = state.filter1.slice()

      return state ={filter1:newstate01,card:[[]],ses_id:action.payload}
    case 'null':
      console.log(state.filter1)
      let newstate0 = state.filter1.slice()
      let start0 = newstate0.slice(1)
      let newelem0 = [false, 'Все', '1']
      return state = {filter1:[newelem0,...start0]}
    case 'frst':
      return state ={filter1: [[true, 'Все', '1'], [true, 'Без пересадок', '2'], [true, '1 пересадка', '3'], [true, '2 пересадка', '4'], [true, '3 пересадка', '5']]}
    case 'second':
      return state ={filter1: [[false, 'Все', '1'], [false, 'Без пересадок', '2'], [false, '1 пересадка', '3'], [false, '2 пересадка', '4'], [false, '3 пересадка', '5']]}
    case 'three':

      let newstate = state.filter1.slice()
      let start = newstate.slice(0, 1)
      let end = newstate.slice(2)
      let elem = newstate.slice(1, 2)
      let abc = !elem[0][0]
      console.log(abc)
      elem=elem[0]
      let bool = elem[0]
      elem[0]=!bool[0]    
      let boolelem = !elem[0]
      console.log(abc)
      let newelem = [abc, 'Без пересадок', '2']
      return state = {filter1:[...start, newelem, ...end]}
    case 'four':
      
      let newstate2 = state.filter1.slice()
      let start2 = newstate2.slice(0, 2)
      let end2 = newstate2.slice(3)

      let elem2 = newstate2.slice(2, 3)
      let abc2 = !elem2[0][0]
      console.log(abc2)
      elem2=elem2[0]
      let bool2 = elem2[0]
      elem2[0]=!bool2[0]

      let newelem2 = [abc2, '1 пересадка', '3']
      return state = {filter1:[...start2, newelem2, ...end2]}
    case 'five':
      let newstate3 = state.filter1.slice()
      let start3 = newstate3.slice(0, 3)
      let end3 = newstate3.slice(4)

      let elem3 = newstate3.slice(3, 4)
      let abc3 = !elem3[0][0]
      console.log(abc3)
      elem3=elem3[0]
      let bool3 = elem3[0]
      elem3[0]=!bool3[0]

      console.log(end3)
      let newelem3 = [abc3, '2 пересадка', '4']
      return state = {filter1:[...start3, newelem3, ...end3]}
    case 'six':
      let newstate4 = state.filter1.slice()
      let start4 = newstate4.slice(0, 4)

      let elem4 = newstate4.slice(4, 5)
      let abc4 = !elem4[0][0]
      console.log(abc4)
      elem4=elem4[0]
      let bool4 = elem4[0]
      elem4[0]=!bool4[0]

 
      let newelem4 = [abc4, '3 пересадка', '5']
      return state = {filter1:[...start4, newelem4]}
    default:
      return state
  }



}
export default redducer