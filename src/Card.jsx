function Card(details) {
    return (
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{details.planName}</h5>
            <h6 className="card-price text-center">${details.price}<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.users}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.storage}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.public}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{details.access}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{details.private}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{details.support}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{details.subdomain}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{details.report}</li>
            </ul>
            <hr />
            <div className="d-grid">
              <button className="btn btn-primary text-uppercase">Button</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Card;