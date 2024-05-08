const DataScience = () => {
  const Carddata = [
    {
      id: 1,
      name: "Data Analyst",
      price: 75000,
      description:
        "Before we move into the next section, ensure you have a good grip on data science essentials like Python, MongoDB, Pandas, NumPy, Tableau & PowerBI Data Methods. If you are looking for a detailed course on Data Science, you can join GUVI’s Data Science Career Program with Placement Assistance. You'll also learn about the trending tools and technologies and work on some real-time projects.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Data-Analyst.png",
    },
    {
      id: 2,
      name: "Business Analyst",
      price: 55000,
      description:
        "Business analysts bridge the gap between data science and business operations. They use data to identify opportunities for improvement, develop strategies, and communicate findings to key stakeholders.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Business-Analyst.png",
    },
    {
      id: 3,
      name: "Data Scientist Manager",
      price: 65000,
      description:
        "Data science managers oversee the entire data science team, ensuring that projects are on track and aligned with the company's objectives. They may not code themselves but understand the technical aspects of data science.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Data-Scientist-Manager.png",
    },
    {
      id: 4,
      name: "Data Science Consultant",
      price: 75000,
      description:
        "Consultants provide expert advice to businesses on data science strategies and solutions. They don't necessarily code but guide organizations on how to leverage data for competitive advantages.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Data-Science-Consultant.png",
    },
    {
      id: 5,
      name: "Machine Learning Engineer",
      price: 98000,
      description:
        "While this role typically involves coding, there’s a growing demand for Machine Learning Engineers with a strong focus on model deployment and optimization rather than writing code from scratch. They ensure models work efficiently in a production environment.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Machine-Learning-Engineer.png",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-center p-3 bg-warning">DATA SCIENCE</h1>
      <div className="row">
        {Carddata.map((data) => (
          <div className="col-md-4 mt-3" key={data.id}>
            <div className="card">
              <img
                src={data.image}
                className="card-img-top"
                style={{ width: "100%", height: "20%" }}
              />
              <div className="card-body">
                <h1 className="card-title" style={{ fontSize: "100%" }}>
                  {data.name}
                </h1>
                <p
                  className="card-text"
                  style={{ overflow: "scroll", height: "200px" }}
                >
                  {data.description}
                </p>
                <strong>PROGRAMM FEE : {data.price}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataScience;
