import { useCallback } from "react";
import styles from "./home-dev.module.css";

const HomeDev = () => {
  const onButtonClick = useCallback(() => {
    window.location.href = "https://app.one.ie/login";
  }, []);

  const onButton1Click = useCallback(() => {
    window.location.href = "https://app.one.ie/register";
  }, []);

  const onButton2Click = useCallback(() => {
    window.location.href = "https://app.one.ie/register";
  }, []);

  return (
    <div className={styles.homeDevDiv}>
      <div className={styles.topDiv}>
        <div className={styles.topDiv1}>
          <div className={styles.topMiddleDiv}>
            <div className={styles.logoDiv}>
              <div className={styles.oNEDiv}>
                <div className={styles.oNEDiv1}>
                  <img className={styles.oNEIcon} alt="" src="../one@2x.png" />
                </div>
              </div>
            </div>
            <div className={styles.actionsDiv}>
              <button className={styles.button} onClick={onButtonClick}>
                <div className={styles.buttonDiv}>Login</div>
              </button>
              <button className={styles.button1} onClick={onButton1Click}>
                <div className={styles.buttonDiv1}>Start</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroDiv}>
        <div className={styles.titleDiv}>
          <h1 className={styles.elevateEcommerceByMessaging}>
            Elevate Ecommerce by Messaging on Every Channel
          </h1>
          <h2 className={styles.explodeConversionRatesSale}>
            Explode conversion rates, sales and profits for your ecommerce store
            ... surprisingly fast
          </h2>
        </div>
        <div className={styles.actionsDiv1}>
          <button className={styles.button2} onClick={onButton2Click}>
            <div className={styles.buttonDiv1}>Start Now</div>
          </button>
        </div>
      </div>
      <div className={styles.demoDiv} id="demo">
        <h1 className={styles.demoH1}>Demo</h1>
        <h4 className={styles.seeHowYouCanTransformYour}>
          See how you can transform your ecommerce business with AI powered
          messaging
        </h4>
        <video className={styles.playerVideo} controls>
          <source src="https://d3iahpdq7idyya.cloudfront.net/demo/ONE-demo.mp4" />
        </video>
        <img
          className={styles.automationsIcon}
          alt=""
          src="../automations.svg"
        />
      </div>
      <div className={styles.ecommerceIntegrationsDiv}>
        <div className={styles.frameDiv}>
          <div className={styles.ecommerceChatMarketing}>
            Ecommerce Chat Marketing
          </div>
          <h2 className={styles.connectYourEcommerceStoreT}>
            Connect your ecommerce store to every channel seamlessly
          </h2>
        </div>
        <div className={styles.rowDiv}>
          <div className={styles.columnDiv}>
            <img
              className={styles.ecommerceIconsWoo}
              alt=""
              src="../ecommerce-iconswoo6@2x.png"
            />
            <div className={styles.contentDiv}>
              <div className={styles.contentDiv1}>
                <b className={styles.shopifyB}>{`Shopify `}</b>
                <div className={styles.connectYourShopifyStoreTo}>
                  Connect your Shopify store to send product, collection,
                  customer, cart, order and information across all channels as
                  messages.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.columnDiv1}>
            <img
              className={styles.ecommerceIconsWoo}
              alt=""
              src="../ecommerce-iconswoo7@2x.png"
            />
            <div className={styles.contentDiv2}>
              <div className={styles.contentDiv1}>
                <b className={styles.shopifyB}>WooCommerce</b>
                <div className={styles.connectYourShopifyStoreTo}>
                  Connect your WooCommerce store to send product, collection,
                  customer, cart, order and information across all channels as
                  messages.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.columnDiv2}>
            <img
              className={styles.ecommerceIconsWoo2}
              alt=""
              src="../ecommerce-iconswoo8@2x.png"
            />
            <div className={styles.contentDiv2}>
              <div className={styles.sectionTitleDiv}>
                <b className={styles.shopifyB}>Social Shopping</b>
                <div className={styles.connectYourShopifyStoreTo}>
                  Connect your Facebook and Instragram shops to send product,
                  collection, customer, cart, order and information across all
                  channels as messages.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.footerDiv1}>
          <div className={styles.creditsDiv}>
            <small className={styles.oNEAllRightReserved}>
              © 2022 ONE. All right reserved.
            </small>
            <div className={styles.footerLinksDiv}>
              <small className={styles.privacyPolicySmall}>
                Privacy Policy
              </small>
              <small className={styles.termsOfService}>Terms of Service</small>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.benefitSellDiv}>
        <img className={styles.iconCart} alt="" src="../iconcart@2x.png" />
        <div className={styles.contentDiv6}>
          <div className={styles.contentDiv7}>
            <div className={styles.sectionTitleDiv}>
              <div className={styles.taglineDiv}>Tagline</div>
              <div className={styles.contentDiv8}>
                <b className={styles.sellFasterB}>{`Sell Faster `}</b>
                <div className={styles.closeMoreSalesInAFraction}>
                  Close more sales in a fraction of the time it takes for
                  customers to switch between email and the web. Guide your
                  customers along a journey - from an ad to a sale and beyond
                  and allow them to browse products, add to cart and pay, all
                  without leaving their favourite messaging app.
                </div>
              </div>
            </div>
            <div className={styles.listDiv}>
              <div className={styles.listItemDiv}>
                <div className={styles.iconDiv}>
                  <img className={styles.icon} alt="" src="../icon3@2x.png" />
                </div>
                <div className={styles.syndicateYourProductCatalog}>
                  Syndicate your product catalog
                </div>
              </div>
              <div className={styles.listItemDiv}>
                <div className={styles.iconDiv}>
                  <img className={styles.icon} alt="" src="../icon3@2x.png" />
                </div>
                <div className={styles.syndicateYourProductCatalog}>
                  Accept payments
                </div>
              </div>
              <div className={styles.listItemDiv}>
                <div className={styles.iconDiv}>
                  <img className={styles.icon} alt="" src="../icon3@2x.png" />
                </div>
                <div className={styles.syndicateYourProductCatalog}>
                  Recover abandoned carts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.benefitSaveDiv}>
        <div className={styles.contentDiv9}>
          <div className={styles.contentDiv10}>
            <div className={styles.sectionTitleDiv}>
              <div className={styles.taglineDiv}>Tagline</div>
              <div className={styles.contentDiv8}>
                <b className={styles.sellFasterB}>Save Time and Money</b>
                <div className={styles.closeMoreSalesInAFraction}>
                  "When companies take more than five minutes to respond to a
                  lead, their odds of qualifying that lead decreases by 10x."
                  Harvard Business Review. Save time and money by automatically
                  responding to over 80% of customer inquiries. If your AI
                  doesn't understand a question or have an answer a human will
                  be brought into the conversation, seamlessly.
                </div>
              </div>
            </div>
            <div className={styles.listDiv}>
              <div className={styles.listItemDiv}>
                <div className={styles.iconDiv}>
                  <img className={styles.icon} alt="" src="../icon3@2x.png" />
                </div>
                <div className={styles.syndicateYourProductCatalog}>
                  Answer sales questions instantly
                </div>
                <div className={styles.iconDiv}>
                  <img className={styles.icon} alt="" src="../icon3@2x.png" />
                </div>
              </div>
              <div className={styles.listItemDiv}>
                <div className={styles.iconDiv}>
                  <img className={styles.icon} alt="" src="../icon3@2x.png" />
                </div>
                <div className={styles.syndicateYourProductCatalog}>
                  Answer customer service questions instantly
                </div>
              </div>
              <div className={styles.listItemDiv}>
                <div className={styles.iconDiv}>
                  <img className={styles.icon} alt="" src="../icon3@2x.png" />
                </div>
                <div className={styles.syndicateYourProductCatalog}>
                  Bring in humans to the conversation at the right time
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.iconCart} alt="" src="../iconretarget@2x.png" />
      </div>
      <div className={styles.logosDiv} id="channels">
        <h3 className={styles.connectTo15ChannelsInReal}>
          Connect to 15 channels in real-time
        </h3>
        <img
          className={styles.logosChannelsIcon}
          alt=""
          src="../logoschannels@2x.png"
        />
      </div>
      <div className={styles.benefitLeadsDiv}>
        <div className={styles.contentDiv9}>
          <div className={styles.contentDiv10}>
            <div className={styles.sectionTitleDiv}>
              <div className={styles.taglineDiv}>Tagline</div>
              <div className={styles.contentDiv8}>
                <h2 className={styles.captureLeadsH2}>Capture Leads</h2>
                <div className={styles.closeMoreSalesInAFraction}>
                  Capture emails, phone numbers, gender, location and profile
                  pictures ... sometimes, without your audience having to type a
                  single word. Engage in personalised conversations and allow
                  your audience to self segment themselves with a few taps.
                </div>
              </div>
            </div>
            <div className={styles.listDiv}>
              <div className={styles.listItemDiv}>
                <div className={styles.iconDiv}>
                  <img className={styles.icon} alt="" src="../icon@2x.png" />
                </div>
                <div className={styles.syndicateYourProductCatalog}>
                  Capture contact information
                </div>
              </div>
              <div className={styles.listItemDiv}>
                <img className={styles.icon8} alt="" src="../icon@2x.png" />
                <div className={styles.syndicateYourProductCatalog}>
                  Book appointments
                </div>
              </div>
              <div className={styles.listItemDiv}>
                <div className={styles.iconDiv}>
                  <img className={styles.icon} alt="" src="../icon@2x.png" />
                </div>
                <div className={styles.syndicateYourProductCatalog}>
                  Qualify leads with surveys
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.iconCart} alt="" src="../iconleads@2x.png" />
      </div>
      <div className={styles.callToActionDiv}>
        <div className={styles.columnDiv3}>
          <div className={styles.contentDiv15}>
            <h1 className={styles.elevateYourEcommerceProfits}>
              Elevate Your Ecommerce Profitsw
            </h1>
            <div
              className={styles.closeMoreSalesInAFraction}
            >{`Get started for free. No credit card needed. `}</div>
          </div>
          <div className={styles.actionsDiv2}>
            <button className={styles.button2} autoFocus>
              <div className={styles.buttonDiv1}>Get started</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDev;
