import React from 'react';
import './privacyPolicy.css';
import NavHeader from './component/NavHeader';
import Footer from './component/Footer';

const PrivacyPolicyPage = () => {
    return (
        <div>
            <NavHeader />
            
            <div className="privacy-policy-container">
                <h1 className='privacy-policy-heading-h1'>Privacy Policy</h1>

                <h2 className='privacy-policy-heading-h2'>Introduction</h2>
                <p className='privacy-policy-text'>Welcome to Civil HandNotes - GATE App. Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you use our app.</p>

                <h2 className='privacy-policy-heading-h2'>Information We Collect</h2>
                <h3 className='privacy-policy-heading-h3'>Personal Information:</h3>
                <ul className='privacy-policy-list'>
                    <li className='privacy-policy-list-item'>User Account Information: When you sign up or log in, we collect your name, email address or phone number.</li>
                    <li className='privacy-policy-list-item'>Payment Information: For processing payments, we collect payment details such as user email, phone number, payment session ID, order ID, and transaction details.</li>
                </ul>

                <h2 className='privacy-policy-heading-h2'>How We Use Your Information</h2>
                <p className='privacy-policy-text'><strong>To Provide and Improve Our Services:</strong></p>
                <ul className='privacy-policy-list'>
                    <li className='privacy-policy-list-item'>To create and manage your account.</li>
                    <li className='privacy-policy-list-item'>To process payments and recharge transactions.</li>
                    <li className='privacy-policy-list-item'>To provide customer support.</li>
                </ul>
                <p className='privacy-policy-text'><strong>Communication:</strong></p>
                <ul className='privacy-policy-list'>
                    <li className='privacy-policy-list-item'>To send you updates, notifications, and other information related to your use of the app.</li>
                </ul>
                <p className='privacy-policy-text'><strong>Legal Compliance:</strong></p>
                <ul className='privacy-policy-list'>
                    <li className='privacy-policy-list-item'>To comply with legal obligations and respond to lawful requests.</li>
                </ul>

                <h2 className='privacy-policy-heading-h2'>Sharing Your Information</h2>
                <p className='privacy-policy-text'>We do not share your personal information with third parties except in the following circumstances:</p>
                <ul className='privacy-policy-list'>
                    <li className='privacy-policy-list-item'>With Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as payment processing.</li>
                    <li className='privacy-policy-list-item'>For Legal Reasons: We may disclose your information if required to do so by law or in response to a legal process.</li>
                </ul>

                <h2 className='privacy-policy-heading-h2'>Data Security</h2>
                <p className='privacy-policy-text'>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet or storage system can be guaranteed to be 100% secure.</p>

                <h2 className='privacy-policy-heading-h2'>Your Rights</h2>
                <p className='privacy-policy-text'>You have the following rights regarding your personal information:</p>
                <ul className='privacy-policy-list'>
                    <li className='privacy-policy-list-item'>Access: You can request access to the personal information we hold about you.</li>
                    <li className='privacy-policy-list-item'>Correction: You can request correction of any inaccurate or incomplete information.</li>
                    <li className='privacy-policy-list-item'>Deletion: You can request deletion of your personal information, subject to certain legal obligations.</li>
                    <li className='privacy-policy-list-item'>Objection: You can object to the processing of your personal information in certain circumstances.</li>
                </ul>
                <p className='privacy-policy-text'>To exercise these rights, please contact us at <a href="mailto:your@email.com">civilhandnotes@gmail.com</a>.</p>

                <h2 className='privacy-policy-heading-h2'>Changes to This Privacy Policy</h2>
                <p className='privacy-policy-text'>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.</p>

                <h2 className='privacy-policy-heading-h2'>Contact Us</h2>
                <p className='privacy-policy-text'>If you have any questions or concerns about this privacy policy or our data practices, please contact us at:</p>
                <ul className='privacy-policy-list'>
                    <li className='privacy-policy-list-item'>Email: <a href="mailto:civilhandnotes@gmail.com">your@email.com</a></li>
                    <li className='privacy-policy-list-item'>Phone: +918609522792</li>
                </ul>

                <p className='privacy-policy-text'><strong>Acceptance of This Policy</strong></p>
                <p className='privacy-policy-text'>By using our app, you signify your acceptance of this privacy policy. If you do not agree to this policy, please do not use our app. Your continued use of the app following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
            </div>

            <Footer currentPath={'privacy'} />
        </div>
    );
}

export default PrivacyPolicyPage;
