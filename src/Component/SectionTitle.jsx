

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div>
          <div>
          <p className="text-3xl text-center text-yellow-600 py-3">-----{subHeading}-------</p>
          <h1 className="text-4xl text-center border-y-4 py-4">{heading}</h1>
            
          </div>
        </div>
    );
};

export default SectionTitle;