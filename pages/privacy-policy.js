import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layout/Footer";

class PrivacyPolicy extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Privacy Policy"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Privacy Policy"
          bgImage="item-bg-4"
        />

        <div className="conditions-section ptb-100">
          <div className="container">
            <div className="single-privacy">
              <h3 className="mt-0">Overview</h3>
              <p>
                Halen collects information about you when you use our mobile
                applications, websites, and other online products and services
                (collectively, the “Services”) and through other interactions
                and communications you have with us. If you reside in the United
                States, the Services are provided by Halen USA, LLC and its U.S.
                affiliates (collectively “Halen U.S.”), and this Privacy
                Statement applies to information collected and usedby Halen U.S.
                If you reside outside of the United States, the Services are
                provided by Halen B.V., and this Privacy Statement applies to
                information collected and used by Halen Group (Halen U.S. and
                Halen Group are referred to herein collectively as “Halen” or
                “we”).
              </p>

              <h3>Scope and Application</h3>
              <p>
                This Privacy Statement (“Statement") applies to persons anywhere
                in the world who use our apps or Services to request
                transportation, delivery, or other on-demand services (“Users”).
                This Statement does not apply to information we collect from or
                about drivers, couriers, partner transportation companies, or
                any other persons who use the Halen platform under license
                (collectively “Drivers”). If you interact with the Services as
                both a User and a Driver, the respective privacy statements
                apply to your different interactions.
              </p>

              <h3>Information You Provide to Us</h3>
              <p>
                We collect information you provide directly to us, such as when
                you create or modify your account, request on-demand services,
                contact customer support, or otherwise communicate with us. This
                information may include: name, email, phone number, postal
                address, profile picture, payment method, items requested (for
                delivery services), delivery notes, and other information you
                choose to provide.
              </p>

              <h3>Information We Collect Through Your Use of Our Services</h3>
              <p>
                When you use our Services, we collect information about you in
                the following general categories:
              </p>
              <ul>
                <li>
                  Location Information:When you use the Services for
                  transportation or delivery, we collect precise location data
                  about the trip from the Halen app used by the Driver. If you
                  permit the Halen app to access location services through the
                  permission system used by your mobile operating system
                  (“platform”), we may also collect the precise location of your
                  device when the app is running in the foreground or
                  background. We may also derive your approximate location from
                  your IP address.
                </li>
                <li>
                  Contacts Information:If you permit the Halen app to access the
                  address book on your device through the permission system used
                  by your mobile platform, we may access and store names and
                  contact information from your address book to facilitate
                  social interactions through our Services and for other
                  purposes described in this Statement or at the time of consent
                  or collection.
                </li>
                <li>
                  Transaction Information:We collect transaction details related
                  to your use of our Services, including the type of service
                  requested, date and time the service was provided, amount
                  charged, distance traveled, and other related transaction
                  details. Additionally, if someone uses your promo code, we may
                  associate your name with that person.
                </li>
                <li>
                  Usage and Preference Information:We collect information about
                  how you and site visitors interact with our Services,
                  preferences expressed, and settings chosen. In some cases we
                  do this through the use of cookies, pixel tags, and similar
                  technologies that create and maintain unique identifiers. To
                  learn more about these technologies, please see ourCookie
                  Statement.
                </li>
                <li>
                  Device Information:We may collect information about your
                  mobile device, including, for example, the hardware model,
                  operating system and version, software and file names and
                  versions, preferred language,unique device identifier,
                  advertising identifiers, serial number, device motion
                  information, and mobile network information.
                </li>
                <li>
                  Call and SMS Data: Our Services facilitate communications
                  between Users and Drivers. In connection with facilitating
                  this service, we receive call data, including the date and
                  time of the call or SMS message, the parties’ phone numbers,
                  and the content of the SMS message.
                </li>
                <li>
                  Log Information:When you interact with the Services, we
                  collect server logs, which may include information like device
                  IP address, access dates and times, app features or pages
                  viewed, app crashes andother system activity, type of browser,
                  and the third-party site or service you were using before
                  interacting with our Services.
                </li>
              </ul>

              <h3>Important Information About Platform Permissions</h3>
              <p>
                Most mobile platforms (iOS, Android, etc.) have defined certain
                types of device data that apps cannot access without your
                consent. And these platforms have different permission systems
                for obtaining your consent. The iOS platform will alert you the
                first time the Halen app wants permission to access certain
                types of data and will let you consent (or not consent) to that
                request. Android devices will notify you of the permissions that
                the Halen app seeks before you first use the app, and your use
                of the app constitutes your consent. To learn about the
                platform-level permissions that the app seeks, please visit our
                newiOS Permissionspage and Android Permissionspage. Sometimes
                these permissions require more explanation than the platforms
                themselves provide, and the permissions we request will change
                over time, so we’ve created these pages to serve as
                authoritative and up-to-date resources for our users.
              </p>

              <h3>Important Information We Collect From Other Sources</h3>
              <p>
                We may also receive information from other sources and combine
                that with information we collect through our Services. For
                example:
              </p>
              <ul>
                <li>
                  If you choose to link, create, or log in to your Halen account
                  with a payment provider (e.g., Google Wallet) or social media
                  service (e.g., Facebook), or if you engage with a separate app
                  or website that uses our API (or whose API we use), we may
                  receive information about you or your connections from that
                  site or app.
                </li>
                <li>
                  If your employer uses one of our enterprise solutions, such as
                  Halen for Business, we may receiveinformation about you from
                  your employer.
                </li>
                <li>
                  When you request on demand services, our Drivers may provide
                  us with a User rating after providing services to you.
                </li>
                <li>
                  If you also interact with our Services in another capacity,
                  for instance as a Driver or user of other apps we provide, we
                  may combine or associate that information with information we
                  have collected from you inyour capacity as a User or rider.
                </li>
              </ul>

              <h3>Sharing of Information</h3>
              <p>
                We may share the information we collect about you as described
                in this Statement or as described at the time ofcollection or
                sharing, including as follows:
              </p>
              <br />
              <h4>THROUGH OUR SERVICES</h4>
              <p>We may share your information:</p>
              <ul>
                <li>
                  With Drivers to enable them to provide the Services you
                  request. For example, we share your name, photo (if you
                  provide one), average User rating given by Drivers, and pickup
                  and/or drop-off locations with Drivers;
                </li>
                <li>
                  With third parties to provide you a service you requested
                  through a partnership or promotional offering made by a third
                  party or us;
                </li>
                <li>
                  With the general public if With third parties with whom you
                  choose to let us share information, for example other apps or
                  websites that integrate with our API or Services, or those
                  with an API or Service with which we integrate; and you submit
                  content in a public forum, such as blog comments, social media
                  posts, or other features of our Services that are viewable by
                  the general public;
                </li>
                <li>
                  With third parties with whom you choose to let us share
                  information, for example other apps or websites that integrate
                  with our API or Services, or those with an API or Service with
                  which we integrate; and
                </li>
                <li>
                  With your employer (or similar entity) and any necessary third
                  parties engaged by us or your employer (e.g., an expense
                  management service provider), if you participate in any of our
                  enterprise solutions such as Halen for Business.
                </li>
              </ul>
              <br />
              <h4>OTHER IMPORTANT SHARING</h4>
              <p>We may share your information:</p>
              <ul>
                <li>
                  With Halen subsidiaries and affiliated entities that provide
                  services or conduct data processing onour behalf, or for data
                  centralization and / or logistics purposes;
                </li>
                <li>
                  With vendors, consultants, marketing partners, and other
                  service providers who need access to such information to carry
                  out work on our behalf;
                </li>
                <li>
                  In response to a request for information by a competent
                  authority if we believe disclosure is in accordance with, or
                  is otherwise required by, any applicable law, regulation, or
                  legal process;
                </li>
                <li>
                  With law enforcement officials, government authorities, or
                  other third parties if we believe your actions are
                  inconsistent with our User agreements, Terms of Service, or
                  policies, or to protect the rights, property, or safety of
                  Halen or others;
                </li>
                <li>
                  In connection with, or during negotiations of, any merger,
                  sale of company assets, consolidation or restructuring,
                  financing, or acquisition of all or a portion of our business
                  by or into another company;
                </li>
                <li>
                  If we otherwise notify you and you consent to the sharing; and
                </li>
                <li>
                  In an aggregated and/or anonymized form which cannot
                  reasonably be used to identify you.
                </li>
              </ul>

              <h3>Social Sharing Features</h3>
              <p>
                The Services may integrate with social sharing features and
                other related tools which let you share actions you take on our
                Services with other apps, sites, or media, and vice versa. Your
                use of such features enables the sharing of information with
                your friends or the public, depending on the settings you
                establish with the social sharing service. Please refer to the
                privacy policies of those social sharing services for more
                information about how they handle the data you provide to or
                share through them.
              </p>

              <h3>Analytics And Advertising Services Provided By Others</h3>
              <p>
                We may allow others to provide audience measurement and
                analytics services for us, to serve advertisements on our behalf
                across the Internet, and to track and report on the performance
                of those advertisements. These entities may use cookies, web
                beacons, SDKs, and other technologies to identify your device
                when you visit our site and use our Services, as well as when
                you visit other online sites and services. For more information
                about these technologies and service providers, please refer to
                ourCookie Statement.
              </p>

              <h3>Access Rights</h3>
              <p>
                Halen will comply with individual’s requests regarding access,
                correction, and/or deletion of the personal data it stores in
                accordance with applicable law.
              </p>

              <h3>Account Information</h3>
              <p>
                You may correct your account information at any time by logging
                into your online or in-app account. If you wish to cancel your
                account, please email us at privacy@Halentech.com. Please note
                that in some cases we may retain certain information about you
                as required by law, or for legitimate business purposes to the
                extent permitted by law. For instance, if you have a standing
                credit or debt on your account, or if we believe you have
                committed fraud or violated our Terms, we may seek to resolve
                the issue before deleting your information.
              </p>

              <h3>Location Information</h3>
              <p>
                We request permission for our app’s collection of precise
                location from your device per the permission system used by your
                mobile operating system. If you initially permit the collection
                of this information, you can later disable it by changing the
                location settings on your mobile device. However, this will
                limit your ability to use certain features of our Services.
                Additionally, disabling our app’s collection of precise location
                from your device will not limit our ability to collect your trip
                location information from a Driver's device nor our ability to
                derive approximate location from your IP address.
              </p>

              <h3>Contact Information</h3>
              <p>
                We may also seek permission for our app’s collection and syncing
                of contact information from your device per the permission
                system used by your mobile operating system. If you initially
                permit the collection of this information, iOS users can later
                disable it by changing the contacts settings on your mobile
                device. The Android platform does not provide such a setting.
              </p>

              <h3>Promotional Communications</h3>
              <p>
                You may opt out of receiving promotional messages from us by
                following the instructions in those messages. If you opt out, we
                may still send you non-promotional communications, such as those
                about your account, about Services you have requested, or our
                ongoing business relations.
              </p>

              <h3>Cookies and Advertising</h3>
              <p>
                Please refer to our Cookie Statement for more information about
                your choices around cookies and related technologies.{" "}
              </p>

              <h3>Changes to the Statement</h3>
              <p>
                We may change this Statement from time to time. If we make
                significant changes in the way we treat your personal
                information, or to the Statement, we will provide you notice
                through the Services or by some other means, such as email. Your
                continued use of the Services after such notice constitutes your
                consent to the changes. We encourage you to periodically review
                the Statement for the latest information on our privacy
                practices.
              </p>

              <h3>Contact Us</h3>
              <p>
                If you have any questions about this Privacy Statement, please
                contact us at privacy@Halentech.com, or write us at Halen Group
                Attn: Legal, 651 N Broad St Ste 205, Middletown, DE, 19709-6402
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default PrivacyPolicy;
