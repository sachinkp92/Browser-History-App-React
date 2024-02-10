import "./index.css";

function HistoryItem(props) {
  let { historyDetails, deleteHistory } = props;
  let { timeAccessed, logoUrl, title, domainUrl, id } = historyDetails;
  let onDeleteItem = () => {
    deleteHistory(id);
  };
  return (
    <li className="history">
      <p className="time-stamp">{timeAccessed}</p>
      <div className="domain-details-container">
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  );
}

export default HistoryItem;
