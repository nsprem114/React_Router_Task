const Fsd = () => {
  const Carddata = [
    {
      id: 1,
      name: "E-Commerce Website",
      price: 35000,
      description:
        "The very first and best full-stack development project idea is creating an e-commerce website/application. As e-commerce websites require almost every concept of full-stack development that is from the front-end to the back-end, starting your career with this project can really upscale your skillset.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
    },
    {
      id: 2,
      name: "Online Learning App",
      price: 45000,
      description:
        "The next best full-stack development project idea is creating an online learning app. Creating this application will help you in adding value to your resume Begin by defining the platform’s objectives, selecting a suitable tech stack for both frontend and backend development, and designing a robust database architecture to store user data and course content.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Learning-apps.webp",
    },
    {
      id: 3,
      name: "Social Media Platform",
      price: 25000,
      description:
        "Creating a social media platform is another easy yet exciting full-stack development project. You need to have features like creating profiles, adding pictures to your profile, connecting with friends, etc. You need to be good in skills like programming languages, frameworks such as React or Angular, and database management systems.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Social-media-platforms-1.webp",
    },
    {
      id: 4,
      name: "Task Management Application",
      price: 75000,
      description:
        "Task Management Application is another best full-stack development projects that beginners should definitely try. To build this application, you need to have a quality knowledge of programming languages (JavaScript, Python, Java), frameworks, database management systems, APIs, etc.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Full-stack-development-project-ideas.webp",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-center p-3 bg-warning">FULL STACK DEVELOPMENT</h1>
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

export default Fsd;
