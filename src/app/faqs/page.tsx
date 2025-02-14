

import React from "react";


const Faqs =() => {

    return(
        <div className="flex flex-col items-center px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-6">
                <h1 className="text-[50px] font-bold mb-4">Questions Looks Here</h1>
                <p className="text-gray-600 max-w-2xl">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                </p>
            </div>

            {/* FAQ Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">What types of chairs do you offer?</h3>
                        <i className="fas fa-plus"></i>
                    </div>
                    <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">How can we get in touch with you?</h3>
                        <i className="fas fa-plus"></i>
                    </div>
                    <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Do your chairs come with a warranty?</h3>
                        <i className="fas fa-plus"></i>
                    </div>
                    <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">What will be delivered? And When?</h3>
                        <i className="fas fa-plus"></i>
                    </div>
                    <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Can I try a chair before purchasing?</h3>
                        <i className="fas fa-plus"></i>
                    </div>
                    <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">How do I clean and maintain my Comforty chair?</h3>
                        <i className="fas fa-plus"></i>
                    </div>
                    <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>
            </div>
        </div>
    );
};
    
export default Faqs