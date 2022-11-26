import { useCallback } from "react";
import styles from "./about.module.css";

const About = () => {
  const onButtonClick = useCallback(() => {
    window.location.href = "https://app.one.ie/login";
  }, []);

  const onButton1Click = useCallback(() => {
    window.location.href = "https://app.one.ie/register";
  }, []);

  return (
    <div className={styles.aboutDiv}>
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
      <div className={styles.middleDiv} id="LeftNav">
        <div className={styles.leftDiv} id="LeftNav" />
        <div className={styles.contentDiv}>
          <div className={styles.heading1Div}>About ONE</div>
          <div
            className={styles.thisIsSomeTextThisIsSom}
          >{`This is some text. This is some more text. This is some more text. This is some more text. This is some more text. This is some more text.  This is some more text. This is some more text. This is some more text. This is some more text. `}</div>
        </div>
        <div className={styles.leftDiv} id="RightNav" />
      </div>
      <div className={styles.bottomDiv}>
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
                <small className={styles.termsOfService}>
                  Terms of Service
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
