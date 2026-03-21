export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Akash Murnal. All rights reserved. -{' '}
        <span className="footer-tagline">Breaking bugs before they break trust.</span>
      </p>
    </footer>
  );
}
