
import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import searchIcon from '../assets/imgs/search-icon.svg';
import iconArrowDown from '../assets/imgs/icon-arrow-down.svg';

export default class Home extends Component  {

  state = {
    searchValue: "",
    incomingData: [{"name":"Anno 1800","state":"Available","genre":"Strategy"},{"name":"Argo (Steam)","state":"Available","genre":"Action"},{"name":"Assassin’s Creed®: Syndicate","state":"Available","genre":"Action"},{"name":"Battlestar Galactica Deadlock","state":"Available","genre":"Strategy"},{"name":"Blair Witch","state":"Patching","genre":"Horror"},{"name":"Bomber Crew","state":"Available","genre":"Shooters"},{"name":"Dean","state":"Available","genre":"Shooters"},{"name":"Darren","state":"Available","genre":"Racing"},{"name":"Doug","state":"Available","genre":"Open World"},{"name":"Darksiders 3","state":"Available","genre":"Open World"},{"name":"Elite Dangerous","state":"Available","genre":"Open World"},{"name":"Europa Universalis 3","state":"Available","genre":"Open World"},{"name":"Empyrion - Galactic Survival","state":"Available","genre":"Strategy"},{"name":"Metro Exodus","state":"Available","genre":"Action"},{"name":"Might & Magic Heroes 5","state":"Available","genre":"Strategy"},{"name":"Mount & Blade 2 Bannerlord","state":"Available","genre":"RPG"},{"name":"Mr. Prepper ","state":"Available","genre":"RPG"},{"name":"My Time at Portia","state":"Available","genre":"Action"},{"name":"Railway Empire","state":"Available","genre":"Strategy"},{"name":"Ride 4","state":"Available","genre":"Racing"},{"name":"RimWorld","state":"Available","genre":"Strategy"},{"name":"Risen 3 - Titan Lords","state":"Available","genre":"Sports"},{"name":"Rocket League","state":"Available","genre":"Sports"},{"name":"RollerCoaster Tycoon","state":"Available","genre":"Strategy"},{"name":"Rune 2","state":"Available","genre":"Action"},{"name":"Rust","state":"Available","genre":"Action"},{"name":"Rise of Industry","state":"Available","genre":"Strategy"},{"name":"Ring of Elysium","state":"Available","genre":"Horror"}],
    states: [{name:"Available", value: false}, {name: "Patching", value: false}, {name: "Maintenance", value: false}],
    genres: [{name: "Shooters", value: false}, {name: "Action", value: false}, {name: "RPG", value: false}, {name: "Racing", value: false}, {name: "Strategy", value: false}, {name: "Sports", value: false}, {name: "Horror", value: false}, {name: "Open World", value: false}],
    sort: 'sort',
    sortPlaneExpand: ''
  }
  
  clickReverseSort = event => {
    this.setState({ sort: 'reverse'});
    this.setState({ sortPlaneExpand: ''});
  }

  clickSort = event => {
    this.setState({ sort: 'sort' });
    this.setState({ sortPlaneExpand: ''});
  }

  handleChange = event => {
     this.setState({ searchValue: event.target.value });
  };

  stateChange = (e, item) => {
    const index = this.state.states.findIndex((a) => a.name === item.name);
    const _states = Object.assign(this.state.states);
    _states[index].value =  e.target.checked;
    this.setState({ states: _states });
  }

  genreChange = (e, item) => {
    const index = this.state.genres.findIndex((a) => a.name === item.name);
    const _genres = Object.assign(this.state.genres);
    _genres[index].value =  e.target.checked;
    this.setState({ genres: _genres });
  }

  clickExpandSort = event => {
    this.setState({ sortPlaneExpand: 'expand' });
  }

