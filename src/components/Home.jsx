import All from "./All";

const Home = () => {
  let data = [
    {
      Course: "Full Stack Development",
      Description:
        "A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets.",
    },
    {
      Course: "Cyber Security",
      Description:
        "Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security",
    },
    {
      Course: "Data science",
      Description:
        "Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from potentially noisy, structured, or unstructured data.",
    },
    {
      Course: "Web development",
      Description:
        "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => {
          return <All item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
