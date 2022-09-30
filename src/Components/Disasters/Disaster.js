import React from 'react'
import './Disaster.css'
import Navbar from '../Navbar/Navbar'
import list from '../../list.png'
import tick from '../../tick.png'

function Disaster() {
    return (
        <>
            <Navbar />
            <div className='disaster'>
                <div className="disasterHeading"> Disasters </div>
                <div className="disasterContainer">
                    <div className="disasterBox">
                        <div className="disasterSubHeading">Earthquake</div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <img style={{ borderRadius: "20px", border: "1px solid white", flex: "6" }} className='disasterImage' src="https://images.unsplash.com/photo-1575916167835-a26dc9a826fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGVhcnRocXVha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
                            <div style={{ flex: "6", paddingLeft: "30px" }} className="disasterText">An earthquake is a sudden, rapid shaking of the ground caused by the shifting of rocks deep underneath the earth’s surface. Earthquakes can cause fires, tsunamis, landslides or avalanches. While they can happen anywhere without warning, areas at higher risk for earthquakes include Alaska, California, Hawaii, Oregon, Puerto Rico, Washington and the entire Mississippi River Valley.</div>
                        </div>
                        <h2>Prepare before an Earthquake</h2>
                        <div style={{ display: "flex", alignItems: "center", gap: "20px", fontWeight: "200", marginBottom: "20px" }}>
                            <img style={{ width: "30px" }} src={list} alt="pic" />
                            <div>The best time to prepare for any disaster is before it happens.</div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                            <img className='tick' src={tick} alt="tick" />
                            <div>
                                Practice Drop, Cover and Hold On. Drop to the ground, take cover under a sturdy table or desk and hold on to it until the shaking stops.
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                            <img className='tick' src={tick} alt="tick" />
                            <div>
                                Make an Emergency Plan: Create a family emergency communications plan that has an out-of-state contact. Plan where to meet if you get separated. Make a supply kit that includes enough food and water for several days, a flashlight, a fire extinguisher and a whistle.
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                            <img className='tick' src={tick} alt="tick" />
                            <div>
                                Being prepared allows you to avoid unnecessary excursions and to address minor medical issues at home, alleviating the burden on urgent care centers and hospitals.
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                            <img className='tick' src={tick} alt="tick" />
                            <div>
                                <b>Protect Your Home:</b> Secure heavy items in your home like bookcases, refrigerators, water heaters, televisions and objects that hang on walls. Store heavy and breakable objects on low shelves.
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                            <img className='tick' src={tick} alt="tick" />
                            <div>
                                If you are in a car, pull over and stop. Set your parking brake.
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                            <img className='tick' src={tick} alt="tick" />
                            <div>
                                If you are in bed, turn face down and cover your head and neck with a pillow.
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                            <img className='tick' src={tick} alt="tick" />
                            <div>
                                If you are outdoors, stay outdoors away from buildings.
                            </div>
                        </div>
                        <h3 style={{ marginTop: "50px" }}>Protect yourself during Earthquakes</h3>
                        <img style={{ marginBottom: "70px" }} src="https://www.ready.gov/sites/default/files/styles/large/public/2021-03/illustration_earthquake_drop-cover-hold-on_0.png?itok=a_x6XtRz" alt="" />
                    </div>
                    <hr style={{marginBottom: "40px"}} />
                    <div className="disasterBox">
                        <div className="disasterSubHeading">Floods</div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                            <img style={{ borderRadius: "20px", border: "1px solid white", flex: "6" }} className='disasterImage' src="https://images.unsplash.com/photo-1601231522153-4910f56cb71e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
                            <div style={{ flex: "6", paddingLeft: "30px" }} className="disasterText">Flooding is a temporary overflow of water onto land that is normally dry. Floods are the most common natural disaster in the United States. Failing to evacuate flooded areas or entering flood waters can lead to injury or death.
                                <h4>Floods may:</h4>
                                <ul>
                                    <li>Result from rain, snow, coastal storms, storm surges and overflows of dams and other water systems.</li>
                                    <li>Develop slowly or quickly. Flash floods can come with no warning.</li>
                                    <li>Cause outages, disrupt transportation, damage buildings and create landslides.</li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* <div style={{ display: "flex", alignItems: "center", gap: "20px", fontWeight: "200", marginBottom: "20px" }}>
                            <img style={{ width: "30px" }} src={list} alt="pic" />
                            <div>The best time to prepare for any disaster is before it happens.</div>
                        </div> */}
                        <h4>If you are under a flood warning :</h4>
                        {/* <img style={{backgroundColor: "white", height: "30vh", marginBottom: "30px"}} src="https://www.ready.gov/sites/default/files/styles/large/public/2021-04/featured_illustration_floods_warning.png?itok=_QIQmbLB" alt="" /> */}
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                            <img className='tick' src={tick} alt="tick" />
                            <div>
                                Find safe shelter right away.
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                            <img className='tick' src={tick} alt="tick" />
                            <div>
                                Do not walk, swim or drive through flood waters. <b>Turn Around, Don't Drown!</b>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                            <img className='tick' src={tick} alt="tick" />
                            <div>
                                Remember, just six inches of moving water can knock you down, and one foot of moving water can sweep your vehicle away.
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                            <img className='tick' src={tick} alt="tick" />
                            <div>
                                Stay off bridges over fast-moving water.
                            </div>
                        </div>
                    </div>
                    <h4>Stay Safe during Flood</h4>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                        <img className='tick' src={tick} alt="tick" />
                        <div>
                            Evacuate immediately, if told to evacuate. Never drive around barricades. Local responders use them to safely direct traffic out of flooded areas.
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                        <img className='tick' src={tick} alt="tick" />
                        <div>
                            Contact your healthcare provider If you are sick and need medical attention. Wait for further care instructions and shelter in place, if possible. If you are experiencing a medical emergency, call 1-1-2.
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                        <img className='tick' src={tick} alt="tick" />
                        <div>
                            Listen to EAS, NOAA Weather Radio or local alerting systems for current emergency information and instructions regarding flooding.
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                        <img className='tick' src={tick} alt="tick" />
                        <div>
                            Stay off bridges over fast-moving water. Fast-moving water can wash bridges away without warning.
                        </div>
                    </div>

                    <h4>Stay Safe after a Flood</h4>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                        <img className='tick' src={tick} alt="tick" />
                        <div>
                            Pay attention to authorities for information and instructions. Return home only when authorities say it is safe.
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                        <img className='tick' src={tick} alt="tick" />
                        <div>
                            Avoid driving except in emergencies.
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                        <img className='tick' src={tick} alt="tick" />
                        <div>
                            Wear heavy work gloves, protective clothing and boots during clean up and use appropriate face coverings or masks if cleaning mold or other debris. 
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                        <img className='tick' src={tick} alt="tick" />
                        <div>
                            People with asthma and other lung conditions and/or immune suppression should not enter buildings with indoor water leaks or mold growth that can be seen or smelled. Children should not take part in disaster cleanup work.
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", marginLeft: "30px", marginBottom: "20px" }}>
                        <img className='tick' src={tick} alt="tick" />
                        <div>
                            Be aware that snakes and other animals may be in your house.
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Disaster