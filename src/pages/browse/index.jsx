import registry from "./browse.registry.json";
// import "../../styles/browse.scss";

function Icon({ type }) {

  switch (type) {

    case "radio":
      return <span className="browse-icon browse-icon--radio" />;

    case "checkbox":
      return <span className="browse-icon browse-icon--checkbox" />;

    case "star":
      return <span className="browse-icon browse-icon--star" />;

    case "text":
      return <span className="browse-icon browse-icon--text" />;

    default:
      return <span className="browse-icon browse-icon--generic" />;
  }
}

function Question({ q }) {

  return (
    <div className="browse-question">

      <h3 className="browse-question__title">
        {q.title}
      </h3>

      {q.description && (
        <p className="browse-question__desc">
          {q.description}
        </p>
      )}

      {q.items.length > 0 ? (

        <ul className="browse-list">

          {q.items.map((item, i) => (
            <li key={i}>
              <Icon type={q.icon} />
              <span>{item}</span>
            </li>
          ))}

        </ul>

      ) : (

        <div className="browse-placeholder">
          Text response
        </div>

      )}

    </div>
  );
}

export default function BrowsePage() {

  return (

    <div className="content">

      <div className="page">

        <h1 className="browse-title">
          Survey Browse Mode
        </h1>

        {registry.map(page => (

          <section
            key={page.name}
            className="browse-section"
          >

            <h2 className="browse-section__title">
              {page.title}
            </h2>

            {page.questions.map(q => (
              <Question key={q.name} q={q} />
            ))}

          </section>

        ))}

      </div>

    </div>
  );
}