export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-3xl mx-auto prose">
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service.</p>

        <h2>2. ID Card Services</h2>
        <p>We provide ID card registration and processing services subject to the following conditions:</p>
        <ul>
          <li>All information provided must be accurate and truthful</li>
          <li>You must be eligible to apply for an ID card</li>
          <li>Payment must be completed before processing begins</li>
        </ul>

        <h2>3. User Responsibilities</h2>
        <p>You are responsible for maintaining the confidentiality of your account information and for all activities under your account.</p>
      </div>
    </div>
  );
}