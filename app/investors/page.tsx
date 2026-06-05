export default function Investors() {
  return (
    <main className="section">
      <div className="container">
        <h1>Investors</h1>
        <p>EnviroComply is the first unified Environmental Compliance as a Service platform.</p>
        <div className="grid3">
          <div className="stat"><div className="n">$54B</div><div>TAM</div></div>
          <div className="stat"><div className="n">$12B</div><div>SAM</div></div>
          <div className="stat"><div className="n">$150M</div><div>SOM</div></div>
        </div>
        <ul className="inline" style={{ marginTop: 16 }}>
          <li>Avg take rate ~20%</li>
          <li>~70% gross margin (target)</li>
          <li>Break‑even ≈ 15 violations/yr</li>
        </ul>
        <h2 style={{ marginTop: 24 }}>Early signals</h2>
        <ul>
          <li>Pipeline: X qualified prospects in PA/TX</li>
          <li>Experts: Y credentialed specialists onboarded</li>
          <li>First paid workflow or LOIs</li>
        </ul>
        <a className="btn" href="/EnviroComply-OnePager.pdf">Download one‑pager</a>
      </div>
    </main>
  );
}
