import React from 'react';

const ClientsSection = () => {
    return (
        <>
            <section className="clients-section">
                <div className="sponsors-outer wow fadeInUp">
                  
                    <ul className="sponsors-carousel owl-carousel owl-theme">
                        <li className="slide-item">
                            <figure className="image-box"><a href="#"><img src="images/clients/1-1.png" alt="" /></a></figure>
                        </li>
                        <li className="slide-item">
                            <figure className="image-box"><a href="#"><img src="images/clients/1-2.png" alt="" /></a></figure>
                        </li>
                        <li className="slide-item">
                            <figure className="image-box"><a href="#"><img src="images/clients/1-3.png" alt="" /></a></figure>
                        </li>
                        <li className="slide-item">
                            <figure className="image-box"><a href="#"><img src="images/clients/1-4.png" alt="" /></a></figure>
                        </li>
                        <li className="slide-item">
                            <figure className="image-box"><a href="#"><img src="images/clients/1-5.png" alt="" /></a></figure>
                        </li>
                        <li className="slide-item">
                            <figure className="image-box"><a href="#"><img src="images/clients/1-6.png" alt="" /></a></figure>
                        </li>
                        <li className="slide-item">
                            <figure className="image-box"><a href="#"><img src="images/clients/1-7.png" alt="" /></a></figure>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default ClientsSection;