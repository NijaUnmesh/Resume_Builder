import React from 'react'
import Footer from '../components/Footer'

const Land = () => {
    return (
        <>
            <h2 className="text-center p-5">Create a job-winning Resume in minutes</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className="card shadow" style={{ width: "31rem", height: "18rem" }}>
                            <div className="card-body d-flex d-flex flex-column justify-content-center align-items-center justify-content-center align-items-center">
                                    <h1 ><i class="fa-solid fa-file-lines" style={{ color: "#5abcf1ff" }}></i></h1>
                                    <h3 className="card-title ">Add your information</h3>
                                    <h5 className="card-subtitle mb-2 text-muted">Add pre-written examples to each section</h5>
                                    <h5 className="card-text ">Step 1</h5>
                            </div>
                        </div>
                    </div>
                     <div className='col-6'>
                        <div className="card shadow" style={{ width: "31rem", height: "18rem" }}>
                            <div className="card-body d-flex justify-content-center align-items-center flex-column">
                                    <h1 className='text-center'><i class="fa-solid fa-file-arrow-down" style={{color:"red"}}></i></h1>
                                    <h3 className="card-title text-center">Download your Resume</h3>
                                    <h5 className="card-subtitle mb-2 text-muted text-center">Download and start applying</h5>
                                    <h5 className="card-text text-center">Step 2</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' text-center mt-5'><button className='clr'>LET'S START</button></div>
           <Footer marginTop="150px" />
        </>
    )
}

export default Land