  render() {
    const { searchValue, incomingData, states, genres, sort, sortPlaneExpand } = this.state;
    let _states = [];
    let _genres = [];
    states.find(f => { if(f.value) { _states.push(f.name)} });
    genres.find(f => { if(f.value) { _genres.push(f.name)} });

    // Arama
    let lowercasedFilter = searchValue.toLowerCase();
    let searhedData = incomingData.filter(item => { 
        return item.name.toLowerCase().includes(lowercasedFilter) && (_states.length > 0 ?  _states.includes(item.state) : 1 == 1) && (_genres.length > 0 ?  _genres.includes(item.genre) : 1 == 1)
    });

    // grup
    const obj = searhedData.reduce((acc, c) => {
      const letter = c.name[0];
      acc[letter] = (acc[letter] || []).concat(c.name);
      return acc;
    }, {})
    
    let filteredData;
    // Sıralama
    if(sort === 'sort') {
      filteredData = Object.entries(obj).map(([letter, names]) => {
        return { letter, names }
      }).sort((a, b) => a.letter > b.letter);
    }
    else {
      filteredData = Object.entries(obj).map(([letter, names]) => {
        return { letter, names }
      }).reverse((a, b) => a.letter > b.letter);
    }

   return (
      <div className="App">
        <Header />
        <div className="search-area">
          <div className="search-container">
            <h1>Lorem ipsum dolor sit amet consectetur</h1> 
            <h3>With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!</h3>
            <div className="search-div">
              <img className="search-icon" alt="search-icon" src={searchIcon} />
              <input type="text"  defaultValue={searchValue}  onChange={this.handleChange}  className="search" placeholder="Search Games" />
            </div>
          </div>
        </div>
        <div className="main">
          <div className="main-spacer-1"></div>
          <div className="container">
            <div className="samet-12">
              <div className="samet-6">
                <h2 className="h2-main-title">Browse Games</h2>
              </div>  
              <div className="samet-6 aRight relative">
                <button  className={"btn-sort-header " + sortPlaneExpand} onClick={this.clickExpandSort}>
                   {sort === 'sort' && <span>Title A-Z</span> }
                   {sort === 'reverse' && <span>Title Z-A</span> }
                   {sortPlaneExpand === '' && <img src={iconArrowDown} /> }
                   {sortPlaneExpand === 'expand' && <img className="rotate-180" src={iconArrowDown} /> }
                </button>
                <div class="sort-plane ">
                  <button className="btn-sort" onClick={this.clickSort}>
                    Title A-Z
                  </button>
                  <button className="btn-sort" onClick={this.clickReverseSort}>
                    Title Z-A
                  </button>
                </div>
              </div>  
            </div>  
          </div>
          <div className="main-spacer-2"></div>
          <div className="container">
            <div className="samet-12">
              <div className="samet-4">
                <div className="side-menu">
                <div className="cover">
                  <div className="side-box">
                    <h2>State</h2>
                    <div className="side-accordion">
                      {states.map((item, i) => {
                        return (<div key={"state-div-"+i} className="side-accordion-li">  
                          <div className="checkbox-container">
                            <input key={"state-"+i} id={"state-"+i} type="checkbox" className="checkbox" defaultChecked={item.value} onChange={e => this.stateChange(e, item)} />
                            <label></label>
                            <span>{item.name}</span>
                          </div>
                        </div>)
                      })}
                    </div>
                  </div>
                  <div className="side-box side-box-second">
                    <h2>Genre Filters</h2>
                    <div className="side-accordion">
                      {genres.map((item, i) => {
                        return (<div key={"genre-div-"+i} className="side-accordion-li">  
                          <div className="checkbox-container">
                            <input key={"genre-"+i} id={"genre-"+i} type="checkbox" className="checkbox" defaultChecked={item.value} onChange={e => this.genreChange(e, item)} />
                            <label ></label>
                            <span>{item.name}</span>
                          </div>
                        </div>)
                      })}
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="samet-8 ">
                {filteredData.map((item, id) => {
                  return (<div  key={"cover-"+id} className="cover main-cover">
                              <div className="polygon">
                                <div className="letter">{item.letter}</div>
                              </div>
                              <div className="samet-12">
                                {item.names.map(name => {
                                  return (
                                    <div key={name} className="samet-6 game-name">
                                      <a href="#">{name}</a>
                                    </div>
                                )})}
                              </div>
                          </div>);
                })} 
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

