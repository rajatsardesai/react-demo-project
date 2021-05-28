import React, { useEffect, useState } from 'react';
import './Covid.css';

export const Covid = () => {

    const [data, setData] = useState([])

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData);
            setData(actualData.statewise[0]);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <div className="content">
                <div className="live d-flex align-items-center justify-content-center mt-5 mb-2">
                    <div className="circle pulse red mr-2"></div>
                    <span class="badge badge-pill badge-light">LIVE</span>
                </div>
                <h2 className="text-center">COVID-19 TRACKER</h2>

                <div className="container my-5 d-flex">
                    <div className="card-deck d-flex justify-content-center justify-content-between align-items-center">
                        <div className="card text-white bg-primary mb-3 p-4 h-50" style={{ maxWidth: "20rem" }}>
                            <div className="card-body">
                                <h4 className="card-title text-center p-2"><span className="h6">OUR</span> COUNTRY</h4>
                                <p className="card-text h1 text-center p-2">INDIA</p>
                            </div>
                        </div>
                        <div className="card text-white bg-success mb-3 p-4 h-50" style={{ maxWidth: "20rem" }}>
                            <div className="card-body">
                                <h4 className="card-title text-center p-2"><span className="h6">TOTAL</span> RECOVERED</h4>
                                <p className="card-text h1 text-center p-2">{data.recovered}</p>
                            </div>
                        </div>
                        <div className="card text-white bg-warning mb-3 p-4 h-50" style={{ maxWidth: "20rem" }}>
                            <div className="card-body">
                                <h4 className="card-title text-center p-2"><span className="h6">TOTAL</span> CONFIRMED</h4>
                                <p className="card-text h1 text-center p-2">{data.confirmed}</p>
                            </div>
                        </div>
                        <div className="w-100 my-2"></div>
                        <div className="card text-white bg-danger mb-3 p-4 h-50" style={{ maxWidth: "20rem" }}>
                            <div className="card-body">
                                <h4 className="card-title text-center p-2"><span className="h6">TOTAL</span> DEATHS</h4>
                                <p className="card-text h1 text-center p-2">{data.deaths}</p>
                            </div>
                        </div>
                        <div className="card text-white bg-secondary mb-3 p-4 h-50" style={{ maxWidth: "20rem" }}>
                            <div className="card-body">
                                <h4 className="card-title text-center p-2"><span className="h6">TOTAL</span> ACTIVE</h4>
                                <p className="card-text h1 text-center p-2">{data.active}</p>
                            </div>
                        </div>
                        <div className="card text-white bg-dark mb-3 p-4 h-50 pulse animated" style={{ maxWidth: "20rem" }}>
                            <div className="card-body">
                                <h4 className="card-title text-center p-2"><span className="h6">LAST</span> UPDATED</h4>
                                <p className="card-text h1 text-center p-2">{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
