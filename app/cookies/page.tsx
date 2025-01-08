export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-3xl mx-auto prose">
        <h1>Cookie Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. What Are Cookies</h2>
        <p>Cookies are small text files that are stored on your computer when you visit our website.</p>

        <h2>2. How We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Remember your preferences</li>
          <li>Understand how you use our website</li>
          <li>Keep you signed in</li>
          <li>Process your applications</li>
        </ul>

        <h2>3. Managing Cookies</h2>
        <p>You can control and manage cookies through your browser settings.</p>
      </div>
    </div>
  );
}