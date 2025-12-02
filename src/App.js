import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Student Finance Tracker</h1>
      </header>

      {/* Main Content */}
      <main className="main-content">
        
        {/* Current Spending Section */}
        <section className="current-spending">
          <h2>Current Spending</h2>
          {/* TODO: Display current month/week spending */}
          {/* TODO: Show breakdown by category (food, transport, etc) */}
          <p>Placeholder for current spending data</p>
        </section>

        {/* Projected Spending Section */}
        <section className="projected-spending">
          <h2>Projected Spending</h2>
          {/* TODO: Show estimated spending for remainder of period */}
          {/* TODO: Add projections based on current trends */}
          <p>Placeholder for projected spending data</p>
        </section>

        {/* Budget Overview Section */}
        <section className="budget-overview">
          <h2>Budget Overview</h2>
          {/* TODO: Display total budget vs actual spending */}
          {/* TODO: Show progress bars or charts */}
          <p>Placeholder for budget overview</p>
        </section>

        {/* Financial Advice Section */}
        <section className="advice">
          <h2>Financial Advice</h2>
          {/* TODO: Generate personalized tips based on spending patterns */}
          {/* TODO: Show alerts if overspending in categories */}
          <p>Placeholder for financial advice and tips</p>
        </section>

        {/* Add Expense Button */}
        <section className="actions">
          <button className="expense-button">Add Expense</button>
          {/* TODO: Add modal/form to input new expenses */}
          {/* TODO: Add button to set/edit budget */}
        </section>

      </main>
    </div>
  );
}

export default App;
