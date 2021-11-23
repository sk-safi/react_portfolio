import React , { useState } from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form"; 



const Contact = () =>{

    const [successMessage , setSuccessMessage] = useState("");
    const { register , handleSubmit , formState: { errors } } = useForm();

    const serviceID= "service_ID";
    const templateID= "template_ID";
    const userID = "user_mOax7M4fp4Lv4ClJXOtj7";

    const onSubmit = (data , r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();    
    }

    const sendEmail = (serviceID, templateID, veriables, userID) => {
    
    
        emailjs.send('serviceID', 'templateID', veriables, 'userID')
          .then(() => {
            setSuccessMessage("form sent successfully");
          }).catch(err=> console.error('something went wrong ${err}'));
      };
    

    return(
        <div id="contact" className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p> please fill out the form for contact with me</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/*NAME INPUT*/}
                            <div className="text-center">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                {...register("name",{required: "enter your name",
                                                    maxLength:{value:20,
                                                                message:"name length within 20 "}})
                                }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-massage">
                                {errors.name && errors.name.message}
                            </span>
                            {/*Phone input*/}
                            <div className="text-center">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Phone-Number"
                                name="phone"
                                {...register("phone",{required: "enter your phone number"})
                                }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-massage">
                                {errors.phone && errors.phone.message}
                            </span>
                            {/*NAME INPUT*/}
                            <div className="text-center">
                                <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                {...register("email",{required: "enter your email",
                                                    pattern:{
                                                        value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                                        message:"invalid email"
                                                    }
                                                    })
                                }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-massage">
                                {errors.email && errors.email.message}
                            </span>
                            {/*subject*/}
                            <div className="text-center">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                {...register("subject",{required: "OOPs!, you forgot the subject"})
                                }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-massage">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */ }
                            <div className="text-center">
                                <textarea
                                type="text"
                                className="form-control"
                                placeholder="Write your comments"
                                name="description"
                                {...register("description",{required: "describe shortly"})
                                }
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-massage">
                                {errors.description && errors.description.message}
                            </span>
                            <button className=" btn-main-offer contact-btn" type="submit">Contact Me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Contact;