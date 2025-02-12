import React from 'react';

const Heading = ({ Heading1, Heading2, Paragraph, paragraphWidth }) => {
    return (
        <div className="container">
            {/* Heading with dynamic width using Tailwind CSS breakpoints */}
            <h2 className={`text-center w-full mx-auto`}>
                {Heading1}&nbsp;
                <span className="text-[#989898]">{Heading2}</span>
            </h2>

            {/* Paragraph with dynamic width using Tailwind CSS breakpoints */}
            <p className={`text-center text-secondary ${paragraphWidth || 'w-full sm:w-1/2  lg:w-[50%] md:w-9/12 '} mx-auto`}>
                {Paragraph}
            </p>
        </div>
    );
}

export default Heading;
