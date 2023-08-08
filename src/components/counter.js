import React, { useState } from "react";
import Noflight from './card/noflight'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import { bindActionCreators } from 'redux'
import './index.scss';
import icon from '../img/Logo.png'
import { useEffect } from "react";
import Button from '../button-more'
import Spinner from './spinner'
import styles from '../components/card/card.module.css'
const Counter = (props) => {
  const [card, SetCard] = useState([{
    price: 13510, carrier: "U6", segments: [
      { origin: 'MOW', destination: 'HKT', date: '2023-09-17T08:02:12.109Z', duration: 1194, stops: ["DXB", "DXB", "DXB"] },
      { origin: 'MOW', destination: 'HKT', date: '2023-09-17T08:02:12.109Z', duration: 1194, stops: ["DXB", "DXB"] }
    ]
  }])
  const [showend, Setshowend] = useState(5)
  const [load, SetLoad] = useState(true)
  const [eptyflith] = useState(false)
  const [filter, Setfilter] = useState(props.counter.filter1)
  const [filterHead, SetfilterHead] = useState(['filter-fast active', 'filter-fast', 'filter-fast'])
  const newprops = props
  const asd = (e) => {
    let trueth = 0
    if (e.target.checked === true && e.target.value === 'Все') {
      newprops.frst1()
      SetLoad(true)
      Setfilter(props.counter.filter1)

    }
    else if (e.target.checked === false && e.target.value === 'Все') {
      SetLoad(true)
      newprops.secnd1()
      Setfilter(props.counter.filter1)

    }

    else if (e.target.value === 'Без пересадок') {
      SetLoad(true)
      newprops.three1()
      Setfilter(props.counter.filter1)
      newprops.counter.filter1.map((elem) => {
        
        if (elem[0] === true) {
          trueth++

          if (trueth > 3) {

            newprops.frst1()
            Setfilter(props.counter.filter1)
            trueth = 0
          }
          else if (trueth <= 3 && newprops.counter.filter1[0][0] === true) {

            newprops.null1()
            Setfilter(props.counter.filter1)
            trueth = 0
          }
        }
        return 1
      })

    }
    else if (e.target.value === '1 пересадка') {
      SetLoad(true)
      newprops.four1()
      Setfilter(props.counter.filter1)
      newprops.counter.filter1.map((elem) => {

        if (elem[0] === true) {
          trueth++
        
          if (trueth > 3) {

            newprops.frst1()
            Setfilter(props.counter.filter1)
            trueth = 0
          }
          else if (trueth <= 3 && newprops.counter.filter1[0][0] === true) {
            newprops.null1()
            Setfilter(props.counter.filter1)
            trueth = 0
          }
        }
        return 1
      })

    }
    else if (e.target.value === '2 пересадка') {
      SetLoad(true)
      newprops.five1()
      Setfilter(props.counter.filter1)
      newprops.counter.filter1.map((elem) => {

        if (elem[0] === true) {
          trueth++
        
          if (trueth > 3) {
            SetLoad(true)
            newprops.frst1()
            Setfilter(props.counter.filter1)
            trueth = 0
          }
          else if (trueth <= 3 && newprops.counter.filter1[0][0] === true) {
            SetLoad(true)
            newprops.null1()
            Setfilter(props.counter.filter1)
            trueth = 0
          }
        }
        return 1
      })

    }
    else if (e.target.value === '3 пересадка') {
      SetLoad(true)
      newprops.six1()
      Setfilter(props.counter.filter1)
      newprops.counter.filter1.map((elem) => {

        if (elem[0] === true) {
          trueth++
         
          if (trueth > 3) {

            newprops.frst1()
            Setfilter(props.counter.filter1)
            trueth = 0
          }
          else if (trueth <= 3 && newprops.counter.filter1[0][0] === true) {
            newprops.null1()
            Setfilter(props.counter.filter1)
            trueth = 0
          }

        }
        return 1
      })

    }


  }

  async function get12(id) {
    let asd = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
    return asd
  }
  const getTime = (time) => {

    let hours = (Math.floor((time / 60) % 60));
    let min2 = time % 60
    return hours + 'ч ' + min2 + 'м'



  };
  const getTimenew = (time) => {

    if (Math.floor((time / 60) % 60) >= 24) {
      let hours = (Math.floor((time / 60) % 60));
      hours = hours - 23
      let min2 = time % 60
      if (hours < 10 && min2 < 10) {
        return ('0' + hours) + ':0' + min2
      }
      else if (hours < 10 && min2 >= 10) {
        return '0' + hours + ':' + min2
      }
      else if (min2 < 10 && hours >= 10) {
        return hours + ':0' + min2
      }
      else {
        return hours + ':' + min2
      }


    } else {
      let hours = (Math.floor((time / 60) % 60));
      let min2 = time % 60
      if (hours < 10 && min2 < 10) {
        return '0' + hours + ':0' + min2
      }
      else if (hours < 10 && min2 >= 10) {
        return '0' + hours + ':' + min2
      }
      else if (min2 < 10 && hours >= 10) {
        return hours + ':0' + min2
      }
      else {
        return hours + ':' + min2
      }
    }

  }
  const getstops = (arr) => {
    if (arr.length >= 1) {
      let str = []

      arr.map((elem) => { str.push(elem)  
        return 1})

      return str.join(',')

    }
    else {

    }
  }
  async function erqw() {
    let tickets1
    let elem1
     await fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => { return res.json() }).then((result) => { return elem1 = result.searchId })
    setTimeout(() => {

      props.addcard(elem1)
      setTimeout(() => {
        get12(elem1).then((res) => { return (res.json()) }).then((elem) => { tickets1 = elem.tickets })
          .catch(() => get12(elem1).then((res) => { return (res.json()) }).then((elem) => { tickets1 = elem.tickets }))
        setTimeout(() => {

          setTimeout(() => {
            props.addcardtickets(tickets1)

            if (filterHead[0] === 'filter-fast active' && tickets1 !== undefined) {
              tickets1.sort(function (a, b) {
                return a.price - b.price;
              })
              Setshowend(5)
              setTimeout(() => {
                SetLoad(false)
              }, 500);

            }
            else if (filterHead[1] === 'filter-fast active' && tickets1 !== undefined) {
              tickets1.sort(function (a, b) {
                return (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration);
              })
              Setshowend(5)
              setTimeout(() => {
                SetLoad(false)
              }, 500);
            }
            else if (filterHead[2] === 'filter-fast active' && tickets1 !== undefined) {
              tickets1.sort(function (a, b) {
                return a.price - b.price;
              })
              tickets1.sort(function (a, b) {
                return (a.segments[0].duration) - (b.segments[0].duration);
              })
              Setshowend(5)
              setTimeout(() => {
                SetLoad(false)
              }, 500);
            }

            setTimeout(() => {
              let newmass = []
              if (props.counter.filter1[0][0] === true) {
                SetLoad(true)
                SetCard(tickets1)
                Setshowend(5)
                setTimeout(() => {
                  SetLoad(false)
                }, 500);
              }
              else if (props.counter.filter1[0][0] === false) {
                SetLoad(true)
                if (props.counter.filter1[1][0] === true) {

                  tickets1.map((elem) => {
                    if (elem.segments[0].stops.length === 0 && elem.segments[1].stops.length === 0) {
                      newmass.push(elem)
                    }
                    return 1
                  })
                  SetCard(newmass)

                }
                if (props.counter.filter1[2][0] === true) {
                  SetLoad(true)
                  tickets1.map((elem) => {
                    if (elem.segments[0].stops.length === 1 && elem.segments[1].stops.length === 1) {
                      newmass.push(elem)
                    }
                    return 1
                  })
                  SetCard(newmass)

                }
                if (props.counter.filter1[3][0] === true) {
                  SetLoad(true)
                  tickets1.map((elem) => {
                    if (elem.segments[0].stops.length === 2 && elem.segments[1].stops.length === 2) {
                      newmass.push(elem)
                    }
                    return 1
                  })
                  SetCard(newmass)

                }
                if (props.counter.filter1[4][0] === true) {
                  SetLoad(true)
                  tickets1.map((elem) => {
                    if (elem.segments[0].stops.length === 3 && elem.segments[1].stops.length === 3) {
                      newmass.push(elem)

                    }
                    return 1
                  })
                  SetCard(newmass)

                }
                SetCard(newmass)
                Setshowend(5)
                setTimeout(() => {
                  SetLoad(false)
                }, 500);
                newmass = []
              }

            }, 300);
          }, 300);
        }, 300);
      }, 300);
    }, 300);
  }
  const timechange = (s) => {
    var d = new Date(s)
    var res = [d.getHours(), d.getMinutes()].map(function (x) {
      return x < 10 ? "0" + x : x
    }).join(":")
    return res
  }
  const showmore = () => {
    Setshowend(() => showend + 5)
  }
  const asdasds = (time, plus) => {
    const newtime = time.split(':')
    let newtimemin = newtime[0] * 60
    newtimemin = newtimemin + +newtime[1] + plus
    return newtimemin
  }
  const filterclick = (e) => {
    if (Number(e.target.value) === 1) {
      SetfilterHead(['filter-fast ', 'filter-fast active', 'filter-fast '])
      SetLoad(true)
    } else if (Number(e.target.value) === 2) {
      SetfilterHead(['filter-fast ', 'filter-fast ', 'filter-fast active'])
      SetLoad(true)
    }
    else if (Number(e.target.value) === 0) {
      SetfilterHead(['filter-fast active', 'filter-fast ', 'filter-fast '])
      SetLoad(true)
    }
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { erqw() }, [filter])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { erqw() }, [filterHead])

  const returnSpinner = () => {
    if (card.length === 1) {

      return <div className="spinner-mr"><Spinner /></div>
    }
    else if (card.length === 0) {

      return <div className="noflith"><Noflight /></div>
    }
    else {
      return <Button onclick1={showmore} />
    }
  }
  if (load === true) {
    return (
      <div>
        <section className="head-ico">
          <img alt="1" src={icon}></img>
        </section>
        <section className="all">
          <div className="filter-asffas">
            <label className="filter-label-head">Количество пересадок</label>
            {props.counter.filter1.map((elem) => {
              if (elem[0] === true) {

                return (<form className="filter-form" key={elem[2]} onChange={asd}><label className="filter-label">
                  <input defaultChecked={elem[0]} className="filter-input" type="checkbox" name="happy" value={elem[1]} /><span></span>{elem[1]}
                </label>
                </form>)
              }
              else if (elem[0] === false) {

                return (<form className="filter-form" key={elem[2]} onChange={asd}> <label className="filter-label">
                  <input defaultChecked={elem[0]} className="filter-input" type="checkbox" name="happy" value={elem[1]} /><span></span>{elem[1]}</label></form>)
              }
              return 1
            })}
          </div>
          <div className="cards">
            <header className="filter">
              <button onClick={filterclick} value={0} className={filterHead[0]}>Самый дешевый</button>
              <button onClick={filterclick} value={1} className={filterHead[1]}>Самый быстрый</button>
              <button onClick={filterclick} value={2} className={filterHead[2]}>Оптимальный</button>
            </header>



          </div>
        </section>

        <div className="spinner-mr"><Spinner /></div>


        <Button onclick1={showmore} />
      </div>
    )
  }
  else if (load === false && card !== undefined && eptyflith === false) {
    return (
      <div>
        <section className="head-ico">
          <img alt="logo" src={icon}></img>
        </section>
        <section className="all">
          <div className="filter-asffas">
            <label className="filter-label-head">Количество пересадок</label>
            {props.counter.filter1.map((elem) => {
              if (elem[0] === true) {

                return (<form className="filter-form" key={elem[2]} onChange={asd}><label className="filter-label">
                  <input defaultChecked={elem[0]} className="filter-input" type="checkbox" name="happy" value={elem[1]} /><span></span>{elem[1]}
                </label>
                </form>)
              }
              else if (elem[0] === false) {

                return (<form className="filter-form" key={elem[2]} onChange={asd}> <label className="filter-label">
                  <input defaultChecked={elem[0]} className="filter-input" type="checkbox" name="happy" value={elem[1]} /><span></span>{elem[1]}</label></form>)
              }
              return 1
            })}
          </div>
          <div className="cards">
            <header className="filter">
              <button onClick={filterclick} value={0} className={filterHead[0]}>Самый дешевый</button>
              <button onClick={filterclick} value={1} className={filterHead[1]}>Самый быстрый</button>
              <button onClick={filterclick} value={2} className={filterHead[2]}>Оптимальный</button>
            </header>

            {card.slice(0, showend).map((elem) => {

             
              return (
                <section key={elem.price} className="card">
                  <div className={styles.rowHeader}>
                    <p className={styles.price}>{elem.price}</p>
                    <img alt="1" className="logo-card" src={`https://pics.avs.io/99/36/${elem.carrier}.png`}></img>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <span className={styles.columnDescr}>{elem.segments[0].origin} – {elem.segments[0].destination}</span>
                      <span className={styles.columnInfo}>{timechange(elem.segments[0].date)} – {getTimenew(asdasds(timechange(elem.segments[0].date), elem.segments[0].duration))}</span>
                    </div>
                    <div className={styles.column}>
                      <span className={styles.columnDescr}>В пути</span>
                      <span className={styles.columnInfo}>{getTime(elem.segments[0].duration)}</span>
                    </div>
                    <div className={styles.column}>
                      <span className={styles.columnDescr}>{elem.segments[0].stops.length} пересадки</span>
                      <span className={styles.columnInfo}>{getstops(elem.segments[0].stops)}</span>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.column}>
                      <span className={styles.columnDescr}>{elem.segments[1].origin} – {elem.segments[1].destination}</span>
                      <span className={styles.columnInfo}>{timechange(elem.segments[1].date)} – {getTimenew(asdasds(timechange(elem.segments[0].date), elem.segments[1].duration))}</span>
                    </div>
                    <div className={styles.column}>
                      <span className={styles.columnDescr}>В пути</span>
                      <span className={styles.columnInfo}>{getTime(elem.segments[1].duration)}</span>
                    </div>
                    <div className={styles.column}>
                      <span className={styles.columnDescr}>{elem.segments[1].stops.length} пересадки</span>
                      <span className={styles.columnInfo}>{getstops(elem.segments[1].stops)}</span>
                    </div>
                  </div>
                </section>

              )
            })}

          </div>
        </section>
        {returnSpinner()}


      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    counter: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)