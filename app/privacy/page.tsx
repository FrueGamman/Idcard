export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-3xl mx-auto prose">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us when applying for an ID card, including:</p>
        <ul>
          <li>Personal identification information (name, date of birth, etc.)</li>
          <li>Contact information (email address, phone number, physical address)</li>
          <li>Photo identification</li>
          <li>Payment information</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process your ID card application</li>
          <li>Communicate with you about your application</li>
          <li>Verify your identity</li>
          <li>Process payments</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information.</p>
      </div>
    </div>
  );
}