import React, { useState, useEffect } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

import { getskillAsync } from "../../features/login/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import Multiselect from "multiselect-react-dropdown";


const Profile = () => {

    const {error,skillData} = useSelector(
        (state) =>state.userSkill
    );

    useEffect(()=>{
        if(skillData){
            console.log(skillData,"skilll data   aa");
            setskill(skillData);
        }
    },[skillData])
    
    const dispatch = useDispatch();
    let user = JSON.parse(localStorage.getItem("loginUser"));
    const [job, setjob] = useState([]);
    const [skills, setskill] = useState([]);
    const [country, setcountry] = useState([]);
    const [state, setstate] = useState([]);
    const [val, setval] = useState([]);
    const [work, setwork] = useState([]);
    const [source, setSource] = useState();
    const [respdf, setRespdf] = useState();
    const [testimonial, setTestimonial] = useState();
    const token = user.token;
   
    const [formData, setFormData] = useState({ first_name: "", last_name: "", email: "", mobile: "", designation: "", salary: "", currency: "", experience: "", about: "", dob: "", gender: "", employment_status: "", job_preference: "", image: "", title: "", country: "" });
    
  
    console.log(user,"userrrrrrr")

    useEffect(() => {
       
        dispatch(getskillAsync(formData));
        if (user !== '') {
            setFormData(formData => ({

                ...formData,
                first_name: user?.first_name,
                last_name: user?.last_name,
                email: user?.email,
                mobile: user?.mobile,
                designation: user?.designation,
                salary: user?.salary,
                currency: user?.currency,
                experience: user?.experience,
                about: user?.about,
                dob: user?.dob,
                gender: user?.gender,
                employment_status: user?.employment_status,
                job_preference: user?.job_preference,
                title: user?.title,
                country: user?.country,
                image: user?.image

            }))
        }
    }, [])

    const changeSkills = ()=>{
        let selectSkill = skills.map(item =>{
           return item.id;
        });

        console.log(selectSkill,"select skilll")
    }


    return (


        <>
            <div className="page-wrapper dashboard">
                <Header />
                <SideBar />
                <section className="user-dashboard">
                    <div className="dashboard-outer">
                        <div className="upper-title-box">
                            <h3>My Profile</h3>
                            <div className="text">Ready to jump back in?</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">

                                <div className="ls-widget">
                                    <div className="tabs-box">
                                        <div className="widget-title">
                                            <h4>My Profile</h4>
                                        </div>

                                        <div className="widget-content">

                                            <div className="uploading-outer">
                                                <div className="uploadButton">
                                                    <input className="uploadButton-input" type="file" name="attachments[]" accept="image/*, application/pdf" id="upload" multiple />
                                                    <label className="uploadButton-button ripple-effect" htmlFor="upload">Browse Logo</label>
                                                    <span className="uploadButton-file-name"></span>
                                                </div>
                                                <div className="text">Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png</div>
                                            </div>

                                            <form className="default-form">
                                                <div className="row">

                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>First Name</label>
                                                        <input type="text" name="first_name" value={formData?.first_name} />
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Last Name</label>
                                                        <input type="text" name="last_name" value={formData?.last_name} />
                                                    </div>

                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Email address</label>
                                                        <input type="text" name="email" value={formData?.email} />
                                                    </div>

                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Phone</label>
                                                        <input type="text" name="mobile" value={formData?.mobile} />
                                                    </div>




                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Desination</label>
                                                        <input type="text" name="designation" value={formData?.designation} />
                                                    </div>

                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Date of birth</label>
                                                        <input type="text" name="dob" value={formData?.dob} />
                                                    </div>


                                                    <div className="form-group col-lg-3 col-md-12">
                                                        <label>Gender</label>
                                                        <select onSelect={formData?.gender} className="chosen-select">
                                                            <option value="">select</option>
                                                            <option value="Male"> Male </option>
                                                            <option value="Female">Female</option>

                                                        </select>
                                                    </div>


                                                    <div className="form-group col-lg-3 col-md-12">
                                                        <label>Expected Salary($)</label>
                                                        <input type="text" name="salary" value={formData?.salary}/>
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Experience</label>
                                                        <input type="text" name="experience" value={formData?.experience} />
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Employment Type</label>
                                                        <select onSelect={formData.employment_status} className="chosen-select">

                                                            <option value="Full Time">Full Time</option>
                                                            <option value="Part Time">Part Time</option>
                                                            <option value="Contract">Contract</option>
                                                            <option value="Remote">Remote</option>
                                                        </select>
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Skills</label>
                                                        
                                                    <Multiselect
                                                        options={skills} // Options to display in the dropdown
                                                        selectedValues='' // Preselected value to persist in dropdown
                                                         onSelect={changeSkills} // Function will trigger on select event                                               
                                                        displayValue="name"
                                                        id='id'
                                                        placeholder='key Skills'
                                                        showCheckbox
                                                       
                                                       
                                                    />
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Languages</label>
                                                        <input type="text" name="name" placeholder="English, Turkish" />
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Categories </label>
                                                        <select data-placeholder="Categories" className="chosen-select multiple" multiple tabindex="4">
                                                            <option value="Banking">Banking</option>
                                                            <option value="Digital&Creative">Digital & Creative</option>
                                                            <option value="Retail">Retail</option>
                                                            <option value="Human Resources">Human Resources</option>
                                                            <option value="Management">Management</option>
                                                        </select>
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Allow In Search & Listing</label>
                                                        <select className="chosen-select">
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </select>
                                                    </div>


                                                    <div className="form-group col-lg-12 col-md-12">
                                                        <label>Description</label>
                                                        <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <button className="theme-btn btn-style-one">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>


                                <div className="ls-widget">
                                    <div className="tabs-box">
                                        <div className="widget-title">
                                            <h4>Social Network</h4>
                                        </div>

                                        <div className="widget-content">
                                            <form className="default-form">
                                                <div className="row">

                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Facebook</label>
                                                        <input type="text" name="name" placeholder="www.facebook.com/Invision" />
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Twitter</label>
                                                        <input type="text" name="name" placeholder="" />
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Linkedin</label>
                                                        <input type="text" name="name" placeholder="" />
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Google Plus</label>
                                                        <input type="text" name="name" placeholder="" />
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <button className="theme-btn btn-style-one">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>


                                <div className="ls-widget">
                                    <div className="tabs-box">
                                        <div className="widget-title">
                                            <h4>Contact Information</h4>
                                        </div>

                                        <div className="widget-content">
                                            <form className="default-form">
                                                <div className="row">

                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Country</label>
                                                        <select className="chosen-select">
                                                            <option>Australia</option>
                                                            <option>Pakistan</option>
                                                            <option>Chaina</option>
                                                            <option>Japan</option>
                                                            <option>India</option>
                                                        </select>
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>City</label>
                                                        <select className="chosen-select">
                                                            <option>Melbourne</option>
                                                            <option>Pakistan</option>
                                                            <option>Chaina</option>
                                                            <option>Japan</option>
                                                            <option>India</option>
                                                        </select>
                                                    </div>


                                                    <div className="form-group col-lg-12 col-md-12">
                                                        <label>Complete Address</label>
                                                        <input type="text" name="name" placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia." />
                                                    </div>


                                                    <div className="form-group col-lg-6 col-md-12">
                                                        <label>Find On Map</label>
                                                        <input type="text" name="name" placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia." />
                                                    </div>

                                                    <div className="form-group col-lg-3 col-md-12">
                                                        <label>Latitude</label>
                                                        <input type="text" name="name" placeholder="Melbourne" />
                                                    </div>


                                                    <div className="form-group col-lg-3 col-md-12">
                                                        <label>Longitude</label>
                                                        <input type="text" name="name" placeholder="Melbourne" />
                                                    </div>


                                                    <div className="form-group col-lg-12 col-md-12">
                                                        <button className="theme-btn btn-style-three">Search Location</button>
                                                    </div>


                                                    <div className="form-group col-lg-12 col-md-12">
                                                        <div className="map-outer">
                                                            <div className="map-canvas map-height" data-zoom="12" data-lat="-37.817085" data-lng="144.955631" data-type="roadmap" data-hue="#ffc400" data-title="Envato" data-icon-path="images/resource/map-marker.png" data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="form-group col-lg-12 col-md-12">
                                                        <button className="theme-btn btn-style-one">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>

    )
};

export default Profile;