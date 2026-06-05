export default function Pricing() {
  return (
    <main className="section">
      <div className="container">
        <h1>Pricing</h1>
        <div className="grid3">
          <div className="card">
            <h2>Per‑violation workflow</h2>
            <p><strong>$199–$499</strong> per incident</p>
            <ul>
              <li>Jurisdiction‑aware guided steps</li>
              <li>Document checklist and tracking</li>
              <li>Expert matching</li>
            </ul>
          </div>
          <div className="card">
            <h2>Subscription</h2>
            <p><strong>$99–$499/mo</strong></p>
            <ul>
              <li>Multi‑site tracking and reminders</li>
              <li>AI Compliance Search</li>
              <li>Priority support</li>
            </ul>
          </div>
          <div className="card">
            <h2>Marketplace</h2>
            <p><strong>15–25% commission</strong></p>
            <ul>
              <li>Consultant and remediation bookings</li>
              <li>Vendor profiles and leads</li>
              <li>Transparent SLAs</li>
            </ul>
          </div>
        </div>
        <a className="btn" href="/demo" style={{ marginTop: 18, display: "inline-block" }}>
          Request a demo
        </a>
      </div>
    </main>
  );
}
