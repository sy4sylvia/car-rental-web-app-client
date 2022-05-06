// import React, {useState,useRef } from 'react';
// import {useNavigate} from "react-router-dom";
//
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import axios from "axios";
//
// function EditVehicleClass(){
//     const required = (value) => {
//         if (!value) {
//             return (
//                 <div className="alert alert-danger" role="alert">
//                     This field is required!
//                 </div>
//             );
//         }
//     };
//
//     const form = useRef();
//     const checkBtn = useRef();
//     const [loading, setLoading] = useState(false);
//     const [message, setMessage] = useState("");
//
//     const[overMileageFee, setOverMileageFee] = useState("");
//     const handleOverMileageFeeChange = (event) => {
//         setOverMileageFee(event.target.value);
//     }
//
//     const[rentalRate, setRentalRate] = useState("");
//     const handleRentalRateChange = (event) => {
//         setRentalRate(event.target.value);
//     }
//     const[className, setClassName] = useState("");
//
//     const handleClassNameChange = (event) => {
//         setClassName(event.target.value);
//     }
//
//     // const [vehicleClassInfo, setVehicleClassInfo] = useState({
//     //     overMileageFee: "",
//     //     rentalRate: "",
//     //     className: ""
//     // });
//
//
//     // const handleVehicleClassChange = (event) => {
//     //     setVehicleClassInfo(event.target.value);
//     // }
//
//     // const handleVehicleChange = (event) => {
//     //     setVehicleInfo(event.target.value);
//     // }
//
//     const handleEditVehicleClass = event => {
//         event.preventDefault();
//
//         //testing
//         alert("Edited vehicle information successfully!");
//         console.log("Edited vehicle class information successfully!");
//         axios.post("http://127.0.0.1:5000/edit-vehicle-class", {
//
//
//
//
//         }).then(function (response) {
//             console.log(response);
//         }).catch(function (error) {
//             console.log(error);
//         });
//
//
//         setMessage("");
//         setLoading(true);
//         // form.current.validateAll();
//
//     }
//
//     let navigate = useNavigate();
//
//
//     return (
//         <div className="container">
//             <h1>Edit Vehicle Information</h1>
//
//             <br/>
//             <Form onSubmit={handleEditVehicleClass} name = "information" ref={form}>
//
//                 <div className="input-container">
//                     <label>Class Name</label>
//                     <Input onChange = {} type="text"
//                            placeholder="Class Name" defaultValue={vehicleClassInfo.className}
//                            validations={[required]} />
//                 </div>
//
//                 <div className="input-container">
//                     <label>Rental Rate</label>
//                     <Input onChange = {handleVehicleClassChange} type="text"
//                            placeholder="Rental Rate" defaultValue={vehicleClassInfo.rentalRate}
//                            validations={[required]} />
//                 </div>
//
//
//
//                 <div className="input-container">
//                     <label>Over Mileage Fee</label>
//                     <Input onChange = {handleVehicleClassChange} type="text"
//                            placeholder="Over Mileage Fee" defaultValue={vehicleClassInfo.overMileageFee}
//                            validations={[required]} />
//                 </div>
//
//
//
//
//
//                 <br/>
//
//                 <div className="input-container">
//                     <label>Make</label>
//                     <Input onChange = {handleVehicleChange} type="text"
//                            placeholder="Make" defaultValue={vehicleInfo.make}
//                            validations={[required]} />
//                 </div>
//
//                 <div className="input-container">
//                     <label>Year of Manufacturing</label>
//                     <Input onChange = {handleVehicleChange} type="text"
//                            placeholder="Year" defaultValue={vehicleInfo.year}
//                            validations={[required]} />
//                 </div>
//                 <div className="input-container">
//                     <label>VIN</label>
//                     <Input onChange = {handleVehicleChange} type="text"
//                            placeholder="VIN" defaultValue={vehicleInfo.vin}
//                            validations={[required]} />
//                 </div>
//                 <div className="input-container">
//                     <label>License Plate Number</label>
//                     <Input onChange = {handleVehicleChange} type="text"
//                            placeholder="License Plate No" defaultValue={vehicleInfo.licencePlateNumber}
//                            validations={[required]} />
//                 </div>
//
//
//                 {/*<button onClick={routeChange}>Log in</button>*/}
//                 <div>
//                     <button onClick>Confirm Update</button>
//                 </div>
//
//                 <br />
//
//                 <div>
//                     <button onClick={() => {
//                         navigate('/employee-profile')}}>
//                         Go Back</button>
//                 </div>
//
//             </Form>
//
//         </div>
//     );
// }
//
// export default EditVehicleClass;