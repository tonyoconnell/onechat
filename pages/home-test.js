import { useEffect } from "react";
import styles from "./home-test.module.css";

const HomeTest = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.homeTestDiv}>
      <div className={styles.topDiv}>
        <div className={styles.contentDiv}>
          <img className={styles.oNESIcon} alt="" src="../ones.svg" />
          <div className={styles.columnDiv}>
            <img className={styles.logoIcon} alt="" src="../logo.svg" />
            <div className={styles.columnDiv1}>
              <div className={styles.productDiv}>Product</div>
              <div className={styles.productDiv}>Channels</div>
              <div className={styles.productDiv}>Connections</div>
              <div className={styles.productDiv}>Course</div>
              <div className={styles.navLinkDropdown}>
                <div className={styles.productDiv}>People</div>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="../chevron-down.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.columnDiv2}>
            <button className={styles.button}>
              <div className={styles.buttonDiv}>Login</div>
            </button>
            <button className={styles.button1} data-animate-on-scroll>
              <div className={styles.buttonDiv1}>Get Started</div>
            </button>
          </div>
        </div>
        <div className={styles.megaMenuDiv}>
          <div className={styles.menuDiv}>
            <div className={styles.menuListDiv}>
              <div className={styles.pageGroupOne}>Page group one</div>
              <div className={styles.menuItemDiv}>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="../icon--relume.svg"
                />
                <div className={styles.contentDiv1}>
                  <div className={styles.pageOneDiv}>Page One</div>
                  <div className={styles.loremIpsumDolorSitAmetCon}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItemDiv}>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="../icon--relume.svg"
                />
                <div className={styles.contentDiv1}>
                  <div className={styles.pageOneDiv}>Page Two</div>
                  <div className={styles.loremIpsumDolorSitAmetCon}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItemDiv}>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="../icon--relume.svg"
                />
                <div className={styles.contentDiv1}>
                  <div className={styles.pageOneDiv}>Page Three</div>
                  <div className={styles.loremIpsumDolorSitAmetCon}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItemDiv}>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="../icon--relume.svg"
                />
                <div className={styles.contentDiv1}>
                  <div className={styles.pageOneDiv}>Page Four</div>
                  <div className={styles.loremIpsumDolorSitAmetCon}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.menuListDiv}>
              <div className={styles.pageGroupOne}>Page group two</div>
              <div className={styles.menuItemDiv}>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="../icon--relume.svg"
                />
                <div className={styles.contentDiv1}>
                  <div className={styles.pageOneDiv}>Page Five</div>
                  <div className={styles.loremIpsumDolorSitAmetCon}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItemDiv}>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="../icon--relume.svg"
                />
                <div className={styles.contentDiv1}>
                  <div className={styles.pageOneDiv}>Page Six</div>
                  <div className={styles.loremIpsumDolorSitAmetCon}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItemDiv}>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="../icon--relume.svg"
                />
                <div className={styles.contentDiv1}>
                  <div className={styles.pageOneDiv}>Page Seven</div>
                  <div className={styles.loremIpsumDolorSitAmetCon}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItemDiv}>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="../icon--relume.svg"
                />
                <div className={styles.contentDiv1}>
                  <div className={styles.pageOneDiv}>Page Eight</div>
                  <div className={styles.loremIpsumDolorSitAmetCon}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.blogDiv}>
            <div className={styles.pageOneDiv}>Featured from Blog</div>
            <div className={styles.blogListDiv}>
              <div className={styles.blogItemDiv}>
                <img
                  className={styles.placeholderImage}
                  alt=""
                  src="../placeholder--image@2x.png"
                />
                <div className={styles.contentDiv9}>
                  <div className={styles.contentDiv10}>
                    <div className={styles.pageOneDiv}>Article Title</div>
                    <div className={styles.loremIpsumDolorSitAmetCon}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div className={styles.readMoreDiv}>Read more</div>
                </div>
              </div>
              <div className={styles.blogItemDiv}>
                <textarea className={styles.placeholderImage1} />
                <div className={styles.contentDiv9}>
                  <div className={styles.contentDiv10}>
                    <div className={styles.pageOneDiv}>Article Title</div>
                    <div className={styles.loremIpsumDolorSitAmetCon}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div className={styles.readMoreDiv}>Read more</div>
                </div>
              </div>
            </div>
            <button className={styles.button2}>
              <div className={styles.buttonDiv}>See all articles</div>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="../icon--chevron-right.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.heroDiv}>
        <div className={styles.headlineDiv}>
          <div className={styles.headlineDiv}>
            <div className={styles.elevateEcommerceByMessaging}>
              Elevate Ecommerce by Messaging on Every Channel
            </div>
            <b
              className={styles.captureMoreLeadsCloseMore}
            >{`Capture more leads, close more sales & boost profits for your ecommerce store ... surprisingly fast`}</b>
          </div>
          <div className={styles.actionsDiv}>
            <button className={styles.button3}>
              <div className={styles.buttonDiv1}>Start Now</div>
            </button>
            <button className={styles.button4}>
              <div className={styles.buttonDiv}>Learn more</div>
            </button>
          </div>
        </div>
        <div className={styles.logosDiv}>
          <b className={styles.connectIntelligentAgentsTo}>
            Connect intelligent agents to every 15 channels in real-time
          </b>
          <div className={styles.logosChannelsDiv}>
            <div className={styles.frameDiv}>
              <div className={styles.logoAppleDiv}>
                <img
                  className={styles.applePng0}
                  alt=""
                  src="../apple--png-0@2x.png"
                />
              </div>
              <img
                className={styles.logoWechatIcon}
                alt=""
                src="../logowechat.svg"
              />
              <img
                className={styles.logoGoogleIcon}
                alt=""
                src="../logogoogle.svg"
              />
              <img
                className={styles.logoAppleDiv}
                alt=""
                src="../logoline.svg"
              />
              <img
                className={styles.logoGoogleIcon}
                alt=""
                src="../logotelegram.svg"
              />
              <div className={styles.logoAppleDiv}>
                <img
                  className={styles.whatsAppIncPng}
                  alt=""
                  src="../whatsapp-inc--png@2x.png"
                />
              </div>
              <div className={styles.logoAppleDiv}>
                <img
                  className={styles.whatsAppIncPng}
                  alt=""
                  src="../instagram--png@2x.png"
                />
              </div>
              <img
                className={styles.logoGoogleIcon}
                alt=""
                src="../logofacebook.svg"
              />
            </div>
            <div className={styles.frameDiv1}>
              <img
                className={styles.logoGoogleIcon}
                alt=""
                src="../logotelegram1.svg"
              />
              <img
                className={styles.logoAppleDiv}
                alt=""
                src="../logoslack.svg"
              />
              <div className={styles.logoViberDiv}>
                <img
                  className={styles.whatsAppIncPng}
                  alt=""
                  src="../viber--jpeg@2x.png"
                />
              </div>
              <div className={styles.logoAppleDiv}>
                <img
                  className={styles.whatsAppIncPng}
                  alt=""
                  src="../vk--jpeg@2x.png"
                />
              </div>
              <img
                className={styles.logoGoogleIcon}
                alt=""
                src="../logosms.svg"
              />
              <img
                className={styles.logoGoogleIcon}
                alt=""
                src="../logoemail.svg"
              />
              <img
                className={styles.logoGoogleIcon}
                alt=""
                src="../logotelephone.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.videoDiv}>
        <b className={styles.accelerateYourEcommerceProf}>
          Accelerate Your Ecommerce Profits
        </b>
        <div className={styles.captureAStreamOfLeadsClo}>
          <p className={styles.captureAStream}>
            Capture a stream of leads. Close more sales. Close sales faster.
            Multiply your conversion rates. Increase average order value. Save
            time and money by answering customer inquiries automatically.
            Understand your customers better. Forge deeper relationships. Lower
            customer churn. Elevate customer lifetime value.
          </p>
          <p className={styles.captureAStream}>&nbsp;</p>
          <p className={styles.captureAStream}>
            If you want ... if you need to increase the profitability of your
            ecommerce business ... and you understand the only way is to convert
            more browsers into buyers, and sell them more products ... then
            let's proceed.
          </p>
        </div>
      </div>
      <div className={styles.layout241}>
        <div className={styles.contentDiv13}>
          <div className={styles.contentDiv14}>
            <div className={styles.sectionTitleDiv1}>
              <div className={styles.taglineDiv}>Tagline</div>
              <div className={styles.contentDiv15}>
                <b className={styles.elevateEcommerceByMessaging}>
                  Capture Leads
                </b>
                <div className={styles.captureEmailsPhoneNumbers}>
                  Capture emails, phone numbers, gender, location and profile
                  pictures ... sometimes, without your audience having to type a
                  single word. Engage in personalised conversations and allow
                  your audience to self segment themselves with a few taps.
                </div>
              </div>
            </div>
            <div className={styles.listDiv}>
              <div className={styles.listItemDiv}>
                <img className={styles.icon} alt="" src="../icon10.svg" />
                <div className={styles.productDiv}>
                  Capture contact information
                </div>
              </div>
              <div className={styles.listItemDiv}>
                <img className={styles.icon} alt="" src="../icon11.svg" />
                <div className={styles.productDiv}>Book appointments</div>
              </div>
              <div className={styles.listItemDiv}>
                <img className={styles.icon} alt="" src="../icon12.svg" />
                <div className={styles.productDiv}>
                  Qualify leads with surveys
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.iconLeads} alt="" src="../iconleads1.svg" />
      </div>
      <div className={styles.layout239}>
        <img className={styles.iconLeads} alt="" src="../iconcart1.svg" />
        <div className={styles.contentDiv13}>
          <div className={styles.contentDiv14}>
            <div className={styles.sectionTitleDiv1}>
              <div className={styles.taglineDiv}>Tagline</div>
              <div className={styles.contentDiv15}>
                <b
                  className={styles.elevateEcommerceByMessaging}
                >{`Sell Faster `}</b>
                <div className={styles.captureEmailsPhoneNumbers}>
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
                <img className={styles.icon} alt="" src="../icon13.svg" />
                <div className={styles.productDiv}>
                  Syndicate your product catalog
                </div>
              </div>
              <div className={styles.listItemDiv}>
                <img className={styles.icon} alt="" src="../icon14.svg" />
                <div className={styles.productDiv}>Accept payments</div>
              </div>
              <div className={styles.listItemDiv}>
                <img className={styles.icon} alt="" src="../icon15.svg" />
                <div className={styles.productDiv}>Recover abandoned carts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.layout241}>
        <div className={styles.contentDiv13}>
          <div className={styles.contentDiv14}>
            <div className={styles.sectionTitleDiv1}>
              <div className={styles.taglineDiv}>Tagline</div>
              <div className={styles.contentDiv15}>
                <b className={styles.elevateEcommerceByMessaging}>
                  Save Time and Money
                </b>
                <div className={styles.captureEmailsPhoneNumbers}>
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
                <img className={styles.icon} alt="" src="../icon16.svg" />
                <div className={styles.productDiv}>
                  Answer sales questions instantly
                </div>
              </div>
              <div className={styles.listItemDiv}>
                <img className={styles.icon} alt="" src="../icon17.svg" />
                <div className={styles.productDiv}>
                  Answer customer service questions instantly
                </div>
              </div>
              <div className={styles.listItemDiv}>
                <img className={styles.icon} alt="" src="../icon18.svg" />
                <div className={styles.productDiv}>
                  Bring in humans to the conversation at the right time
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.iconRetarget}
          alt=""
          src="../iconretarget1.svg"
        />
      </div>
      <div className={styles.layout2401}>
        <div className={styles.frameDiv2}>
          <div className={styles.ecommerceChatMarketing}>
            Ecommerce Chat Marketing
          </div>
          <b className={styles.connectYourEcommerceStoreT}>
            Connect your ecommerce store to every channel seamlessly
          </b>
        </div>
        <div className={styles.rowDiv}>
          <div className={styles.columnDiv3}>
            <img
              className={styles.ecommerceIconsWoo}
              alt=""
              src="../ecommerce-iconswoo3@2x.png"
            />
            <div className={styles.contentDiv22}>
              <div className={styles.sectionTitleDiv1}>
                <b className={styles.shopifyB}>{`Shopify `}</b>
                <div className={styles.connectYourShopifyStoreTo}>
                  Connect your Shopify store to send product, collection,
                  customer, cart, order and information across all channels as
                  messages.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.columnDiv3}>
            <img
              className={styles.ecommerceIconsWoo}
              alt=""
              src="../ecommerce-iconswoo4@2x.png"
            />
            <div className={styles.contentDiv22}>
              <div className={styles.sectionTitleDiv1}>
                <b className={styles.shopifyB}>WooCommerce</b>
                <div className={styles.connectYourShopifyStoreTo}>
                  Connect your WooCommerce store to send product, collection,
                  customer, cart, order and information across all channels as
                  messages.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.columnDiv3}>
            <img
              className={styles.ecommerceIconsWoo}
              alt=""
              src="../ecommerce-iconswoo5@2x.png"
            />
            <div className={styles.contentDiv22}>
              <div className={styles.sectionTitleDiv1}>
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
      <div className={styles.testimonial23}>
        <div className={styles.sectionTitleDiv4}>
          <b className={styles.elevateEcommerceByMessaging}>
            Customer testimonials
          </b>
          <div className={styles.captureEmailsPhoneNumbers}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className={styles.contentDiv28}>
          <div className={styles.contentDiv29}>
            <div className={styles.contentDiv30}>
              <div className={styles.columnDiv6}>
                <div className={styles.starsDiv}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="../vector.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="../vector.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="../vector.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="../vector3.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="../vector3.svg"
                  />
                </div>
                <div className={styles.aCustomerTestimonialThatHi}>
                  "A customer testimonial that highlights features and answers
                  potential customer doubts about your product or service.
                  Showcase testimonials from a similar demographic to your
                  customers."
                </div>
                <div className={styles.avatarDiv}>
                  <img
                    className={styles.avatarImageIcon}
                    alt=""
                    src="../avatar-image@2x.png"
                  />
                  <div className={styles.avatarContentDiv}>
                    <div className={styles.ecommerceChatMarketing}>
                      Customer Name
                    </div>
                    <div className={styles.productDiv}>
                      Position, Company name
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contentDiv31}>
                <div className={styles.buttonDiv5}>
                  <img
                    className={styles.chevronDownIcon}
                    alt=""
                    src="../icon19.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.columnDiv7}>
              <div className={styles.starsDiv}>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector7.svg"
                />
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector7.svg"
                />
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector3.svg"
                />
              </div>
              <div className={styles.aCustomerTestimonialThatHi}>
                "A customer testimonial that highlights features and answers
                potential customer doubts about your product or service.
                Showcase testimonials from a similar demographic to your
                customers."
              </div>
              <div className={styles.avatarDiv}>
                <img
                  className={styles.avatarImageIcon}
                  alt=""
                  src="../avatar-image@2x.png"
                />
                <div className={styles.avatarContentDiv}>
                  <div className={styles.ecommerceChatMarketing}>
                    Customer Name
                  </div>
                  <div className={styles.productDiv}>
                    Position, Company name
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contentDiv30}>
              <div className={styles.columnDiv8}>
                <div className={styles.starsDiv}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="../vector.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="../vector.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="../vector7.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="../vector7.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="../vector3.svg"
                  />
                </div>
                <div className={styles.aCustomerTestimonialThatHi}>
                  "A customer testimonial that highlights features and answers
                  potential customer doubts about your product or service.
                  Showcase testimonials from a similar demographic to your
                  customers."
                </div>
                <div className={styles.avatarDiv}>
                  <img
                    className={styles.avatarImageIcon}
                    alt=""
                    src="../avatar-image@2x.png"
                  />
                  <div className={styles.avatarContentDiv}>
                    <div className={styles.ecommerceChatMarketing}>
                      Customer Name
                    </div>
                    <div className={styles.productDiv}>
                      Position, Company name
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contentDiv33}>
                <div className={styles.buttonDiv5}>
                  <img
                    className={styles.chevronDownIcon}
                    alt=""
                    src="../icon20.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sliderDotsDiv}>
            <img className={styles.dotIcon} alt="" src="../dot.svg" />
            <img className={styles.dotIcon} alt="" src="../dot1.svg" />
            <img className={styles.dotIcon} alt="" src="../dot1.svg" />
            <img className={styles.dotIcon} alt="" src="../dot1.svg" />
            <img className={styles.dotIcon} alt="" src="../dot1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.header24}>
        <div className={styles.columnDiv9}>
          <div className={styles.contentDiv34}>
            <b className={styles.elevateEcommerceByMessaging}>
              Call to action that excites the visitor to try your product
            </b>
            <div
              className={styles.captureEmailsPhoneNumbers}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. `}</div>
          </div>
          <div className={styles.actionsDiv1}>
            <button className={styles.button5} autoFocus data-animate-on-scroll>
              <div className={styles.buttonDiv1}>Get started</div>
            </button>
            <button className={styles.button4}>
              <div className={styles.buttonDiv}>Chat to sales</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.fAQ4}>
        <div className={styles.containerDiv}>
          <div className={styles.sectionTitleDiv4}>
            <b className={styles.elevateEcommerceByMessaging}>Questions?</b>
            <div className={styles.captureEmailsPhoneNumbers}>
              Frequently asked questions ordered by popularity. Remember that if
              the visitor has not committed to the call to action, they may
              still have questions (doubts) that can be answered.
            </div>
          </div>
          <div className={styles.accordionDiv}>
            <div className={styles.accordionItemDiv}>
              <b className={styles.howLongDoesItTakeToIncre}>
                How long does it take to increase sales?
              </b>
              <img className={styles.plusIcon} alt="" src="../plus.svg" />
            </div>
            <div className={styles.accordionItemDiv}>
              <b className={styles.howLongDoesItTakeToIncre}>
                Question text goes here
              </b>
              <img className={styles.plusIcon} alt="" src="../plus.svg" />
            </div>
            <div className={styles.accordionItemDiv}>
              <b className={styles.howLongDoesItTakeToIncre}>
                Question text goes here
              </b>
              <img className={styles.plusIcon} alt="" src="../plus.svg" />
            </div>
            <div className={styles.accordionItemDiv}>
              <b className={styles.howLongDoesItTakeToIncre}>
                Question text goes here
              </b>
              <img className={styles.plusIcon} alt="" src="../plus.svg" />
            </div>
            <div className={styles.accordionItemDiv}>
              <b className={styles.howLongDoesItTakeToIncre}>
                Question text goes here
              </b>
              <img className={styles.plusIcon} alt="" src="../plus.svg" />
            </div>
          </div>
          <div className={styles.contentDiv35}>
            <div className={styles.contentDiv36}>
              <b className={styles.stillHaveQuestions}>Still have questions?</b>
              <div className={styles.captureEmailsPhoneNumbers}>
                Support details to capture customers that might be on the fence.
              </div>
            </div>
            <button className={styles.button4}>
              <div className={styles.buttonDiv}>Chat Now</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.blog39}>
        <div className={styles.sectionTitleDiv6}>
          <div className={styles.pageOneDiv}>Case studies</div>
          <div className={styles.contentDiv37}>
            <b className={styles.elevateEcommerceByMessaging}>
              Introduce case studies that show how customers use the product
            </b>
            <div
              className={styles.captureEmailsPhoneNumbers}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
          </div>
        </div>
        <div className={styles.contentDiv38}>
          <div className={styles.rowDiv1}>
            <div className={styles.cardDiv}>
              <img
                className={styles.placeholderImage2}
                alt=""
                src="../placeholder--image1@2x.png"
              />
              <div className={styles.contentDiv39}>
                <div className={styles.contentDiv40}>
                  <div className={styles.pageOneDiv}>Category</div>
                  <div className={styles.titleDiv}>
                    <b className={styles.shopifyB}>Company name: Use case</b>
                    <div className={styles.connectYourShopifyStoreTo}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </div>
                  </div>
                </div>
                <div className={styles.avatarDiv3}>
                  <img
                    className={styles.placeholderImage3}
                    alt=""
                    src="../placeholder--image2@2x.png"
                  />
                  <div className={styles.contentDiv1}>
                    <div className={styles.pageOneDiv}>Customer name</div>
                    <div className={styles.timeDiv}>
                      <div className={styles.productDiv}>11 Jan 2022</div>
                      <div className={styles.div}>•</div>
                      <div className={styles.productDiv}>5 min read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardDiv}>
              <img
                className={styles.placeholderImage2}
                alt=""
                src="../placeholder--image1@2x.png"
              />
              <div className={styles.contentDiv39}>
                <div className={styles.contentDiv40}>
                  <div className={styles.pageOneDiv}>Category</div>
                  <b className={styles.companyNameUseCase1}>
                    Company name: Use case
                  </b>
                  <div className={styles.connectYourShopifyStoreTo}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </div>
                </div>
                <div className={styles.avatarDiv3}>
                  <img
                    className={styles.placeholderImage3}
                    alt=""
                    src="../placeholder--image2@2x.png"
                  />
                  <div className={styles.contentDiv1}>
                    <div className={styles.pageOneDiv}>Customer name</div>
                    <div className={styles.timeDiv}>
                      <div className={styles.productDiv}>11 Jan 2022</div>
                      <div className={styles.div}>•</div>
                      <div className={styles.productDiv}>5 min read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardDiv}>
              <img
                className={styles.placeholderImage2}
                alt=""
                src="../placeholder--image1@2x.png"
              />
              <div className={styles.contentDiv39}>
                <div className={styles.contentDiv40}>
                  <div className={styles.pageOneDiv}>Category</div>
                  <b className={styles.companyNameUseCase1}>
                    Company name: Use case
                  </b>
                  <div className={styles.connectYourShopifyStoreTo}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </div>
                </div>
                <div className={styles.avatarDiv3}>
                  <img
                    className={styles.placeholderImage3}
                    alt=""
                    src="../placeholder--image2@2x.png"
                  />
                  <div className={styles.contentDiv1}>
                    <div className={styles.pageOneDiv}>Customer name</div>
                    <div className={styles.timeDiv}>
                      <div className={styles.productDiv}>11 Jan 2022</div>
                      <div className={styles.div}>•</div>
                      <div className={styles.productDiv}>5 min read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.button4}>
            <div className={styles.buttonDiv}>View all</div>
          </button>
        </div>
      </div>
      <div className={styles.footer5}>
        <div className={styles.containerDiv1}>
          <div className={styles.newsletterDiv}>
            <div className={styles.contentDiv48}>
              <div className={styles.pageOneDiv}>Join our newsletter</div>
              <div className={styles.connectYourShopifyStoreTo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className={styles.actionsDiv2}>
              <div className={styles.formDiv}>
                <input className={styles.textInput} type="text" />
                <textarea className={styles.buttonTextarea} />
              </div>
              <div className={styles.aCustomerTestimonialThatHi}>
                {`By subscribing you agree to with our `}
                <span className={styles.privacyPolicySpan}>Privacy Policy</span>
              </div>
            </div>
          </div>
          <div className={styles.linksDiv}>
            <div className={styles.columnDiv10}>
              <img className={styles.logoIcon1} alt="" src="../logo1.svg" />
            </div>
            <div className={styles.columnDiv11}>
              <div className={styles.pageOneDiv}>Column One</div>
              <div className={styles.footerLinksDiv}>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link One
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Two
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Three
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Four
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Five
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.columnDiv11}>
              <div className={styles.pageOneDiv}>Column Two</div>
              <div className={styles.footerLinksDiv}>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Six
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Seven
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Eight
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Nine
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Ten
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.columnDiv11}>
              <div className={styles.pageOneDiv}>Column Three</div>
              <div className={styles.footerLinksDiv}>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Eleven
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Twelve
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Thirteen
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Fourteen
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Fifteen
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.columnDiv11}>
              <div className={styles.pageOneDiv}>Column Four</div>
              <div className={styles.footerLinksDiv}>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Sixteen
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Seventeen
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Eightteen
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Nineteen
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Twenty
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.columnDiv11}>
              <div className={styles.pageOneDiv}>Column Five</div>
              <div className={styles.footerLinksDiv}>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Twenty One
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Twenty Two
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Twenty Three
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Twenty Four
                  </div>
                </div>
                <div className={styles.linkDiv}>
                  <div className={styles.howLongDoesItTakeToIncre}>
                    Link Twenty Five
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.creditsDiv}>
            <div className={styles.divider} />
            <div className={styles.newsletterDiv}>
              <div className={styles.creditsDiv1}>
                <div className={styles.productDiv}>
                  © 2022 ONE. All right reserved.
                </div>
                <div className={styles.footerLinksDiv5}>
                  <div className={styles.privacyPolicyDiv}>Privacy Policy</div>
                  <div className={styles.privacyPolicyDiv}>
                    Terms of Service
                  </div>
                  <div className={styles.privacyPolicyDiv}>
                    Cookies Settings
                  </div>
                </div>
              </div>
              <div className={styles.socialLinksDiv}>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="../icon--facebook.svg"
                />
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="../icon--instagram.svg"
                />
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="../icon--twitter.svg"
                />
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="../icon--linkedin.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTest;
