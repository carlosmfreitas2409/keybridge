import './styles.css';

export function App() {
  return (
    <div className="command-bar">
      <div className="navigation-bar">
        <input type="text" placeholder="Search for apps and commands..." />
      </div>

      <div className="action-bar">
        <span>Store</span>

        <div>
          <span>Show more</span>
          <div></div>
        </div>
      </div>
    </div>
  );
}
