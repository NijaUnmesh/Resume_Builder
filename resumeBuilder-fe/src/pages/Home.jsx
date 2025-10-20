import React from 'react'
import './Home.css'
import Footer from '../components/Footer'
import Land from './Land'
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
            <div className='page-container'>
                <div className="content-wrap">
                <div className="landimg d-flex justify-content-center align-items-center" >
                    <div className="blur-box">
                        <h2 className="text-center">Designed to get hired.</h2>
                        <h3 className="text-center">Your skills, your story, your next job — all in one.</h3>
                        <div className="text-center">
                           <Link to="/land"> <button className="text-center clr">MAKE YOUR RESUME</button></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='st'>
                    <div className='stc'>
                        <h3 className='text-center p-5'>Tools</h3>
                        <div  class="container">  
                            <div class="row">
                                <div class="col-6">
                                    <h3>Resume</h3>
                                    <h6>Create unlimited new resumes and easily edit them afterwards.</h6>
                                    <h3>Cover Letters</h3>
                                    <h6>Easily write professional cover letters.</h6>
                                    <h3>Jobs</h3>
                                    <h6>Automatically receive new and relevant job postings.</h6>
                                    <h3>Applications</h3>
                                    <h6>Effortlessly manage and track your job applications in an organized manner.</h6>
                                </div>
                                <div class="col-6 text-center">
                                    <img width="70%" alt="" src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png"></img>
                                </div>
                            </div>
                        </div>

                       

                    </div>
                    
                    <div className='height'>

                    </div>

                    <div className='stc'>
                        <h3 className='text-center p-5'>Testimony</h3>
                        <div  class="container">  
                            <div class="row">
                                <div class="col-6">
                                    <h3 className='lines'>Trusted by professionals worldwide.</h3>
                                   <p className="lines">At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>

<p className='lines'>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>

<p className="lines">Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
                                </div>
                                <div class="col-6 text-center">
                                   <div class="row">
                                        <div className="col-3">
                                            <div className='mb-3 '><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" /></div>
                                            <div className='mb-3'><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" /></div>
                                            <div className='mb-3'><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" /></div>
                                         </div>
                                        <div className='col-3'>
                                            <div className='mb-3'><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" /></div>
                                            <div className='mb-3'><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" /></div>
                                            <div className='mb-3'><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" /></div>
                                        </div>
                                        <div className='col-3'>
                                             <div className='mb-3'><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" /></div>
                                              <div className='mb-3'><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" /></div>
                                               <div className='mb-3'><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" /></div>
                                        </div>
                                        <div className='col-3'>
                                            <div className='mb-3'><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="" /></div>
                                            <div className='mb-3'><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="" /></div>
                                            <div className='mb-3'><img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="" /></div>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            <Footer marginTop="350px" />
                
            </div>
           
        </>
    )
}

export default Home