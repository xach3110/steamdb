// Footer.jsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>ABOUT</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Discord Bot</a></li>
            <li><a href="#">FAQ &amp; help</a></li>
            <li><a href="#">Donate &amp; contribute</a></li>
            <li><a href="#">Browser extension</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>TOOLS</h4>
          <ul>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Charts</a></li>
            <li><a href="#">Calculator</a></li>
            <li><a href="#">Patch notes</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Instant search</a></li>
            <li><a href="#">When is next sale?</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>TRACKING</h4>
          <ul>
            <li><a href="#">Bundles</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Price changes</a></li>
            <li><a href="#">Free promotions</a></li>
            <li><a href="#">Engines &amp; technologies</a></li>
            <li><a href="#">Game releases by year</a></li>
            <li><a href="#">Steam Status</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>DATABASE</h4>
          <ul>
            <li><a href="#">Game tags</a></li>
            <li><a href="#">Release calendar</a></li>
            <li><a href="#">Upcoming releases</a></li>
            <li><a href="#">Most followed upcoming</a></li>
            <li><a href="#">Profile badges</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Publishers</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>RANKINGS</h4>
          <ul>
            <li><a href="#">Top rated games</a></li>
            <li><a href="#">Top game owners</a></li>
            <li><a href="#">Top profile levels</a></li>
            <li><a href="#">Top selling games</a></li>
            <li><a href="#">Top selling games last week</a></li>
            <li><a href="#">Most followed games</a></li>
            <li><a href="#">Most wishlisted games</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>ACCOUNT</h4>
          <ul>
            <li><a href="#">Sign in via Steam</a></li>
            <li><a href="#">Free packages</a></li>
            <li><a href="#">Steam Web API</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-note">
        <p>
          SteamDB is a hobby project and is not affiliated with Valve or Steam. All times on the site are UTC. 
          <a href="#">Fair use disclaimer</a> · <a href="#">Privacy</a><br />
          Steam and the Steam logo are trademarks of Valve Corporation. All other trademarks are property of their respective owners.
        </p>
      </div>
    </footer>
  );
}