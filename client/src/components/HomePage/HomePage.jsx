import React, { Component } from 'react';
import './HomeStyle.css';
import {CardList} from "../CardList/CardList";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      years: [
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021"
      ],
      values: ["true", "false"],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchTotalData();
  }


  fetchTotalData() {
    fetch("https://api.spaceXdata.com/v3/launches?limit=100")
      .then((res) => res.json())
      .then((data) => this.setState({ data, isLoading: false }));
  }

  yearsClicked = (event) => {
    let year = event.target.dataset.value;
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  launchSuccess = (event) => {
    let value = event.target.dataset.value;
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${value}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  landSuccess = (event) => {
    let value = event.target.dataset.value;
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${value}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  render() {
    const { data, years, values, isLoading } = this.state;

    return (
      <div className="page-style" >
        <h1 className="header-text">SpaceX Launch Programs</h1>
        <div className="home-style">
         
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Filter:</h5>
                <hr />
                <div className="row">
                  <div className="year-btn-section">
                    {years.map((year,i)=>(
                      <button
                      type="button"
                      className="btn btn-success btn-sm btn-style"
                      key={i}
                      data-value={year}
                      onClick={this.yearsClicked}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                  <div className="val-btn-section" >
                    <h6>Successful Launch</h6>
                    <hr></hr>
                    <div >
                      {values.map((value, i) => (
                        <button
                          type="button"
                          className="btn btn-success btn-sm btn-values"
                          key={i}
                          data-value={value}
                          onClick={this.launchSuccess}
                        >
                          {value.charAt(0).toUpperCase()+value.substring(1)}
                        </button>
                      ))}
                    </div>
                </div>

             <div className="val-btn-section" >
                    <h6>Successful Landing</h6>
                    <hr></hr>
                    <div>
                      {values.map((value, i) => (
                        <button
                          type="button"
                          className="btn btn-success btn-sm btn-values"
                          key={i}
                          data-value={value}
                          onClick={this.landSuccess}
                        >
                          {value.charAt(0).toUpperCase()+value.substring(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

          </div>
          
          {isLoading ? (
            <div
              className="justify-content-center"
              style={{ margin:"auto"  }}
            >
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <CardList data={data} />
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;