import React, { useState } from 'react';
import './main.css'
import risk from '../../images/risk 1.svg'
import volume from '../../images/volume 1.svg'
import contract from '../../images/contract 1.svg'
import tricker from '../../images/ticker 1.svg'
import CustomFilter from './CustomFilter';
const Main = () => {
      const filters = [
            { type: "Industry", options: ["Health care.", "option2", "option3"], hint: "Choose something." },
            { type: "Market Cap", options: ["Large-cap", "option2"], hint: "Press Apply to see changes." },
            { type: "Risk", options: ["Low risk", "Mid-risk", "High risk", "Option text here"], hint: "Choose something." },
      ]

      const data = [
            { text: "X company released a short report on $XYZ, High IV option sales opps" },
            { text: "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails." },
            { text: "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails." },
            { text: "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails." },
            { text: "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails." },
            { text: "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails." },
            { text: "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails." },
      ]


      return (
            <main className='main_section'>
                  {/* SIDE BAR  */}
                  <aside className='sidebar'>
                        <div>
                              <h3>Filters</h3>
                              <div>
                                    {filters.map((filter, index) => (
                                          <CustomFilter key={index} type={filter.type} options={filter.options} hint={filter.hint} />
                                    ))}
                              </div>
                        </div>
                        <button className='btn-filter'>Apply Filters</button>
                  </aside>

                  {/* CONTENT  */}
                  <section className='content'>
                        {/* OVERVIEW  */}
                        <div className="overview_section">
                              <div className="top">
                                    <div className="title">
                                          <img src={tricker} alt="" />
                                          <span>$TSLA</span>
                                    </div>
                                    <span className="line"></span>
                                    <div className="title">
                                          <img src={contract} alt="" />
                                          <span>200 Contracts</span>
                                    </div>
                                    <span className="line"></span>
                                    <div className="title">
                                          <img src={volume} alt="" />
                                          <span>12.2%</span>
                                    </div>
                                    <span className="line"></span>
                                    <div className="title">
                                          <img src={risk} alt="" />
                                          <span>High risk</span>
                                    </div>
                              </div>
                              <div className="data">
                                    Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.
                              </div>
                        </div>
                        {/* META DATA  */}
                        <div className="meta_data">
                              {data.map((item) => (
                                    <div className='data_div'>
                                          <p className='data_text'>{item.text}</p>
                                    </div>
                              ))}
                        </div>

                  </section>
            </main>
      )
}

export default Main;