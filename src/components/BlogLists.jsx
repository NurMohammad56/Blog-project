import { Link } from "react-router-dom";

const BlogLists = (props) => {
  return (
    <div>
      <div className="lg:Container  lg:mx-auto my-16 p-9">
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {props.list.map((item, i) => {
            return (
              <Link
                key={i}
                to={"/details/" + item["id"]}
                className="card w-100 glass"
              >
                <figure>
                  <img src={item["img"]} alt="Card" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item["title"]}</h2>
                  <p>{item["short"]}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogLists;
