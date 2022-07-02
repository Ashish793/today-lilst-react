function Plan(props) {
  return (
    <>
      <div className="card text-dark mb-1">
        <div className="card-body">
          <li>
            <div className="row">
              <div className="col-md-1 mt-2">{props.id + 1}</div>
              <div className="col-md-9 mt-2">{props.value}</div>
              <div className="col-md-2 p-0 text-center mr-2">
              <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      props.sendData(props.id);
                    }}
                  >
                    DELTE
                  </button>
              </div>
            </div>
          </li>
        </div>
      </div>
    </>
  );
}
export default Plan;
