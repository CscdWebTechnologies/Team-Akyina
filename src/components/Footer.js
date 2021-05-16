import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterWrap">
        <div className="FooterWrap1">
          <div className="FooterWrap2">
            <div className="FooterWrap3">
              <div className="FooterWrap2">
                <div className="FooterWrap4">
                  <img
                    src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
                    alt=""
                    className="family"
                  />
                  <select
                    aria-label="Language selector"
                    className="genus"
                  >
                    <option value="de">Deutsch</option>
                    <option selected="" value="en">
                      English
                    </option>
                    <option value="es">Español - España</option>
                    <option value="es-LA">Español - América Latina</option>
                    <option value="fr">Français - France</option>
                    <option value="id">Bahasa Indonesia</option>
                    <option value="it">Italiano</option>
                    <option value="ko">한국어</option>
                    <option value="pl">Polski</option>
                    <option value="pt">Português - Brasil</option>
                    <option value="pt-PT">Português - Portugal</option>
                    <option value="ru">Pусский</option>
                    <option value="th">ไทย</option>
                    <option value="tr">Türkçe</option>
                  </select>
                </div>
              </div>

              <div className="species">
                <div className="Copyright">© 2021 Coinbase</div>
                <div className="banks">
                  <a href="/" className="kingdom">
                    Blog
                  </a>
                  <span className="manager">•</span>
                  <a href="/" className="kingdom">
                    Twitter
                  </a>
                  <span className="manager">•</span>
                  <a href="/" className="kingdom">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/**Footer grid 2 */}
          <div className="bezos">
            <div>
              <div className="phylum">
                <h2 className="order">Company</h2>
                <a href="/" className="kingdom">
                  About
                </a>
                <a href="/" className="kingdom">
                  Careers
                </a>
                <a href="/" className="kingdom">
                  Affiliates
                </a>
                <a href="/" className="kingdom">
                  Blog
                </a>
                <a href="/" className="kingdom">
                  Press
                </a>
                <a href="/" className="kingdom">
                  Investors
                </a>
                <a href="/" className="kingdom">
                  Legal &amp; privacy
                </a>
                <a href="/" className="kingdom">
                  Cookie policy
                </a>
              </div>
              <div className="phylum">
                <h2 className="order">Learn</h2>
                <a href="/" className="kingdom">
                  Browse crypto prices
                </a>
                <a href="/" className="kingdom">
                  Crypto basics
                </a>
                <a href="/" className="kingdom">
                  Tips &amp; tutorials
                </a>
                <a href="/" className="kingdom">
                  Market updates
                </a>
                <a href="/" className="kingdom">
                  What is Bitcoin?
                </a>
                <a href="/" className="kingdom">
                  What is crypto?
                </a>
                <a href="/" className="kingdom">
                  What is a blockchain?
                </a>
                <a href="/" className="kingdom">
                  How to set up a crypto wallet
                </a>
                <a href="/" className="kingdom">
                  How to send crypto
                </a>
                <a href="/" className="kingdom">
                  Taxes
                </a>
              </div>
            </div>
            <div>
              <div className="phylum">
                <h2 className="order">Individuals</h2>
                <a href="/" className="kingdom">
                  Buy &amp; sell
                </a>
                <a href="/" className="kingdom">
                  Earn free crypto
                </a>
                <a href="/" className="kingdom">
                  Wallet
                </a>
                <a href="/" className="kingdom">
                  Card
                </a>
              </div>
              <div class="phylum">
                <h2 class="order">Businesses</h2>
                <a href="/" className="kingdom">
                  Prime
                </a>
                <a href="/" className="kingdom">
                  Custody
                </a>
                <a href="/" className="kingdom">
                  Asset Hub
                </a>
                <a href="/" className="kingdom">
                  Commerce
                </a>
              </div>
              <div class="phylum">
                <h2 class="order">Developers</h2>
                <a href="/" className="kingdom">
                  Coinbase Cloud
                </a>
                <a href="/" className="kingdom">
                  Connect
                </a>
                <a href="/" className="kingdom">
                  Commerce
                </a>
                <a href="/" className="kingdom">
                  Pro
                </a>
                <a href="/" className="kingdom">
                  Bison Trails
                </a>
                <a href="/" className="kingdom">
                  WalletLink
                </a>
                <a href="/" className="kingdom">
                  Rosetta
                </a>
                <a href="/" className="kingdom">
                  USDC
                </a>
              </div>
            </div>
            <div>
              <div className="phylum">
                <h2 className="order">Support</h2>
                <a href="/" className="kingdom">
                  Help center
                </a>
                <a href="/" className="kingdom">
                  Contact us
                </a>
                <a href="/" className="kingdom">
                  Create account
                </a>
                <a href="/" className="kingdom">
                  ID verification
                </a>
                <a href="/" className="kingdom">
                  Account information
                </a>
                <a href="/" className="kingdom">
                  Payment methods
                </a>
                <a href="/" className="kingdom">
                  Account access
                </a>
                <a href="/" className="kingdom">
                  Supported crypto
                </a>
                <a href="/" className="kingdom">
                  Supported countries
                </a>
                <a href="/" className="kingdom">
                  Status
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
