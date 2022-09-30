import React, {useEffect, useState} from 'react'
import './Emergency.css'
import Navbar from '../Navbar/Navbar'
import GoogleMapReact from 'google-map-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Emergency() {

    const [currentPosition, setCurrentPosition] = useState({});

    const success = position => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
        console.log({currentPosition})
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    const mapStyles = {
        height: "50vh",
        width: "80%",
        margin: "auto", 
        marginBottom: "30px",
        borderRadius: "20px"
    };

    // const defaultCenter = {
    //     lat: 17.5392173, lng: 78.3852541
    // }


  return (
    <>
    <Navbar />
          <div className='emergency'>
            <h2 style={{textAlign: "center"}}>Find a Relief Centre near you</h2>
              <LoadScript
                  googleMapsApiKey='AIzaSyCm6s0rARHCV1pdJw8Rym4BApOCqLhPKfY'>
                  <GoogleMap
                      mapContainerStyle={mapStyles}
                      zoom={16}
                      center={currentPosition}
                    //   children={currentPosition && <Marker position={currentPosition} />}
                  />

              </LoadScript>
              <div className="emergencyHeading"> Control Room </div>
            <div className="emergencyContainer">
                <div className="emergencyBox">
                      <div className="emergencySubHeading">National Emergency Response Center, Disaster Management Division, Ministry of Home Affairs :</div>
                      <div className="emergencyNumber"> <div className="numberHeading">Phone No. :</div> 011-23438252 </div>
                      <div className="emergencyNumber"> <div className="numberHeading">Helpline No. :</div>  011-23092177 </div>

                </div>
                  <div className="emergencyBox">
                      <div style={{marginBottom: "90px"}} className="emergencySubHeading">National Disaster Management Authority:</div>
                      <div className="emergencyNumber"> <div className="numberHeading">Phone No. :</div> <div>011 26701728/730</div> </div>
                      <div className="emergencyNumber"> <div className="numberHeading">Helpline No. :</div>  <div> 011 1078</div></div>

                  </div>
                  <div className="emergencyBox">
                      <div style={{ marginBottom: "90px" }} className="emergencySubHeading">National Disaster Response Force Headquarters:</div>
                      <div className="emergencyNumber"> <div className="numberHeading">Phone No. :</div> 011 24363260 </div>
                      <div className="emergencyNumber"> <div className="numberHeading">Helpline No. :</div>  011 24363261 </div>

                  </div>
                
            </div>
            {/* <div>
                <table className="emergencyTable">
                    <thead>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Phone No.</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Shri Ajay Kumar Bhalla</td>
                            <td>Secretary, MHA</td>
                            <td>011-23092177</td>
                            <td>xyz@email.com</td>
                        </tr>
                          <tr>
                              <td>Shri Ajay Kumar Bhalla</td>
                              <td>Secretary, MHA</td>
                              <td>011-23092177</td>
                              <td>xyz@email.com</td>
                          </tr>
                          <tr>
                              <td>Shri Ajay Kumar Bhalla</td>
                              <td>Secretary, MHA</td>
                              <td>011-23092177</td>
                              <td>xyz@email.com</td>
                          </tr>
                          <tr>
                              <td>Shri Ajay Kumar Bhalla</td>
                              <td>Secretary, MHA</td>
                              <td>011-23092177</td>
                              <td>xyz@email.com</td>
                          </tr>
                    </tbody>
                </table>
            </div> */}
          </div>
    </>
  )
}

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyCm6s0rARHCV1pdJw8Rym4BApOCqLhPKfY'
// })(Emergency);

export default Emergency